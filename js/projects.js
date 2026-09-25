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
  },

  {
    title: "Ubuntu Server Security Lab",
    category: "Linux / Defensive Security",
    description: "An Ubuntu Server security lab where I configured a firewall and Fail2ban, then performed controlled SSH authentication testing from a Kali Linux machine.",
    tools: ["Ubuntu Server", "UFW", "Fail2ban", "SSH", "Hydra", "Kali Linux"],
    status: "Completed",
    image: "assets/images/ubuntu-server.svg",
    imageAlt: "Placeholder for an Ubuntu Server security lab screenshot.",
    imageCaption: "Earlier project · limited documentation available · simple log screenshots",
    github: "https://github.com/Watermalan1389/ubuntu-server-security-lab",
    details: {
     overview: "This was one of my earlier cybersecurity projects. I created an Ubuntu Server lab, applied basic security controls, and performed controlled testing from a Kali Linux machine. I did not fully document the project while building it, so some of the original details are unavailable.",
      architecture: "The lab used an Ubuntu Server virtual machine and a Kali Linux virtual machine connected through a virtual network.",
      whatIBuilt: "I configured UFW and Fail2ban on the Ubuntu Server, then generated controlled failed SSH login attempts from Kali Linux to observe how the protection responded.",
      screenshots: [
  {
    src: "assets/projects/ubuntu-server-security-lab/banconfig.png",
    alt: "Fail2Ban configuration used in the Ubuntu Server security lab.",
    caption: "Fail2Ban jail configuration."
  },
  {
    src: "assets/projects/ubuntu-server-security-lab/fail2banlogs.png",
    alt: "Fail2Ban logs from the Ubuntu Server security lab.",
    caption: "Fail2Ban logs showing the SSH authentication testing."
  },
  {
    src: "assets/projects/ubuntu-server-security-lab/banstatus.png",
    alt: "Fail2Ban status after controlled SSH authentication testing.",
    caption: "Fail2Ban status showing the result of the SSH testing."
  }
],
      problems: "The specific problems I encountered were not documented at the time.",
      solutions: "The troubleshooting steps and solutions were not documented at the time.",
      whatILearned: "The project gave me practical experience with Linux server hardening, firewall rules, SSH authentication logs, and Fail2ban.",
      improvements: "If I rebuilt this project, I would document each configuration step, include a network diagram, save relevant logs and screenshots, and explain the results of each test."
    }
  }
];
