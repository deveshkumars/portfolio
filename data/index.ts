export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I study Computer Science and Applied Math at Brown University",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/brown.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "Wherever I am, I'm always on the lookout for new technology",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "A few of my favorite technologies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with an interest in entrepreneurship and AI.",
    description: "About Me",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "1st place and $5000 at the Emergent AI Venture Conference",
    description: "Many Awards, like:",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to get in touch?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Undercurrent",
    des: "Public-opinion simulator that tests messages on LLM agent populations. Runs a 1,000-agent, 3-arm message test in 25 min for $2.14, validated against real Pew survey data across 100 questions and 27 demographic groups.",
    img: "/undercurrent.jpg",
    iconLists: [],
    link: "https://undercurrent.deveshkumar.net",
  },
  {
    id: 2,
    title: "DeveshOS: Bare-Metal ARM64 Kernel",
    des: "Preemptive multitasking OS kernel built from scratch on a Raspberry Pi 3 with no libc: hand-written ARM64 context switch, exception vectors, timer-driven round-robin scheduling, an ELF loader, and interrupt-driven I/O, enough to run Tiny BASIC.",
    img: "/coding.jpg",
    iconLists: [],
    link: "https://github.com/deveshkumars",
  },
  {
    id: 3,
    title: "Praeservo.org",
    des: "Random forest trained on 49K calls for service forecasts call volume across 714 zones (24.1% lower MAE than baseline). A weighted k-means patrol-placement tool cut risk-weighted response time by 21-35% in simulation.",
    img: "/praeservo.jpg",
    iconLists: [],
    link: "https://praeservo.org",
  },
  {
    id: 4,
    title: "Robot Perception, Planning & Learning from Demonstration",
    des: "ROS2/MuJoCo robotics work: a ProMP policy learned from 30 demonstrations, TurtleBot occupancy mapping (F1 0.89) and Bayes-filter localization, semantic mapping, RRT planning, and a Panda arm trajectory that opens a door.",
    img: "/coding.jpg",
    iconLists: [],
    link: "https://github.com/deveshkumars",
  },
  {
    id: 5,
    title: "UnionBuy",
    des: "Multi-agent AI bulk-shopping app on AWS Bedrock and the Strands SDK, with agents for price comparison, bulk-purchase optimization (20%+ savings), and fraud detection, served by FastAPI on AWS Lambda.",
    img: "/unionbuy.svg",
    iconLists: [],
    link: "https://devpost.com/software/unionbuy",
  },
  {
    id: 6,
    title: "ProxyPay",
    des: "Best Use of ARM at HackHarvard 2025: a payment-authentication platform built on an Arm-based AWS EC2 attestation flow with CCA token verification, and a Flask backend serving a React Native app and a demo POS.",
    img: "/proxypay.svg",
    iconLists: [],
    link: "https://github.com/deveshkumars",
  },
  {
    id: 7,
    title: "EZTrain: Drone RL to Edge Deployment",
    des: "End-to-end RL pipeline that trains a Crazyflie controller with PPO across 512 parallel MuJoCo/Brax environments, then deploys the JAX policy straight to drone hardware for about 65% faster workflows.",
    img: "/coding.jpg",
    iconLists: [],
    link: "https://github.com/deveshkumars/EZTrain",
  },
  {
    id: 8,
    title: "YourCade.io",
    des: "Engineered a full-stack web app for unique LLM-generated games with a serverless AWS Lambda + MongoDB Atlas backend and a save/load system. (We ran out of credits!)",
    img: "/yourcade.png",
    iconLists: [],
    link: "https://yourcade.io",
  },
  {
    id: 9,
    title: "Doom AI Project",
    des: "Trained an autonomous PPO agent to pass 3 VizDoom levels. Built a custom OpenAI Gym wrapper and a training system that runs fully on a single GPU in under 12 hours.",
    img: "/doom.png",
    iconLists: [],
    link: "https://deveshkumar.net",
  },
  {
    id: 10,
    title: "Transformer Based Trading Bot",
    des: "Built a deep learning model to predict US stock returns from the global factor dataset using intra-stock, inter-stock, and temporal aggregation, reaching a RankICIR of 0.5296 after only 3-4 hours of training.",
    img: "/tradingbot.svg",
    iconLists: [],
    link: "https://deveshkumar.net",
  },
  {
    id: 11,
    title: "FRC Robotics Competition",
    des: "Led team to Division Finalist at FRC World Championships (top 2 of 3000+ teams). Programmed autonomous routines and helped manage a 70+ person team.",
    img: "/422.png",
    iconLists: [],
    link: "https://deveshkumar.net",
  },
  {
    id: 12,
    title: "Brown Motion Picture Movie Website",
    des: "Built a fast, mobile-friendly movie site for a student org with Next.js & TailwindCSS, reaching a 94 Lighthouse score and automating email confirmations + subscriber management.",
    img: "/bmpc.svg",
    iconLists: [],
    link: "https://www.soulsistersthemovie.com",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AI/ML Engineering Intern - Agile Defense",
    desc: "Building LLM-agent platforms for research security and multi-source intelligence, a Slack agent that turns requirements into PRDs, Jira epics, and Claude Code-built prototypes, and a sensor-fusion alerting system for a defense SBIR.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Teaching Assistant - CSCI 1470: Deep Learning",
    desc: "Teaching assistant for Brown's Deep Learning course, which covers backpropagation, CNNs, RNNs, Transformers, GANs, and reinforcement learning.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "AI Research Intern - ACT Lab, Brown University",
    desc: "Developed a neural flight controller for autonomous drones with PPO in GPU-accelerated simulators (MuJoCo, IsaacSim, Pufferlib), and tackled Sim2Real transfer with policy freezing and byte-code quantization.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Product Manager - Full Stack @ Brown",
    desc: "Led a team of about 10 engineers and designers to design and ship a public resources website for LunaScope, running Agile ceremonies and managing the sprint schedule to on-time delivery.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 5,
    title: "Software Engineering Intern - GoodDrills",
    desc: "Built a user-engagement-focused React app prototype and ran a UX audit, proposing 5+ gamified features projected to lift customer engagement by ~48%.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 6,
    title: "Software Engineering Intern - Bootstrap World",
    desc: "Extended the official Rust book's interactive React quiz system with a card-sort question type (33% more question-type variety), an informational question type, and image support.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    link: "https://github.com/deveshkumars",
    img: "/git.svg",
  },
  {
    id: 2,
    link: "https://www.linkedin.com/in/realdeveshkumar/",
    img: "/link.svg",
  },
];
