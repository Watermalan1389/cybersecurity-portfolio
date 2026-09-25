/* PROJECT CONTENT
   Add a new object to this array to create a card automatically.
   Empty detail fields display "Not documented yet"; add your own lab notes.
   The included SVGs are concept diagrams, not screenshots or evidence.
   Set github to the actual repository URL when you are ready to share it. */
const projects = [
  {
    title: "Isolated Cybersecurity Home Lab",
    category: "Infrastructure / Security",
    description: "A VMware-based isolated cybersecurity lab designed for networking, controlled attack simulation, monitoring, hardening, and defensive testing.",
    tools: ["VMware", "Ubuntu Server", "Kali Linux", "Wazuh", "Docker", "Wireshark"],
    status: "In Progress",
    image: "assets/images/home-lab.svg",
    imageAlt: "Concept diagram showing an isolated lab with Linux, testing, and monitoring components.",
    imageCaption: "Concept diagram · screenshot to be added",
    github: "",
    details: {
      overview: "I'm building an isolated environment to explore networking and defensive security through controlled lab work.",
      architecture: "VMware-based isolated lab. A diagram of the actual network, virtual machines, and isolation settings is not documented here yet.",
      whatIBuilt: "A cybersecurity home lab in progress, with a focus on controlled testing, monitoring, and hardening.",
      screenshots: [],
      problems: "",
      solutions: "",
      whatILearned: "",
      improvements: ""
    }
  },

  {
    title: "Python Directory Scanner",
    category: "Python / Web Security",
    description: "A Python directory enumeration tool designed for authorised lab environments that checks wordlist paths against a target URL and compares response behaviour.",
    tools: ["Python", "Requests", "argparse"],
    status: "Completed / Improving",
    image: "assets/images/scanner.svg",
    imageAlt: "Conceptual flow from a wordlist to HTTP requests and response comparison.",
    imageCaption: "Concept diagram · screenshot to be added",
    github: "https://github.com/Watermalan1389/directory-scanner",
    details: {
      overview: "A directory enumeration project for practising Python and understanding HTTP responses in authorised lab environments.",
      architecture: "The script reads paths from a wordlist, requests those paths from a target URL, and compares response behaviour.",
      whatIBuilt: "A Python tool using Requests for HTTP requests and argparse for command-line arguments.",
      screenshots: [],
      problems: "",
      solutions: "",
      whatILearned: "",
      improvements: ""
    }
  }
];
