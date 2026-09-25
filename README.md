# Alan's cybersecurity portfolio

A responsive static portfolio using HTML, CSS, and vanilla JavaScript. No framework, package manager, build step, database, backend, paid dependency, or authentication is required. All fonts and assets work locally; there are no external scripts or trackers.

## Start here

1. Extract the ZIP and open the `portfolio` folder in VS Code.
2. Preview `index.html` in your browser, or use the local server below.
3. Replace the profile links at the top of `js/script.js`.
4. Edit your project notes and repository URLs in `js/projects.js`.
5. Add your own screenshots and review the content before publishing.

The supplied project summaries and statuses follow your brief. The diagrams are explicitly labelled concepts, not screenshots. Specific troubleshooting outcomes, lessons, improvements, and screenshots were not supplied, so those fields are visibly marked as not documented yet. No qualifications, employment, certifications, measured results, or dates have been invented. The learning list describes study topics and goals; edit it to match your current priorities.

## Folder structure

```text
portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── script.js
│   └── projects.js
├── assets/
│   ├── images/
│   │   ├── home-lab.svg
│   │   ├── wazuh.svg
│   │   ├── scanner.svg
│   │   ├── network.svg
│   │   └── placeholder.svg
│   └── icons/
│       └── favicon.svg
├── netlify.toml
└── README.md
```

## How the code fits together

| File | What you change here |
| --- | --- |
| `index.html` | Bio, navigation, skills, learning topics, contact headings, metadata, and the reusable card template |
| `css/style.css` | Colours, spacing, typography, card styles, responsive layout |
| `js/projects.js` | All project content, tools, images, status, notes, and repository URLs |
| `js/script.js` | Public profile links, card rendering, mobile menu, and project dialog behaviour |
| `netlify.toml` | Hosting settings and response headers |

`projects.js` loads first and defines the array. `script.js` loops through it, copies the HTML card template, and fills in its text. Each details button opens the same native HTML `<dialog>` with the selected project's notes. Text is inserted with `textContent`, rather than treated as HTML.

Read the numbered comment sections in the stylesheet and script to follow the code. There is no dependency installation or generated source to understand.

## Test locally

Opening `index.html` directly works because the site does not use modules or fetch local data. A small server more closely matches hosting:

```bash
cd portfolio
python3 -m http.server 8000 --bind 127.0.0.1
```

On Windows, use `py -m http.server 8000 --bind 127.0.0.1` if `python3` is unavailable. Visit <http://localhost:8000>. Stop the server with Ctrl+C. This server is only a local preview, not a required backend.

After editing, refresh the browser. If changes are cached, use Ctrl+Shift+R. Keep the developer console open when editing JavaScript: missing commas or quotation marks can stop the cards from rendering.

## Update the bio, skills, or learning topics

Edit the text inside the relevant sections in `index.html`:

- `id="home"`: introduction and headline.
- `id="about"`: personal background and interests.
- `id="skills"`: categories and tool lists.
- `id="learning"`: learning journey and the `<li>` items under Currently Learning.

Only list tools and experience that accurately reflect your work. Course and certification names in the learning list do not mean they have been completed.

## Update GitHub, LinkedIn, and email

At the top of `js/script.js`, replace:

```js
const profile = {
  github: "https://github.com/USERNAME",
  linkedin: "https://linkedin.com/in/USERNAME",
  email: "your@email.com"
};
```

Use full HTTPS URLs. The code updates the contact links and hero GitHub button together. Until configured, the hero GitHub button goes to the contact section, and the contact links are visibly inactive. Project repositories are separate: set each project's `github` value in `projects.js`.

There is no contact form or message storage. A configured email link opens the visitor's email app.

## Add a project

In `js/projects.js`, copy one existing object and add it before the final `];`. Separate objects with commas. You do not need to edit the HTML or rendering logic. For example:

```js
{
  title: "My next lab",
  category: "Linux / Security",
  description: "Write a short, factual description of the lab.",
  tools: ["Ubuntu Server", "Python"],
  status: "In Progress",
  image: "assets/images/placeholder.svg",
  imageAlt: "Placeholder for my next lab screenshot.",
  imageCaption: "Screenshot to be added",
  github: "", // Add the actual HTTPS repository URL when available.
  details: {
    overview: "Explain what you are trying to understand.",
    architecture: "Describe the real components and connections.",
    whatIBuilt: "Describe only what you have actually built.",
    screenshots: [],
    problems: "",
    solutions: "",
    whatILearned: "",
    improvements: ""
  }
}
```

Empty note fields display `Not documented yet.`. Fill them as you document the work. All statuses display as text; `In Progress`, `Completed / Improving`, and `Ongoing` have matching badge styles. New statuses still work.

Use `\n` inside a string for paragraph breaks. Notes are plain text; HTML tags will appear literally. For longer notes you can use JavaScript backtick strings spanning multiple lines.

## Add screenshots

