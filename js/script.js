/* 1. YOUR LINKS — replace these examples with your real public addresses.
   Placeholder links remain inactive so visitors are not sent to fake accounts. */
const profile = {
  github: "https://github.com/USERNAME",
  linkedin: "https://linkedin.com/in/USERNAME",
  email: "your@email.com"
};

/* 2. SMALL HELPERS */
function isRealWebLink(value) {
  if (!value || value.includes("USERNAME")) return false;
  try {
    return new URL(value).protocol === "https:";
  } catch {
    return false;
  }
}

function setExternalLink(link, url) {
  link.href = url;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.removeAttribute("aria-disabled");
}

// textContent treats project notes as plain text, not executable HTML.
function makeText(tag, text, className = "") {
  const element = document.createElement(tag);
  element.textContent = text;
  if (className) element.className = className;
  return element;
}

function fillTags(list, tools) {
  tools.forEach(tool => list.append(makeText("li", tool)));
}

function useImage(image, path, alt) {
  image.alt = alt;
  image.addEventListener("error", () => {
    image.src = "assets/images/placeholder.svg";
    image.alt = "Project image unavailable; screenshot to be added.";
    const caption = image.closest("figure")?.querySelector("figcaption");
    if (caption) caption.textContent = "Image unavailable · screenshot to be added";
  }, { once: true });
  image.src = path || "assets/images/placeholder.svg";
}

/* 3. PROFILE LINKS */
document.querySelectorAll("[data-contact]").forEach(link => {
  const key = link.dataset.contact;
  const value = profile[key];
  if (key === "email") {
    if (value !== "your@email.com" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      link.href = "mailto:" + value;
      link.removeAttribute("aria-disabled");
      link.querySelector("small").textContent = value;
    }
  } else if (isRealWebLink(value)) {
    setExternalLink(link, value);
    link.querySelector("small").textContent = value.replace("https://", "");
  }
});

document.querySelectorAll("[data-profile]").forEach(link => {
  const value = profile[link.dataset.profile];
  if (isRealWebLink(value)) setExternalLink(link, value);
  // Otherwise the hero's GitHub button leads to the contact placeholders.
});

/* 4. MOBILE NAVIGATION */
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-nav");
document.body.classList.add("js-enabled");
menuButton.hidden = false;

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    closeMenu();
    // Move focus into the chosen section before mobile navigation is hidden.
    const target = document.querySelector(link.hash);
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
  });
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia("(max-width: 760px)").addEventListener("change", closeMenu);

/* 5. BUILD THE PROJECT CARDS */
const grid = document.querySelector("#project-grid");
const template = document.querySelector("#project-template");

projects.forEach(project => {
  const card = template.content.cloneNode(true);
  card.querySelector("h3").textContent = project.title;
  card.querySelector(".project-description").textContent = project.description;
  card.querySelector(".project-category").textContent = project.category || "Project";
  const status = card.querySelector(".status");
  status.textContent = project.status;
  status.dataset.status = project.status;
  card.querySelector("figcaption").textContent = project.imageCaption || "";
  useImage(card.querySelector("img"), project.image, project.imageAlt || project.title);
  fillTags(card.querySelector(".tags"), project.tools);

  const repository = card.querySelector(".repository-link");
  if (isRealWebLink(project.github)) {
    setExternalLink(repository, project.github);
    repository.setAttribute("aria-label", project.title + " on GitHub");
  } else {
    repository.textContent = "GitHub · link to be added";
    repository.setAttribute("aria-disabled", "true");
  }
  const button = card.querySelector(".details-button");
  button.setAttribute("aria-label", "View details: " + project.title);
  button.addEventListener("click", () => openProject(project));
  grid.append(card);
});

/* 6. PROJECT DETAILS — one reusable dialog for every project. */
const dialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");

function detailSection(title) {
  const section = document.createElement("section");
  section.className = "detail-section";
  section.append(makeText("h3", title));
  dialogContent.append(section);
  return section;
}

function openProject(project) {
  document.querySelector("#dialog-title").textContent = project.title;
  document.querySelector("#dialog-status").textContent = project.status;
  dialogContent.replaceChildren();
  const details = project.details || {};
  const sections = [
    ["Overview", details.overview || project.description],
    ["Architecture", details.architecture],
    ["What I Built", details.whatIBuilt],
    ["Tools Used", "tools"],
    ["Screenshots", "screenshots"],
    ["Problems Encountered", details.problems],
    ["How I Fixed Them", details.solutions],
    ["What I Learned", details.whatILearned],
    ["Future Improvements", details.improvements]
  ];
  sections.forEach(([title, content]) => {
    const section = detailSection(title);
    if (title === "Tools Used") {
      const tags = document.createElement("ul");
      tags.className = "tags";
      fillTags(tags, project.tools);
      section.append(tags);
    } else if (title === "Screenshots") {
      if (!details.screenshots?.length) {
        section.append(makeText("p", "Screenshots to be added."));
      } else {
        details.screenshots.forEach(screenshot => {
          const figure = document.createElement("figure");
          const image = document.createElement("img");
          useImage(image, screenshot.src, screenshot.alt);
          image.loading = "lazy";
          figure.append(image, makeText("figcaption", screenshot.caption || ""));
          section.append(figure);
        });
      }
    } else {
      section.append(makeText("p", content || "Not documented yet."));
    }
  });
  const repositorySection = detailSection("GitHub Repository");
  if (isRealWebLink(project.github)) {
    const link = makeText("a", "View repository ↗", "button button-secondary");
    setExternalLink(link, project.github);
    repositorySection.append(link);
  } else {
    repositorySection.append(makeText("p", "Repository link to be added."));
  }
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add("dialog-open");
}

document.querySelector("#close-dialog").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
dialog.addEventListener("click", event => {
  // Only close when the click falls outside the dialog's rectangle.
  const box = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) dialog.close();
});

/* 7. OPTIONAL ENHANCEMENTS — content stays visible without them. */
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".project-card, .skill-group, .learning-card").forEach(element => revealObserver.observe(element));

  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll("a").forEach(link => {
        if (link.hash === "#" + entry.target.id) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-15% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(section => sectionObserver.observe(section));
}
