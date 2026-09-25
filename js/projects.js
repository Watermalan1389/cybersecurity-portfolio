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
    title: "Wazuh SIEM Lab",
    category: "Blue Team / Monitoring",
    description: "A small security monitoring environment where I connected Linux agents to a Wazuh manager and tested SSH authentication events, alerting, log collection, manager downtime behaviour, and SIEM investigation.",
    tools: ["Wazuh", "Ubuntu Server", "SSH", "journald"],
    status: "In Progress",
    image: "assets/images/wazuh.svg",
    imageAlt: "Conceptual flow from Linux events through a Wazuh manager to investigation.",
    imageCaption: "Concept diagram · screenshot to be added",
    github: "",
    details: {
      overview: "A small lab for exploring how Linux events reach a SIEM and how to investigate them.",
      architecture: "Linux agents connected to a Wazuh manager. Exact host details and configuration are not documented here yet.",
      whatIBuilt: "I connected Linux agents to a Wazuh manager and tested SSH authentication events, alerting, log collection, manager downtime behaviour, and SIEM investigation.",
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
    github: "",
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
    title: "Cisco Packet Tracer Network Labs",
    category: "Networking / Foundations",
    description: "Hands-on networking labs involving routers, switches, DHCP, static routing, subnetting, troubleshooting, and packet flow.",
    tools: ["Cisco Packet Tracer", "TCP/IP", "DHCP", "Routing", "Subnetting"],
    status: "Ongoing",
    image: "assets/images/network.svg",
    imageAlt: "Concept diagram of two local networks connected through routers.",
    imageCaption: "Concept diagram · screenshot to be added",
    github: "",
    details: {
      overview: "Networking labs for understanding how devices communicate and how to troubleshoot connectivity.",
      architecture: "Router-and-switch lab networks in Cisco Packet Tracer. Exact topologies and addressing plans are not documented here yet.",
      whatIBuilt: "Hands-on labs involving DHCP, static routing, subnetting, troubleshooting, and packet flow.",
      screenshots: [],
      problems: "",
      solutions: "",
      whatILearned: "",
      improvements: ""
    }
  }
];
