// ---------------------------------------------------------------------------
// All portfolio content lives here. Edit freely — no need to touch components.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Arslan Khan",
  location: "Islamabad, 44000 - Pakistan",
  email: "arslandev5343@gmail.com",
  linkedin: "http://www.linkedin.com/in/arslan-khan-dev",
  github: "https://github.com/arslan-khan-dev",
};

export const roles = [
  "Full Stack Engineer",
  "React · Angular · Node.js · .NET · PHP/Laravel",
  "LLM Training & Prompt Engineering",
  "7+ Years Shipping Production Code",
];

export const stackLayers = [
  {
    tone: "sky",
    top: true,
    icon: "brain",
    title: "Intelligence Layer",
    sub: "LLM Training · Prompt Eng · RLHF",
  },
  {
    tone: "default",
    icon: "window",
    title: "Application",
    sub: "React · Angular · Node.js · .NET",
  },
  {
    tone: "default",
    icon: "api",
    title: "API Layer",
    sub: "REST · GraphQL · Microservices",
  },
  {
    tone: "coral",
    icon: "db",
    title: "Database",
    sub: "MySQL · MongoDB · PostgreSQL",
  },
  {
    tone: "default",
    icon: "cloud",
    title: "Infrastructure",
    sub: "AWS · Azure · Docker · CI/CD",
  },
];

export const facts = [
  { k: "Role", v: "Full Stack Engineer" },
  { k: "Focus", v: "Web Platforms · LLM Training" },
  { k: "Experience", v: "7+ Years" },
  { k: "Current", v: "Turing — Remote, since Dec 2024" },
  { k: "Previously", v: "Systems Ltd, Islamabad" },
  { k: "Location", v: "Islamabad, Pakistan" },
  { k: "Education", v: "B.S. Information Technology, UAAR" },
];

export const skillGroups = [
  {
    tone: "sky",
    icon: "brain",
    title: "AI / LLM",
    items: [
      "AI Agent Development",
      "Prompt Engineering",
      "MCP / OpenAI APIs",
      "LangChain / LangGraph",
      "RAG / Fine Tuning (SFT, RLHF)",
      "AI Workflow Orchestration / AI Guardrails",
      "Vector DBs (ChromaDB)",
    ],
  },
  {
    tone: "default",
    icon: "window",
    title: "Frontend",
    items: [
      "JavaScript (ES6+) / TypeScript",
      "React / Next.js / Redux",
      "Angular / RxJs",
      "Ngxs / Ngrx",
      "Vue.js / Nuxt.js",
      "HTML5 / Bootstrap",
      "CSS / SCSS / Tailwind CSS",
    ],
  },
  {
    tone: "default",
    icon: "api",
    title: "Backend",
    items: [
      "Node.js / Express.js",
      "Nest.js",
      "ASP.NET Core / MVC",
      "Python",
      "PHP / Laravel",
      "CodeIgniter",
      "Entity Framework / EF Core",
    ],
  },
  {
    tone: "coral",
    icon: "db",
    title: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "Microsoft SQL Server",
      "MongoDB",
      "Redis",
      "DynamoDB",
      "Elasticsearch",
    ],
  },
  {
    tone: "default",
    icon: "arch",
    title: "APIs & Architecture",
    items: [
      "RESTful APIs & Web APIs",
      "Microservices Architecture",
      "MVC & Layered Architecture",
      "API Gateway",
      "GraphQL",
      "Event-Driven Architecture",
      "Third-Party API Integration",
    ],
  },
  {
    tone: "default",
    icon: "cloud",
    title: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Lambda)",
      "Elastic Beanstalk",
      "Azure",
      "Docker",
      "Git",
      "Linux",
      "CI/CD",
    ],
  },
];