1. Place your image in `assets/images/`, for example `wazuh-dashboard.png`.
2. Set that project's `image` to `assets/images/wazuh-dashboard.png`.
3. Write a meaningful `imageAlt` and change `imageCaption` to describe the screenshot.
4. To add full-size screenshots to the details dialog, use:

```js
screenshots: [
  {
    src: "assets/images/wazuh-dashboard.png",
    alt: "Describe what this screenshot actually shows.",
    caption: "Add a brief factual note about the screenshot."
  }
],
```

You can add more objects to that array. Paths are relative to `index.html`, not to `projects.js`. Match letter case exactly; use simple filenames without spaces. PNG, JPG, WebP, and SVG work. Review screenshots for credentials and private information before publishing. Missing images fall back to the bundled placeholder. The card uses `object-fit: contain` so screenshots are not cropped.

## Change the appearance

Edit the variables at the top of `css/style.css`. `--background`, `--surface`, `--text`, `--muted`, and `--accent` control the main palette. `--max-width` controls the content width, and `--radius` controls card rounding. Some diagram colours are inside the SVGs; edit those separately if you change the palette completely. Keep text/background contrast readable.

The site uses system fonts. Breakpoints near the bottom of the stylesheet handle tablet and mobile layouts. Reduced-motion preferences disable animation and smooth scrolling.

## Create a GitHub repository and push the site

1. Sign in at <https://github.com> and create a new repository, such as `cybersecurity-portfolio`.
2. Leave the new repository empty: do not initialise it with a README, license, or gitignore because the local project already contains files.
3. Run these commands **inside `portfolio`**, so `index.html` is at the repository root:

```bash
git init
git add .
git commit -m "Add cybersecurity portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/cybersecurity-portfolio.git
git push -u origin main
```

Replace `USERNAME` and the repository name with your own. Authenticate through GitHub's supported sign-in flow or GitHub Desktop if prompted; do not put access tokens in source files. If Git asks for a commit identity, configure it with the name and email you want attached to your commits; GitHub offers a private no-reply email option.

Alternatively, create the repository in GitHub Desktop, copy the **contents** of `portfolio` into its local folder, commit, and publish it.

## Deploy from GitHub to Netlify

1. Sign in at <https://app.netlify.com> with your chosen sign-in method.
2. Choose **Add new project** / **Import an existing project**, then select GitHub.
3. Authorise access to the repository you want to deploy and select it.
4. Choose the production branch `main` and these settings:

| Setting | Value |
| --- | --- |
| Base directory | Leave blank; the site is at the repository root |
| Build command | Leave blank; no build command is required |
| Publish directory | `.` |
| Environment variables | None |

5. Deploy and open the assigned Netlify URL after deployment succeeds.

`netlify.toml` sets the publish directory to `.`. If you previously configured a build command in the Netlify dashboard, clear it. If you intentionally keep this project nested inside another repository, set the base directory to that subfolder instead.

Once the GitHub repository is linked, pushing commits to the production branch triggers another deployment. To update the site:

```bash
git add .
git commit -m "Update project notes"
git push
```

Check the deployment status in Netlify before expecting the live page to change. This package has not been pushed to your GitHub account or deployed to Netlify for you.

Official references: [Deploy from a repository](https://docs.netlify.com/start/quickstarts/deploy-from-repository/), [build configuration](https://docs.netlify.com/build/configure-builds/overview/), and [continuous deployments](https://docs.netlify.com/deploy/create-deploys/).

## Hosting, metadata, and accessibility notes

- The page has a title, description, basic Open Graph text, and a custom favicon. Once you have a public domain, you can add a canonical URL and `og:url` in the HTML head. No social-preview image was supplied.
- Netlify sends the security headers in `netlify.toml`. The Content Security Policy permits local assets and deliberately excludes external scripts, fonts, and analytics. Update it intentionally if you later add an external service. These headers apply on Netlify, not the basic Python preview server.
- Navigation, buttons, and the dialog support keyboard use. Escape closes the menu or dialog, the dialog contains keyboard focus, and closing it restores focus to the initiating button.
- Visible focus rings, semantic sections, alt text, a skip link, responsive layout, and reduced motion are included.
- JavaScript is required for project cards and dialogs. The introduction, about, skills, learning sections, and navigation remain readable without it.
- Everything in this static site's public directory is public. No secrets or private documents belong here.

## Before publishing

- Review the four supplied summaries, tools, and statuses for accuracy.
- Add your real profile and repository URLs, screenshots, and project notes.
- Test the menu on a narrow screen and open/close all project dialogs.
- Check every link and image after deployment.

## Validation of this package

JavaScript syntax, project data loading, local file references, navigation targets, unique HTML IDs, SVG syntax, CSS brace structure, and Netlify configuration were checked. Browser rendering and interaction tests could not be completed in the creation environment because local browser access was unavailable. Use the local preview above to check the desktop/mobile layout and keyboard behaviour before publishing.