export const experience = [
  {
    role: "Full Stack Engineer",
    company: "Turing",
    location: "San Francisco, CA, US · Remote",
    date: "Dec 2024 — Present",
    current: true,
    bullets: [
      "Train and evaluate large language models on coding and reasoning tasks, reviewing outputs against task requirements and grading criteria.",
      "Write and refine prompts for LLM-based features, iterating on instructions, context, and few-shot examples to improve response accuracy.",
      "Run structured human feedback through reinforcement learning (RLHF) workflows that feed into fine-tuning cycles.",
      "Design edge-case test scenarios to stress-test prompt behavior and surface gaps in model reasoning.",
      "Build AI-integrated features in React, Angular, and Node.js, connecting front-end interfaces to LLM-backed services.",
      "Benchmark outputs across models and prompt versions to track response quality and instruction adherence.",
      "Implement Retrieval-Augmented Generation (RAG) pipelines and vector search solutions using embedding models to improve the accuracy and relevance of LLM responses.",
      "Develop and integrate RESTful APIs and microservices to enable seamless communication between frontend applications and AI-powered backend services.",
      "Analyze recurring model failure patterns, document evaluation findings, and recommend prompt improvements to enhance reasoning, coding quality, and response consistency.",
      "Collaborate with cross-functional Agile teams to design, review, and deploy AI-driven features while contributing to code reviews, prompt reviews, and CI/CD best practices.",
    ],
    tags: [
      "JavaScript,",
      "React,",
      "Angular,",
      "Node.js,",
      "Fine Tuning,",
      "Prompt Engineering,",
      "RLHF",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Systems Ltd",
    location: "Islamabad, Pakistan",
    date: "Mar 2019 — Dec 2024",
    current: false,
    bullets: [
      "Built and maintained a Learning Management System on ASP.NET, C#, and MSSQL — course creation, content delivery, and enrollment.",
      "Built assessment and grading modules: quiz creation, automated scoring, and progress tracking for students and instructors.",
      "Designed and developed RESTful APIs using ASP.NET Web API and Entity Framework to support scalable, secure communication between frontend applications and backend services.",
      "Implemented role-based access control across admin, instructor, and student permission tiers.",
      "Built interactive, component-based UIs with React, Next.js, Redux, Angular, and Vue.js across multiple client projects.",
      "Integrated headless CMS platforms (Strapi, Keystone, Contentful) and WordPress REST/GraphQL APIs.",
      "Optimized application performance through database query tuning, caching strategies, and frontend performance improvements, enhancing overall responsiveness and user experience.",
      "Deployed and managed services on AWS (EC2, S3, Lambda); worked with PHP/Laravel and Drupal on Windows and Linux.",
      "Implemented CI/CD workflows and version control best practices using Git, enabling efficient deployments and streamlined development across multiple environments.",
      "Collaborated with cross-functional Agile teams, participating in sprint planning, code reviews, and technical design discussions to deliver high-quality software solutions.",
    ],
    tags: [
      "ASP.NET,",
      "C#,",
      "React,",
      "Angular,",
      "Vue.js,",
      "AWS,",
      "PHP/Laravel",
    ],
  },
];

export const projects = [
  {
    index: "01 / 03",
    title: "Fundraising & Community Donation Platform",
    role: "Angular · PHP → React · Node.js Rebuild",
    desc: "A platform that lets people launch campaigns around crises — wars, floods, earthquakes — and lets the community donate directly toward relief. I built out community pages for raising awareness and starting campaigns, a reporting dashboard tracking total funds raised and donation entries per campaign, and a built-in Zakat calculator with daily Sadaqah tracking. Started on the original Angular + PHP (custom CRM) build, then carried features across to the platform's React / Node.js rebuild.",
    tags: ["Angular,", "PHP,", "Symfony,", "React,", "Node.js"],
    url: "launchgood.com/donate",
    images: [
      { src: "/assets/project1/1.jpg", alt: "Fundraising platform homepage" },
      { src: "/assets/project1/2.jpg", alt: "Fundraising campaigns listing" },
      { src: "/assets/project1/3.jpg", alt: "Start a campaign flow" },
      { src: "/assets/project1/4.jpg", alt: "Zakat calculator" },
      { src: "/assets/project1/5.jpg", alt: "Zakat onboarding" },
      { src: "/assets/project1/6.jpg", alt: "Community pages" },
    ],
  },
  {
    index: "02 / 03",
    title: "FlyNYON — Helicopter Tour Booking",
    role: "Nuxt.js · Nest.js · Netlify",
    desc: 'The booking platform for FlyNYON, a helicopter tour and aerial photography company known for its "doors-off" flights over New York City. Built with Nuxt.js on the front end and Nest.js on the back end, deployed on Netlify. I worked on the flight-package pages and the booking flow that takes a customer from browsing tours to a confirmed, paid seat.',
    tags: [
      "Vue.js,",
      "Nuxt.js,",
      "Nest.js,",
      "Netlify,",
      "Contentful",
      "Stripe Checkout",
    ],
    url: "flynyon.com/book",
    images: [
      { src: "/assets/project2/1.jpg", alt: "FlyNYON pricing page" },
      {
        src: "/assets/project2/2.jpg",
        alt: "FlyNYON doors-off vs doors-on selection",
      },
      { src: "/assets/project2/3.jpg", alt: "FlyNYON flight details" },
      { src: "/assets/project2/4.jpg", alt: "FlyNYON booking calendar" },
      { src: "/assets/project2/5.jpg", alt: "FlyNYON SkyClub membership" },
    ],
  },
  {
    index: "03 / 03",
    title: "ESI — Business Communication Platform",
    role: "React · Node.js Microservices",
    desc: "A cloud and on-premises business phone platform. I built a monitoring dashboard — React on the front end, Node.js microservices underneath — that integrates with connected hardware for security purposes: live device status, group-based access permissions, and access-history logs with success/failure tracking. I also helped design the device-integration layer so new hardware could be added without touching the core application.",
    tags: ["React,", "Node.js,", "Microservices,", "Device Integration"],
    url: "esi.dashboard/devices",
    images: [
      {
        src: "/assets/project3/1.jpg",
        alt: "ESI business communication homepage",
      },
      { src: "/assets/project3/2.jpg", alt: "ESI eCloud PBX product page" },
      { src: "/assets/project3/3.jpg", alt: "ESI community program page" },
      {
        src: "/assets/project3/4.jpg",
        alt: "Device dashboard — access history",
      },
      {
        src: "/assets/project3/5.jpg",
        alt: "Device dashboard — group permissions modal",
      },
      {
        src: "/assets/project3/6.jpg",
        alt: "Device dashboard — activity analytics",
      },
      { src: "/assets/project3/7.jpg", alt: "Device dashboard — devices list" },
    ],
  },
];

export const education = {
  degree: "Bachelor's in Information Technology",
  school: "University of Arid Agriculture, Rawalpindi (UAAR)",
  date: "Oct 2016 — Sept 2020",
};
