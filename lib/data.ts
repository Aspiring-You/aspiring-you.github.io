// lib/data.ts – Static data for Aspiring You

export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  duration: string;
  rating: number;
  reviews: number;
  students: number;
  price: number;
  originalPrice: number;
  overview: string;
  level: string;
  image: string;
  badge?: string;
  badgeColor?: string;
  skills: string[];
  highlights: string[];
  keyFeatures: string[];
  prerequisites: string[];
  suitableFor: string[];
  curriculum: {
    module: string;
    title: string;
    lessons: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const courses: Course[] = [
  {
    id: "devops-beginner",
    title: "DevOps Course – Beginner to Job-Ready",
    category: "DevOps",
    description:
      "Start your DevOps journey with a structured training program designed for beginners. Learn essential DevOps tools and practices including Linux, Git, Docker, CI/CD, Terraform, Kubernetes, Monitoring, and Ansible.",
    duration: "3 Months",
    rating: 4.8,
    reviews: 1420,
    students: 8500,
    price: 20000,
    originalPrice: 29999,
    overview:
      "This DevOps course is designed for beginners who want practical, hands-on training in Linux, Git, Docker, CI/CD, Terraform, Kubernetes, Monitoring, and Ansible. Learn real DevOps workflows used in production environments and build job-ready automation skills.",
    level: "Beginner",
    image: "/devops_beginner.png",
    badge: "New",
    badgeColor: "#ec4899",
    skills: ["Linux", "Git", "Docker", "CI/CD", "Terraform", "Kubernetes", "Prometheus", "Ansible"],
    highlights: ["Hands-on Labs", "Recorded Videos", "DevOps Certification", "Job-Ready Roadmaps"],
    keyFeatures: [
      "Hands-on DevOps training with real tools",
      "Recorded videos for flexible learning",
      "Practical labs for every single module",
      "Official DevOps certification upon completion",
      "Structured progression from basics to automation",
      "Strong foundation for Cloud & DevOps roles"
    ],
    prerequisites: [
      "Basic computer knowledge",
      "No prior DevOps experience required",
      "Willingness to work with command-line tools"
    ],
    suitableFor: [
      "Fresh graduates",
      "IT support professionals",
      "Career switchers",
      "Students seeking DevOps jobs"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "DevOps & Linux Basics",
        lessons: [
          "How software applications work in real companies",
          "Traditional vs DevOps workflow",
          "DevOps lifecycle stages",
          "Linux installation & terminal usage",
          "File systems, users & permissions",
          "Common DevOps commands",
          "Package installation basics"
        ]
      },
      {
        module: "Module 2",
        title: "Git & GitHub",
        lessons: [
          "Version control fundamentals",
          "Git installation & configuration",
          "Repository management",
          "Add, commit, push, pull workflow",
          "Branching & merging",
          "Pull request workflow",
          "Collaboration basics"
        ]
      },
      {
        module: "Module 3",
        title: "Docker",
        lessons: [
          "Containerization concepts",
          "Virtual machines vs containers",
          "Docker installation",
          "Docker images & containers",
          "Writing a Dockerfile",
          "Building & pushing images to DockerHub"
        ]
      },
      {
        module: "Module 4",
        title: "CI/CD",
        lessons: [
          "CI/CD pipeline fundamentals",
          "Automation concepts",
          "GitHub Actions workflows",
          "Build automation on code push",
          "Basic pipeline setup"
        ]
      },
      {
        module: "Module 5",
        title: "Terraform",
        lessons: [
          "Infrastructure as Code (IaC)",
          "Provider setup",
          "Terraform commands",
          "Plan & apply workflow",
          "Creating infrastructure resources"
        ]
      },
      {
        module: "Module 6",
        title: "Kubernetes",
        lessons: [
          "Container orchestration concepts",
          "Kubernetes architecture",
          "Pods & deployments",
          "Running simple applications"
        ]
      },
      {
        module: "Module 7",
        title: "Monitoring",
        lessons: [
          "Monitoring fundamentals",
          "Metrics & observability basics",
          "Prometheus overview",
          "Grafana dashboards"
        ]
      },
      {
        module: "Module 8",
        title: "Ansible",
        lessons: [
          "Configuration management",
          "Ansible architecture",
          "Inventory setup",
          "Ad-hoc commands",
          "Writing basic playbooks"
        ]
      }
    ],
    faqs: [
      {
        question: "Is this DevOps course suitable for beginners?",
        answer: "Yes. The program starts from Linux fundamentals and proceeds step-by-step."
      },
      {
        question: "Does this DevOps course include hands-on training?",
        answer: "Yes. Every module includes practical implementation and labs."
      },
      {
        question: "Will I get a DevOps certificate?",
        answer: "Yes. A certificate of completion is provided upon finishing the modules."
      },
      {
        question: "Can this help me get a DevOps job?",
        answer: "It provides the foundational skills required for entry-level DevOps roles. Success depends on practice and interviews."
      },
      {
        question: "Is coding mandatory?",
        answer: "Basic scripting and understanding help, but no advanced programming is required."
      }
    ]
  },
  {
    id: "devops-intermediate",
    title: "DevOps Intermediate Program – Advanced",
    category: "DevOps",
    description:
      "Deepen your practical expertise with automation, containerization, infrastructure management, and deployment pipelines. Learn advanced Git, Docker optimization, Terraform variable configurations, Kubernetes services, and Prometheus/Grafana.",
    duration: "3 Months",
    rating: 4.8,
    reviews: 1540,
    students: 9800,
    price: 30000,
    originalPrice: 39999,
    overview:
      "The DevOps Intermediate Program is designed for professionals who already understand basic DevOps concepts and want to deepen their practical expertise. This program focuses on real operational scenarios such as automation scripting, CI/CD pipeline design, infrastructure management, container orchestration, and monitoring. Learners gain hands-on experience with industry tools used in modern software delivery environments.",
    level: "Intermediate",
    image: "/devops_intermediate.png",
    badge: "Trending",
    badgeColor: "#8b5cf6",
    skills: ["Linux Admin", "Git Workflows", "Docker", "CI/CD", "Terraform", "Kubernetes", "Prometheus", "Ansible"],
    highlights: ["Advanced Tool Labs", "Real-World Pipeline Design", "Hands-On Troubleshooting", "Ansible Playbooks"],
    keyFeatures: [
      "Advanced DevOps tool usage with practical labs",
      "Real-world pipeline and automation workflows",
      "Infrastructure and container orchestration training",
      "Hands-on troubleshooting and operational practices",
      "Focus on operational DevOps skills for production",
      "Industry-aligned tool usage across microservices"
    ],
    prerequisites: [
      "Basic understanding of Linux commands",
      "Familiarity with Git and Docker fundamentals",
      "Basic knowledge of DevOps concepts"
    ],
    suitableFor: [
      "DevOps beginners progressing to intermediate level",
      "System administrators transitioning into DevOps",
      "Software engineers working with deployment pipelines",
      "Cloud and infrastructure professionals"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Linux for DevOps",
        lessons: [
          "Service management & process monitoring",
          "Disk usage and memory checks",
          "Networking commands & log file analysis",
          "Shell scripting basics & automation scripts"
        ]
      },
      {
        module: "Module 2",
        title: "Git Workflow",
        lessons: [
          "Branching strategies (feature & release branch)",
          "Merge conflict resolution",
          "Code review flow & managing team repositories"
        ]
      },
      {
        module: "Module 3",
        title: "Docker Project Usage",
        lessons: [
          "Custom image creation & optimizing Dockerfiles",
          "Image tagging strategies & multi-container apps",
          "Docker integration in CI/CD pipelines",
          "Debugging containers"
        ]
      },
      {
        module: "Module 4",
        title: "CI/CD Pipeline",
        lessons: [
          "Pipeline design concepts",
          "Multi-stage workflow setup & build automation",
          "Docker build pipelines & deployment steps",
          "Managing secrets & pipeline troubleshooting"
        ]
      },
      {
        module: "Module 5",
        title: "Terraform",
        lessons: [
          "Variables & outputs configuration",
          "Reusable infrastructure configurations",
          "Environment setup & state basics",
          "Infrastructure updates"
        ]
      },
      {
        module: "Module 6",
        title: "Kubernetes",
        lessons: [
          "Deployments, scaling, and services fundamentals",
          "ConfigMaps & secrets management",
          "Rolling updates & basic troubleshooting"
        ]
      },
      {
        module: "Module 7",
        title: "Monitoring",
        lessons: [
          "Prometheus setup & metrics collection",
          "Grafana dashboards & application monitoring",
          "Alerting fundamentals"
        ]
      },
      {
        module: "Module 8",
        title: "Ansible",
        lessons: [
          "Writing automation playbooks",
          "Managing multiple servers",
          "Performing configuration updates",
          "Application deployment automation"
        ]
      }
    ],
    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer: "No. This program is designed for learners who already understand basic DevOps tools such as Linux, Git, and Docker."
      },
      {
        question: "What practical experience will I gain?",
        answer: "You will design CI/CD pipelines, manage infrastructure using Terraform, deploy applications with Kubernetes, and implement monitoring systems."
      },
      {
        question: "Do I need programming knowledge?",
        answer: "Basic scripting knowledge is helpful but not mandatory."
      },
      {
        question: "Will this program help in advancing a DevOps career?",
        answer: "Yes. The program focuses on operational skills commonly required for DevOps engineer roles."
      },
      {
        question: "Will I receive certification?",
        answer: "Yes. Learners who complete the training program will receive a certification validating their skills."
      }
    ]
  },
  {
    id: "devops-advanced",
    title: "DevOps Advanced Program",
    category: "DevOps",
    description:
      "Master production-grade DevOps practices with advanced training focused on enterprise workflows, automation, scalability, and infrastructure management. Designed for handling complex deployment environments.",
    duration: "4 Months",
    rating: 4.9,
    reviews: 1120,
    students: 5400,
    price: 50000,
    originalPrice: 69999,
    overview:
      "The DevOps Advanced Program is designed for professionals who want to understand how DevOps operates in real production environments. This program focuses on advanced Git workflows, CI/CD pipeline architecture, infrastructure management, Kubernetes deployments, monitoring strategies, and automation practices used by DevOps engineers in modern software teams.",
    level: "Advanced",
    image: "/devops_advanced.png",
    badge: "Best Seller",
    badgeColor: "#f59e0b",
    skills: ["Enterprise DevOps", "Advanced Git", "Docker Project", "Multi-Stage CI/CD", "Terraform Multi-Env", "Production K8s", "Ansible Automation"],
    highlights: ["Production Workflows", "Enterprise CI/CD Pipelines", "Multi-Environment Terraform", "Kubernetes Scaling & Rollouts"],
    keyFeatures: [
      "Production-level DevOps workflow training",
      "Advanced automation and deployment practices",
      "Real project deployment scenarios in AWS/Cloud",
      "Hands-on experience with enterprise DevOps tools",
      "Troubleshooting techniques used in production environments",
      "Monitoring and alerting design at scale"
    ],
    prerequisites: [
      "Experience with Linux, Git, Docker, and basic CI/CD workflows",
      "Familiarity with DevOps fundamentals",
      "Understanding of containerization and automation concepts"
    ],
    suitableFor: [
      "DevOps engineers seeking advanced operational skills",
      "System administrators working with infrastructure automation",
      "Cloud engineers managing containerized environments",
      "Software engineers involved in deployment pipelines"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "DevOps Workflow",
        lessons: [
          "End-to-end DevOps pipeline workflows",
          "Environment strategies (Dev, Test, Prod)",
          "Build and release processes",
          "Deployment lifecycles & production changes"
        ]
      },
      {
        module: "Module 2",
        title: "Advanced Git",
        lessons: [
          "Rebase workflows & cherry-pick usage",
          "Release tagging & production branches",
          "Git history cleanup & hotfix scenarios"
        ]
      },
      {
        module: "Module 3",
        title: "Docker in Projects",
        lessons: [
          "Optimizing Docker images for speed & size",
          "Debugging container issues & private registries",
          "Image versioning & running in production"
        ]
      },
      {
        module: "Module 4",
        title: "CI/CD Pipelines",
        lessons: [
          "Designing complete multi-stage pipelines",
          "Automated deployments & rollback strategies",
          "Pipeline monitoring, troubleshooting, and failures"
        ]
      },
      {
        module: "Module 5",
        title: "Terraform for Projects",
        lessons: [
          "Managing Dev, Staging, and Prod environments",
          "Reusable configurations & modules",
          "Infrastructure planning & change management",
          "Safe infrastructure updates"
        ]
      },
      {
        module: "Module 6",
        title: "Kubernetes Project Deployment",
        lessons: [
          "Deploying production-ready applications",
          "Application scaling & rolling updates",
          "Debugging cluster issues & logs"
        ]
      },
      {
        module: "Module 7",
        title: "Monitoring & Alerts",
        lessons: [
          "Designing monitoring workflows with Prometheus",
          "Setting up alerting systems & Grafana dashboards",
          "Application monitoring & metrics debugging"
        ]
      },
      {
        module: "Module 8",
        title: "Automation with Ansible",
        lessons: [
          "Writing advanced Ansible playbooks",
          "Server configuration & deployment automation",
          "Managing multiple servers in real-time scenarios"
        ]
      }
    ],
    faqs: [
      {
        question: "Who should take this DevOps advanced course?",
        answer: "This course is designed for professionals with prior DevOps experience who want to learn production-level workflows."
      },
      {
        question: "What practical experience will I gain?",
        answer: "You will design pipelines, deploy applications in Kubernetes, manage infrastructure using Terraform, and automate deployments."
      },
      {
        question: "Is this course focused on real projects?",
        answer: "Yes. The program emphasizes real-world DevOps workflows used in software companies."
      },
      {
        question: "Do I need programming experience?",
        answer: "Basic scripting knowledge is helpful but not mandatory."
      },
      {
        question: "Will I receive certification?",
        answer: "Yes. Participants receive a certification after completing the program."
      }
    ]
  },
  {
    id: "java-developer",
    title: "Full Stack Java Developer Program",
    category: "Software Development",
    description:
      "Build industry-ready backend development skills with comprehensive training in Core Java, Spring Framework, Spring Boot, Microservices, API Development, Security, and DevOps practices.",
    duration: "6 Months",
    rating: 4.9,
    reviews: 1720,
    students: 12400,
    price: 29999,
    originalPrice: 59999,
    overview:
      "The Full Stack Java Developer Program is designed to train developers in building modern backend applications using Java, Spring Boot, and microservices architecture. The program also covers DevOps practices including CI/CD pipelines, containerization, and infrastructure automation. Through structured sessions and practical exercises, learners develop the technical skills required to build scalable applications and manage production environments.",
    level: "Beginner to Advanced",
    image: "/java_developer.png",
    badge: "Top Rated",
    badgeColor: "#10b981",
    skills: ["Java OOP", "Spring Boot", "Microservices", "JWT Security", "Kafka", "Docker", "Kubernetes", "JPA"],
    highlights: ["Spring Boot & MVC", "Microservices Architecture", "Asynchronous Messaging with Kafka", "JWT & Spring Security"],
    keyFeatures: [
      "Comprehensive training in Java, Spring Boot, Microservices, and DevOps",
      "Hands-on coding sessions with real-world examples",
      "Exposure to modern backend architecture and distributed systems",
      "Practical experience with CI/CD, Docker, Kubernetes, and monitoring tools",
      "Data persistence design using JPA and Hibernate"
    ],
    prerequisites: [
      "Basic programming knowledge",
      "Familiarity with object-oriented concepts is helpful"
    ],
    suitableFor: [
      "Computer science students",
      "Entry-level software developers",
      "Backend developers learning Spring Boot",
      "Engineers transitioning into microservices architecture"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Core Java & Git",
        lessons: [
          "Java OOP Fundamentals (classes, inheritance, polymorphism)",
          "Working with Collections & Streams",
          "Exception Handling & functional features",
          "Multithreading & Concurrency",
          "JVM Internals (garbage collection, memory management)",
          "Git Essentials for Developers"
        ]
      },
      {
        module: "Module 2",
        title: "Spring Framework & Spring Boot",
        lessons: [
          "Spring IoC & Dependency Injection",
          "Spring Configuration & Spring MVC",
          "Dynamic templates with Thymeleaf",
          "Spring Boot fundamentals & Actuator",
          "Data persistence with Spring JDBC & JPA",
          "Spring Security & API security with JWT",
          "Testing Spring applications & Dockerization"
        ]
      },
      {
        module: "Module 3",
        title: "Advanced Backend Development",
        lessons: [
          "REST API Design principles",
          "Microservices architecture & Service discovery",
          "API Gateway, routing & distributed tracing",
          "Asynchronous messaging with Kafka",
          "Caching & NoSQL integration (Redis / MongoDB)",
          "GraphQL and gRPC protocols"
        ]
      },
      {
        module: "Module 4",
        title: "DevOps, CI/CD & Monitoring",
        lessons: [
          "CI/CD pipeline implementation",
          "Containerization & Kubernetes deployment",
          "Infrastructure as Code with Terraform",
          "Logging, monitoring & metrics collection"
        ]
      }
    ],
    faqs: [
      {
        question: "Is this program beginner friendly?",
        answer: "Yes. The program starts with Java fundamentals before progressing to advanced backend topics."
      },
      {
        question: "Will I work on projects during the program?",
        answer: "Yes. Practical exercises and project implementations are included, such as REST APIs, Auth services, and Kafka messaging."
      },
      {
        question: "Do I need prior experience with Spring Boot?",
        answer: "No. Spring concepts are introduced from scratch during the program."
      },
      {
        question: "Will I receive certification?",
        answer: "Yes. Participants receive a certificate upon successful completion of the program."
      }
    ]
  },
  {
    id: "python-developer",
    title: "Python Developer Program",
    category: "Software Development",
    description:
      "Build real-world Python applications with Flask and MongoDB. Learn Python programming from fundamentals to full-stack web application development, including OOP, REST APIs, and cloud deployment.",
    duration: "4 Months",
    rating: 4.7,
    reviews: 1980,
    students: 14200,
    price: 19999,
    originalPrice: 39999,
    overview:
      "The Python Developer Program is designed to help learners build strong programming foundations and develop real-world web applications using Python. The training progresses from core programming concepts to object-oriented development, web application development with Flask, database integration with MongoDB, and API creation. By the end of the program, learners will build and deploy complete applications.",
    level: "Beginner to Intermediate",
    image: "/python_developer.png",
    badge: "Popular",
    badgeColor: "#f97316",
    skills: ["Python", "Flask", "Jinja2", "MongoDB", "REST APIs", "PyMongo", "VS Code", "Render/Railway"],
    highlights: ["Full-Stack Web App using Flask", "Document Database MongoDB Integration", "REST API Development", "Cloud Deployment on Render/Railway"],
    keyFeatures: [
      "Structured training from Python fundamentals to deployment",
      "Hands-on exercises and mini-projects in every phase",
      "Backend web development using Flask and MongoDB",
      "Final project deployment with real hosting platforms",
      "Creating API endpoints returning structured JSON"
    ],
    prerequisites: [
      "Basic computer knowledge",
      "Logical thinking and interest in programming",
      "No prior Python experience is required"
    ],
    suitableFor: [
      "Beginners starting programming",
      "Students learning software development",
      "Developers interested in Python backend development",
      "Professionals transitioning to web development"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Core Python Programming",
        lessons: [
          "Setup & Python Basics",
          "Variables, Data Types, and Input/Output",
          "Control Structures (loops, conditionals)",
          "Functions and Modular Programming",
          "Data Structures (lists, dicts, sets, tuples)",
          "File Handling and Error Management"
        ]
      },
      {
        module: "Module 2",
        title: "Object-Oriented Python",
        lessons: [
          "OOP Basics (classes, objects, attributes, methods)",
          "Advanced OOP (inheritance, polymorphism)",
          "CLI Project – Contact Manager (CRUD)"
        ]
      },
      {
        module: "Module 3",
        title: "Web Development with Flask",
        lessons: [
          "Introduction to Flask (routes & parameters)",
          "HTML Templates and Jinja2 rendering",
          "Forms and user input validation",
          "CRUD Web Application (task manager)"
        ]
      },
      {
        module: "Module 4",
        title: "Working with MongoDB",
        lessons: [
          "MongoDB Fundamentals & document databases",
          "Flask and MongoDB Integration using PyMongo",
          "Application Architecture and clean folders"
        ]
      },
      {
        module: "Module 5",
        title: "APIs and Deployment",
        lessons: [
          "REST API Development (JSON endpoints)",
          "Final Integrated Project (blog/expense tracker)",
          "Deployment on Render, Railway, or Heroku"
        ]
      }
    ],
    faqs: [
      {
        question: "Is this Python course beginner friendly?",
        answer: "Yes. The program starts with Python fundamentals and gradually progresses to web development and APIs."
      },
      {
        question: "Will I build real applications?",
        answer: "Yes. The course includes multiple projects and a final application that integrates backend, database, and deployment."
      },
      {
        question: "What frameworks are covered?",
        answer: "The program covers Flask for web development and PyMongo for database integration."
      },
      {
        question: "Will I deploy my application online?",
        answer: "Yes. The final phase covers deploying applications to cloud hosting platforms like Render or Railway."
      }
    ]
  },
  {
    id: "flutter-developer",
    title: "Flutter Mobile App Development Program",
    category: "Mobile Development",
    description:
      "Build cross-platform mobile applications using Flutter & Dart. Learn UI design, state management with Provider, REST APIs, Firebase backend services, local storage, and app publishing.",
    duration: "5 Months",
    rating: 4.8,
    reviews: 1180,
    students: 7500,
    price: 24999,
    originalPrice: 49999,
    overview:
      "The Flutter Mobile App Development Program is designed to teach developers how to build modern cross-platform mobile applications using Flutter and the Dart programming language. The course covers UI development, state management, API integration, local storage, Firebase backend services, and mobile app deployment. By the end of the program, learners build and publish complete mobile applications.",
    level: "Beginner to Intermediate",
    image: "/flutter_developer.png",
    badge: "Trending",
    badgeColor: "#8b5cf6",
    skills: ["Flutter", "Dart", "Firebase", "REST APIs", "Provider", "SQLite", "Android Studio", "Git"],
    highlights: ["Cross-Platform Android & iOS Apps", "Firebase Authentication & Firestore", "State Management with Provider", "Play Store App Publishing Guidelines"],
    keyFeatures: [
      "Hands-on training in Flutter and Dart development",
      "Build real mobile applications using modern UI frameworks",
      "Integration with APIs, Firebase, and local storage",
      "Capstone project covering full mobile application development",
      "Guidance on compiling, signing, and releasing apps"
    ],
    prerequisites: [
      "Basic programming knowledge is helpful",
      "Familiarity with logical problem solving"
    ],
    suitableFor: [
      "Beginners interested in mobile development",
      "Developers transitioning to Flutter",
      "Students learning cross-platform app development",
      "Software engineers exploring mobile technologies"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Introduction to Flutter & Dart Basics",
        lessons: [
          "Introduction to Flutter architecture & environment setup",
          "Dart Programming basics (syntax, control flow)",
          "Flutter UI Basics & Core Widgets (Scaffold, Container, Text)",
          "Layouts & Responsive Design (Row, Column, Stack, ListView)",
          "Mini Project: Static user profile page"
        ]
      },
      {
        module: "Module 2",
        title: "Stateful Widgets & Navigation",
        lessons: [
          "Stateful Widgets vs Stateless Widgets & state management",
          "Navigation and Routing (push & pop patterns)",
          "Forms, TextField widgets, and input validation",
          "User Notifications (dialogs, snackbars, alerts)",
          "Mini Project: Login & registration flow"
        ]
      },
      {
        module: "Module 3",
        title: "Working with Lists & Network Requests",
        lessons: [
          "ListView & GridView dynamic data displays",
          "API Integration using HTTP requests",
          "Error Handling & network failure retries",
          "Mini Project: Weather app using public API"
        ]
      },
      {
        module: "Module 4",
        title: "State Management & Local Data Storage",
        lessons: [
          "State management with Provider & ChangeNotifier",
          "Local Storage using SharedPreferences & SQLite",
          "Firebase Integration (Firestore database & Auth)",
          "Offline Support & data caching sync",
          "Mini Project: Task manager app with Firebase"
        ]
      },
      {
        module: "Module 5",
        title: "Advanced Flutter Development",
        lessons: [
          "Flutter Animations (implicit & explicit, hero transitions)",
          "Custom Widgets & dark/light themes",
          "Application Testing (unit and widget tests)",
          "App Publishing prep (Google Play Store rules)",
          "Capstone Project: Expense/Habit tracker with Auth & Sync"
        ]
      }
    ],
    faqs: [
      {
        question: "Is this Flutter course suitable for beginners?",
        answer: "Yes. The course starts with Dart fundamentals and Flutter basics. No prior mobile development experience is required."
      },
      {
        question: "What platforms can I build apps for using Flutter?",
        answer: "Flutter allows development for Android, iOS, web, and desktop platforms from a single codebase."
      },
      {
        question: "Will I learn Firebase integration?",
        answer: "Yes. The course includes database operations and user authentication with Firebase Firestore."
      },
      {
        question: "Will I publish my app to the Play Store?",
        answer: "The program includes detailed guidance on compiling, signing, and preparing apps for Google Play Store release."
      }
    ]
  },
  {
    id: "devsecops-mastery",
    title: "DevSecOps Course – Engineering Secure Pipelines",
    category: "DevOps",
    description: "Master the integration of security practices into your DevOps lifecycle. Learn SAST, DAST, Container Security, Kubernetes Hardening, Compliance as Code, and Cloud Security.",
    duration: "4 Months",
    rating: 4.9,
    reviews: 980,
    students: 4200,
    price: 35000,
    originalPrice: 49999,
    overview: "This DevSecOps course is designed for IT professionals, DevOps engineers, and security analysts who want to build secure, automated deployment pipelines. You will learn to integrate security checks, scanner tools, compliance frameworks, and secrets management directly into modern DevOps CI/CD loops.",
    level: "Intermediate to Advanced",
    image: "/devsecops.png",
    badge: "In Demand",
    badgeColor: "#ec4899",
    skills: ["SAST/DAST", "SonarQube", "Trivy", "HashiCorp Vault", "OWASP Top 10", "GitLab CI", "OPA Gatekeeper", "DefectDojo"],
    highlights: ["Secure CI/CD Pipelines", "Secrets Management with Vault", "Vulnerability Scanning Automation", "Compliance as Code"],
    keyFeatures: [
      "Automated vulnerability scanning tools integration",
      "Hands-on security testing in CI/CD pipelines",
      "Real-world vulnerability management with DefectDojo",
      "Container and Kubernetes security hardening labs",
      "Practice secure application configuration patterns",
      "HashiCorp Vault secrets storage configuration"
    ],
    prerequisites: [
      "Basic knowledge of Git and Docker",
      "Understanding of basic CI/CD pipeline concepts",
      "Linux terminal familiarity"
    ],
    suitableFor: [
      "DevOps Engineers looking to specialize in security",
      "Security analysts moving to DevSecOps automation",
      "Software Developers aiming to write secure pipelines",
      "System engineers implementing modern DevSecOps protocols"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Introduction to DevSecOps & Security Culture",
        lessons: [
          "Understanding Shift-Left security principles",
          "OWASP Top 10 vulnerabilities overview",
          "Common DevSecOps workflows in tech companies"
        ]
      },
      {
        module: "Module 2",
        title: "Secure Coding & Vulnerability Scanning (SAST/DAST)",
        lessons: [
          "Static Application Security Testing (SAST) setup",
          "Dynamic Application Security Testing (DAST) flows",
          "Integrating SonarQube in CI/CD pipelines",
          "Software Bill of Materials (SBOM) and dependency scans"
        ]
      },
      {
        module: "Module 3",
        title: "Container & Artifact Security (Trivy/Docker)",
        lessons: [
          "Docker image scanning using Trivy",
          "Securing private container registries",
          "Implementing base image hardening guidelines"
        ]
      },
      {
        module: "Module 4",
        title: "Secrets Management (HashiCorp Vault)",
        lessons: [
          "Configuring secrets in Vault storage engine",
          "Integrating Vault token authorization with pipelines",
          "Managing dynamic database credentials"
        ]
      },
      {
        module: "Module 5",
        title: "Infrastructure as Code (IaC) & Cloud Security",
        lessons: [
          "Scanning Terraform configurations for security issues",
          "IAM role configuration and privilege principles",
          "Securing AWS and Azure configurations using tfsec"
        ]
      },
      {
        module: "Module 6",
        title: "Kubernetes Security & Admission Controllers",
        lessons: [
          "Kubernetes API security hardening configurations",
          "Configuring RBAC roles and service accounts",
          "Writing policies with OPA Gatekeeper"
        ]
      },
      {
        module: "Module 7",
        title: "Compliance, Auditing & Logging",
        lessons: [
          "Setting up centralized audit logging logs",
          "Vulnerability reporting using DefectDojo dashboards",
          "Continuous compliance checks for production audits"
        ]
      }
    ],
    faqs: [
      {
        question: "Is this DevSecOps course suitable for absolute beginners?",
        answer: "No, it is designed for professionals with a basic understanding of DevOps tools like Docker and Git."
      },
      {
        question: "Which tools are covered in this course?",
        answer: "We cover SonarQube, Trivy, GitGuardian, HashiCorp Vault, GitLab CI, OPA Gatekeeper, and DefectDojo."
      },
      {
        question: "What certifications will this help me prepare for?",
        answer: "It prepares you for Certified DevSecOps Professional (CDP) and Certified Kubernetes Security Specialist (CKS)."
      }
    ]
  },
  {
    id: "cloudops-management",
    title: "CloudOps Certification Program – AWS & Azure Operations",
    category: "DevOps",
    description: "Master the design, deployment, cost management, and optimization of cloud infrastructure. Learn multi-cloud operations, automated backups, monitoring, and FinOps practices.",
    duration: "3 Months",
    rating: 4.8,
    reviews: 740,
    students: 3100,
    price: 28000,
    originalPrice: 39999,
    overview: "Our CloudOps Certification Program is built for IT administrators, system engineers, and developers looking to master high availability, monitoring, scalability, and financial operations (FinOps) across AWS and Azure cloud environments.",
    level: "Intermediate",
    image: "/cloudops.png",
    badge: "New",
    badgeColor: "#3b82f6",
    skills: ["AWS Cloud", "Azure Cloud", "Terraform", "Cloud Monitoring", "FinOps Cost Control", "Disaster Recovery", "Backup Automation", "SysOps"],
    highlights: ["AWS & Azure Administration", "Multi-Cloud Operations Automation", "FinOps Cost Management Strategy", "Disaster Recovery (DR) Simulation"],
    keyFeatures: [
      "Multi-cloud administration exercises (AWS & Azure)",
      "Cloud monitoring and dashboard creation",
      "Active cost audit and optimization challenge",
      "High availability architecture configuration",
      "Real-world disaster recovery implementation",
      "Infrastructure backup automation scripts"
    ],
    prerequisites: [
      "Basic systems administration concepts",
      "General understanding of cloud computing services",
      "Familiarity with networking (IP, DNS, Subnets)"
    ],
    suitableFor: [
      "Cloud Administrators and Support Engineers",
      "System Administrators transitioning to cloud operations",
      "IT Managers wishing to implement FinOps cost controls",
      "DevOps enthusiasts starting cloud infrastructure management"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Cloud Operations & Infrastructure Fundamentals",
        lessons: [
          "AWS and Azure accounts administration setup",
          "Designing secure virtual network topologies (VPCs & Subnets)",
          "Managing compute nodes (EC2, VM) and block storage systems"
        ]
      },
      {
        module: "Module 2",
        title: "High Availability & Auto-Scaling Architecture",
        lessons: [
          "Load balancing configuration strategies",
          "Auto-scaling configuration guidelines",
          "Database scaling architectures (RDS, Azure SQL)"
        ]
      },
      {
        module: "Module 3",
        title: "Multi-Cloud Monitoring & Alerts Setup",
        lessons: [
          "Monitoring systems using AWS CloudWatch and Azure Monitor",
          "Centralized log collection and custom metric setups",
          "Configuring alerts and notification endpoints"
        ]
      },
      {
        module: "Module 4",
        title: "Disaster Recovery, Backup & Restoration",
        lessons: [
          "Configuring automated backup routines",
          "Defining RPO and RTO target objectives",
          "Disaster recovery simulation drills (active-standby setups)"
        ]
      },
      {
        module: "Module 5",
        title: "Cloud Cost Management & FinOps Framework",
        lessons: [
          "Resource tagging strategies for auditing",
          "Detecting idle compute resources and rightsizing configurations",
          "Cost allocation reporting and budget thresholds"
        ]
      },
      {
        module: "Module 6",
        title: "Infrastructure Automation & Orchestration",
        lessons: [
          "Writing infrastructure setup templates with Terraform",
          "Automating cloud operational tasks using Python scripting",
          "Managing resources deployments at scale"
        ]
      }
    ],
    faqs: [
      {
        question: "What is the main focus of CloudOps?",
        answer: "The main focus is maintaining system reliability, backup automation, cloud cost management, and systems monitoring."
      },
      {
        question: "Does the program cover multiple cloud providers?",
        answer: "Yes, it provides hands-on modules for both AWS (Amazon Web Services) and Microsoft Azure."
      },
      {
        question: "Will I learn FinOps and cost management?",
        answer: "Yes, a complete module is dedicated to cost monitoring, auditing, and cost-reduction techniques."
      }
    ]
  },
  {
    id: "aiops-operations",
    title: "AIOps Training – AI-Driven IT Operations & Observability",
    category: "DevOps",
    description: "Leverage AI/ML to automate log analysis, detect anomalies, predict service outages, and orchestrate incident responses. Learn observability pipelines and automated root cause analysis.",
    duration: "3 Months",
    rating: 4.7,
    reviews: 510,
    students: 2100,
    price: 32000,
    originalPrice: 45999,
    overview: "This advanced training covers Artificial Intelligence for IT Operations (AIOps). Learn to deploy machine learning anomalies detectors, build unified observability pipelines, and configure predictive auto-remediation scripts to decrease MTTR (Mean Time to Resolution).",
    level: "Advanced",
    image: "/aiops.png",
    badge: "Cutting Edge",
    badgeColor: "#8b5cf6",
    skills: ["Observability", "Log Anomaly Detection", "Elasticsearch/Kibana", "Dynatrace", "AI Alerting", "Incident Remediation", "PagerDuty", "Predictive Analytics"],
    highlights: ["Automated Root Cause Detection", "AI-Driven Observability Pipelines", "Predictive Incident Management", "Auto-Remediation Workflow"],
    keyFeatures: [
      "AI-driven metric analysis and anomaly detection",
      "Advanced log search and parsing setup (ELK Stack)",
      "Dynatrace configuration for automated diagnostics",
      "Automated alerting using predictive algorithms",
      "Incident orchestration pipelines with PagerDuty",
      "Automated server self-healing script deployment"
    ],
    prerequisites: [
      "Familiarity with DevOps monitoring tools (Prometheus, Grafana)",
      "Basic scripting experience (Python/Shell)",
      "Systems or DevOps engineering work background"
    ],
    suitableFor: [
      "Site Reliability Engineers (SREs) aiming for automation",
      "DevOps Engineers designing enterprise observability",
      "Systems Architecture Leads managing large systems",
      "Operations professionals scaling monitoring infrastructure"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "AIOps Architecture & Big Data Operations",
        lessons: [
          "Introduction to AIOps architecture frameworks",
          "Understanding big data scaling issues in telemetry",
          "Telemetry data models (metrics, logs, traces, events)"
        ]
      },
      {
        module: "Module 2",
        title: "Log Data Ingestion & Observability Pipelines",
        lessons: [
          "Log capture architectures using Vector and Logstash",
          "Parsing structured and unstructured server logs",
          "Configuring unified telemetry pipelines"
        ]
      },
      {
        module: "Module 3",
        title: "Machine Learning for Anomaly & Outlier Detection",
        lessons: [
          "Deploying ML models for anomaly baseline metrics",
          "Identifying seasonality shifts and baseline trends",
          "Configuring statistical filters for alert noise control"
        ]
      },
      {
        module: "Module 4",
        title: "Predictive Monitoring & Intelligent Alerts",
        lessons: [
          "Forecasting storage capacity exhaustions using ML models",
          "Creating correlation models across multiple alerting zones",
          "Setting predictive alarms using Dynatrace features"
        ]
      },
      {
        module: "Module 5",
        title: "Automated Root Cause Analysis (RCA)",
        lessons: [
          "Distributed tracing diagnostics for microservices dependencies",
          "Mapping transaction failures to root infrastructure failures",
          "Using AI correlation panels to discover error origins"
        ]
      },
      {
        module: "Module 6",
        title: "Incident Auto-Remediation & Self-Healing",
        lessons: [
          "Orchestrating incident lifecycles using PagerDuty API integrations",
          "Writing server self-healing automation scripts (Ansible/Python)",
          "Designing feedback controls for automated operations"
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need a deep data science background?",
        answer: "No, we focus on utilizing existing AIOps platforms, machine learning log aggregators, and anomaly detection rules."
      },
      {
        question: "Which AIOps tools will we use?",
        answer: "You will work with Dynatrace, Elasticsearch, Kibana ML features, Prometheus AI exporters, and PagerDuty."
      },
      {
        question: "How does AIOps differ from standard monitoring?",
        answer: "Standard monitoring triggers alerts on thresholds, whereas AIOps uses AI to analyze patterns, predict failures, and suggest root causes."
      }
    ]
  },
  {
    id: "mlops-engineering",
    title: "MLOps Engineering Program – Production ML Pipelines",
    category: "AI & ML",
    description: "Master the deployment, scaling, versioning, and continuous monitoring of Machine Learning models in production. Learn MLflow, Kubeflow, DVC, Feature Stores, and Drift Detection.",
    duration: "4 Months",
    rating: 4.9,
    reviews: 1100,
    students: 5200,
    price: 39000,
    originalPrice: 54999,
    overview: "This MLOps course provides software developers and data scientists with the capabilities to design end-to-end machine learning operational architectures. You will build containerized deployment configurations, automate data pipelines, track model experiments, and monitor production predictions.",
    level: "Intermediate to Advanced",
    image: "/mlops.png",
    badge: "Trending",
    badgeColor: "#f59e0b",
    skills: ["MLflow", "Kubeflow", "DVC", "Docker/Kubernetes", "Feature Stores", "Drift Detection", "Prometheus/Grafana", "GitHub Actions"],
    highlights: ["Automated Pipeline Orchestration", "Data & Model Versioning (DVC)", "Continuous Retraining (CT)", "Model Quality & Drift Monitoring"],
    keyFeatures: [
      "End-to-end ML pipeline creation from data to deploy",
      "Data versioning and caching using DVC",
      "Model performance tracking and registration using MLflow",
      "Microservice deployment using Kubernetes and Seldon Core",
      "Automated model drift detection and alert setup",
      "Pipeline automation via CI/CD and Continuous Training"
    ],
    prerequisites: [
      "Good command of Python programming",
      "Understanding of Machine Learning pipeline basics",
      "Docker containerization fundamentals"
    ],
    suitableFor: [
      "Data Scientists transitioning models to production",
      "Machine Learning Engineers building infrastructure",
      "DevOps Engineers wishing to specialize in ML operations",
      "Tech leads overseeing enterprise AI applications"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "MLOps Architecture & Fundamentals",
        lessons: [
          "Machine learning lifecycle vs traditional SDLC structures",
          "Understanding dependencies and state management challenges",
          "Setting up the Python virtual environment tools"
        ]
      },
      {
        module: "Module 2",
        title: "Data Version Control (DVC) & Feature Stores",
        lessons: [
          "Tracking large data artifacts using DVC files",
          "Configuring remote storage backends (S3, Cloud Storage)",
          "Building and querying centralized Feature Stores"
        ]
      },
      {
        module: "Module 3",
        title: "Experiment Tracking & Model Registry (MLflow)",
        lessons: [
          "Logging hyperparameters, metrics, and models using MLflow API",
          "Registering models and managing transition statuses",
          "Configuring MLflow tracking server instances"
        ]
      },
      {
        module: "Module 4",
        title: "Deployment & Container Orchestration (Kubeflow)",
        lessons: [
          "Packaging models as REST service containers using Docker",
          "Configuring Kubernetes clusters for model servers",
          "Writing Kubeflow pipeline pipelines"
        ]
      },
      {
        module: "Module 5",
        title: "Model Deployment Strategies",
        lessons: [
          "Implementing Canary and Shadow model updates",
          "Configuring ingress controllers for traffic splitting",
          "Using Seldon Core and BentoML tools"
        ]
      },
      {
        module: "Module 6",
        title: "Model Monitoring, Drift & Alert Systems",
        lessons: [
          "Capturing inference logs and request-response payloads",
          "Detecting data drift and concept drift metrics",
          "Setting up Prometheus monitoring for ML metrics"
        ]
      },
      {
        module: "Module 7",
        title: "Continuous Integration, Deployment & Training (CI/CD/CT)",
        lessons: [
          "Creating GitHub Actions workflows for ML testing",
          "Automating model retraining scripts on metric dropouts",
          "Implementing model validation checks before production release"
        ]
      }
    ],
    faqs: [
      {
        question: "Does this course teach machine learning algorithms?",
        answer: "No. The focus is strictly on operations (MLOps)—packaging, deploying, versioning, and monitoring existing models."
      },
      {
        question: "Will we work with cloud deployment?",
        answer: "Yes, we deploy pipelines using Kubernetes clusters on cloud infrastructure."
      },
      {
        question: "What tools are required for this course?",
        answer: "Python, Git, Docker, MLflow, DVC, Kubeflow, and Prometheus."
      }
    ]
  },
  {
    id: "application-security",
    title: "Application Security Certification – Secure Web Apps",
    category: "Cybersecurity",
    description: "Learn secure software development practices, threat modeling, security code review, and defense strategies against OWASP Top 10 vulnerabilities and API attacks.",
    duration: "3 Months",
    rating: 4.8,
    reviews: 810,
    students: 3500,
    price: 25000,
    originalPrice: 34999,
    overview: "This Application Security (AppSec) program is co-designed with cybersecurity experts to train software developers, QA engineers, and security analysts. Master security principles, secure coding strategies, and secure application architecture design.",
    level: "Beginner to Intermediate",
    image: "/appsec.png",
    badge: "Top Pick",
    badgeColor: "#10b981",
    skills: ["OWASP Top 10", "API Security", "SCA", "Threat Modeling", "Static Analysis", "Dynamic Testing", "Burp Suite", "Secure Coding"],
    highlights: ["OWASP Top 10 Mitigations", "Threat Modeling Frameworks", "API Defense Architectures", "Security Review Methodology"],
    keyFeatures: [
      "Interactive CTF labs targeting web exploits",
      "Application Threat Modeling using STRIDE",
      "Static Application Security Testing (SAST) usage",
      "Dynamic Application Security Testing (DAST) labs",
      "Real-world secure coding practice challenge",
      "API access control and security configurations"
    ],
    prerequisites: [
      "Basic knowledge of web development (HTML, CSS, JavaScript)",
      "Familiarity with SQL and backend web programming concepts"
    ],
    suitableFor: [
      "Software Developers aiming to improve security skills",
      "QA Engineers transitioning to security testing roles",
      "Security Analysts seeking structured application testing paths",
      "Tech Leads designing secure software systems"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "Core Web & Security Architectures",
        lessons: [
          "Understanding web requests flow and browser controls",
          "Introduction to HTTP headers security controls",
          "Principles of least privilege and secure-by-design concepts"
        ]
      },
      {
        module: "Module 2",
        title: "OWASP Top 10 - Vulnerability & Mitigation",
        lessons: [
          "SQL Injection and Cross-Site Scripting (XSS) attack vectors",
          "Broken authentication and session management exploits",
          "Mitigating data exposures and security misconfigurations"
        ]
      },
      {
        module: "Module 3",
        title: "Threat Modeling & Design Principles (STRIDE)",
        lessons: [
          "Understanding STRIDE threat categories",
          "Building data flow diagrams for application mapping",
          "Documenting risk mitigations and architectural defenses"
        ]
      },
      {
        module: "Module 4",
        title: "Secure Development Lifecycle (SDLC)",
        lessons: [
          "Integrating security audits inside Agile frameworks",
          "Managing third-party dependencies vulnerabilities",
          "Configuring software composition analysis (SCA)"
        ]
      },
      {
        module: "Module 5",
        title: "Secure Code Review & Static Analysis (SAST)",
        lessons: [
          "Identifying common security flaws in source code",
          "Configuring SAST scanners inside code repositories",
          "Managing false positives outputs"
        ]
      },
      {
        module: "Module 6",
        title: "Dynamic Vulnerability Scanning & Penetration (DAST)",
        lessons: [
          "Running scans using OWASP ZAP configurations",
          "Using Burp Suite for basic request interception",
          "Conducting runtime vulnerability verifications"
        ]
      },
      {
        module: "Module 7",
        title: "Web API & Authentication Hardening",
        lessons: [
          "Securing REST and GraphQL API routes",
          "Configuring CORS and JWT authentication rules",
          "Implementing rate limiting protections"
        ]
      }
    ],
    faqs: [
      {
        question: "Do I need programming experience for this course?",
        answer: "Yes, basic web programming concepts (HTML/JS/Node/Python) are essential for secure code exercises."
      },
      {
        question: "Does this course cover penetration testing?",
        answer: "It covers basic app-level testing using tools like Burp Suite and OWASP ZAP, but focuses primarily on defensive secure coding."
      },
      {
        question: "Will I receive certificate validation?",
        answer: "Yes, an Application Security certificate will be issued upon completion."
      }
    ]
  },
  {
    id: "network-security-basics",
    title: "Network Security & Defense Program – Cyber Defense",
    category: "Cybersecurity",
    description: "Gain a strong foundation in networking security, defensive configurations, packet analysis, and secure architectures. Learn firewalls, VPNs, IDS/IPS, and Zero Trust design.",
    duration: "3 Months",
    rating: 4.8,
    reviews: 670,
    students: 2900,
    price: 24000,
    originalPrice: 32999,
    overview: "This program provides foundational and practical cybersecurity networking expertise. Learn how to map networks, read traffic, set up firewalls, isolate systems, configure secure tunnels, and implement modern Zero Trust network designs.",
    level: "Beginner to Intermediate",
    image: "/netsec.png",
    badge: "Essential",
    badgeColor: "#ef4444",
    skills: ["Wireshark", "Nmap", "Firewalls", "VPN", "IDS/IPS", "WAF", "Zero Trust", "Cryptographic Protocols"],
    highlights: ["Network Traffic Analysis", "Boundary Defense & Firewalls", "Intrusion Prevention Systems", "Zero Trust Architectures"],
    keyFeatures: [
      "Port scanning and discovery using Nmap",
      "Deep packet analysis using Wireshark",
      "Network firewall configuration and access rules",
      "Setup of Virtual Private Networks (VPNs)",
      "Configuration of WAF and IDS/IPS sensors",
      "Zero Trust architecture migration project"
    ],
    prerequisites: [
      "Understanding of basic networking models (OSI and TCP/IP)",
      "Familiarity with command line interfaces"
    ],
    suitableFor: [
      "System Administrators and IT Professionals",
      "Aspiring Cyber Defense and SOC Analysts",
      "Network Administrators wishing to specialize in security",
      "Career switchers targeting network security entry"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "OSI Model, Networking & Security Protocols",
        lessons: [
          "Understanding TCP/UDP protocols and common port mappings",
          "Routing, switching, and subnet allocation topologies",
          "Securing DHCP, DNS, and HTTP operations"
        ]
      },
      {
        module: "Module 2",
        title: "Network Reconnaissance & Port Scanning (Nmap)",
        lessons: [
          "Running discovery scans using Nmap scripts",
          "Analyzing open ports and operating system signatures",
          "Detecting network scan attempts"
        ]
      },
      {
        module: "Module 3",
        title: "Packet Analysis & Capturing (Wireshark)",
        lessons: [
          "Configuring packet capture interfaces in Wireshark",
          "Filtering traffic and reconstructing TCP streams",
          "Identifying malicious packets and protocol anomalies"
        ]
      },
      {
        module: "Module 4",
        title: "Firewall Deployment & Rule Architectures",
        lessons: [
          "Stateful vs stateless firewall rule structures",
          "Configuring NAT and boundary routing policies",
          "Setting up demilitarized zones (DMZ) setups"
        ]
      },
      {
        module: "Module 5",
        title: "Intrusion Detection & Prevention Systems (IDS/IPS)",
        lessons: [
          "Configuring rule alerts in Snort IDS/IPS",
          "Deploying Web Application Firewalls (WAF) setups",
          "Analyzing security logs for event correlation"
        ]
      },
      {
        module: "Module 6",
        title: "Secure remote access (VPNs, TLS, Cryptography)",
        lessons: [
          "Understanding symmetric and asymmetric cryptography models",
          "Deploying secure tunnels using OpenVPN and WireGuard",
          "Configuring secure TLS certificates protocols"
        ]
      },
      {
        module: "Module 7",
        title: "Zero Trust Network Architecture & Identity Controls",
        lessons: [
          "Designing perimeter-less networks utilizing Zero Trust concepts",
          "Configuring software defined perimeters (SDP)",
          "Implementing multi-factor authentication (MFA) network controls"
        ]
      }
    ],
    faqs: [
      {
        question: "What tools will I learn to use?",
        answer: "Wireshark, Nmap, PfSense Firewall, OpenVPN, Snort IDS, and standard system command line tools."
      },
      {
        question: "Will this help me pass cybersecurity exams?",
        answer: "Yes, it is heavily aligned with CompTIA Network+ and Security+ standards."
      },
      {
        question: "Does the course include live lab setups?",
        answer: "Yes, you will practice within a virtualized enterprise network setup."
      }
    ]
  },
  {
    id: "mern-stack-developer",
    title: "MERN Stack Developer Course – MongoDB, Express, React, Node",
    category: "Software Development",
    description: "Build production-grade web applications from scratch. Master MongoDB, Express.js, React, Node.js, Redux Toolkit, JWT Auth, API design, and deployment.",
    duration: "6 Months",
    rating: 4.9,
    reviews: 2400,
    students: 15000,
    price: 30000,
    originalPrice: 59999,
    overview: "This comprehensive MERN stack developer course is structured to take you from a basic JavaScript programmer to an enterprise full-stack engineer. Learn clean database modeling, scalable backend API design, robust client-side state handling, and automated web deployments.",
    level: "Beginner to Job-Ready",
    image: "/mern_developer.png",
    badge: "Career Track",
    badgeColor: "#10b981",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "JWT Auth", "RESTful APIs", "Vercel/Render"],
    highlights: ["Full-Stack App Development", "State Management with Redux", "Securing API Auth (JWT)", "Cloud Hosting Deployment"],
    keyFeatures: [
      "Build 4 complete responsive full-stack websites",
      "State management utilizing Redux Toolkit",
      "Backend API creation and custom middleware",
      "Database management and indexing (Mongoose)",
      "Secure token authorization integrations (JWT)",
      "Final project cloud hosting implementation"
    ],
    prerequisites: [
      "Basic understanding of HTML and CSS",
      "Fundamental knowledge of JavaScript syntax"
    ],
    suitableFor: [
      "Graduates looking to enter web development roles",
      "Frontend developers transitioning to full-stack",
      "Self-taught coders building web application portfolios",
      "Engineers wishing to learn MERN stack patterns"
    ],
    curriculum: [
      {
        module: "Module 1",
        title: "HTML5, CSS3, & Modern Javascript (ES6+)",
        lessons: [
          "Semantic HTML and CSS layout systems (Flexbox, Grid)",
          "Asynchronous JavaScript (Promises, Async/Await)",
          "DOM manipulation, event bindings, and API calls basics"
        ]
      },
      {
        module: "Module 2",
        title: "UI Engineering using React.js Components",
        lessons: [
          "Building reusable layouts with React components",
          "Managing components state (useState, useEffect, useContext)",
          "Configuring client routes using React Router"
        ]
      },
      {
        module: "Module 3",
        title: "Global State Management (Redux Toolkit)",
        lessons: [
          "Understanding one-way data flows and store configurations",
          "Writing store slices, reducers, and async thunks queries",
          "Integrating Redux hooks with dynamic UI views"
        ]
      },
      {
        module: "Module 4",
        title: "Node.js & Express.js Backend Architecture",
        lessons: [
          "Configuring Node runtime server environments",
          "Routing requests and design models in Express",
          "Building request validation middlewares"
        ]
      },
      {
        module: "Module 5",
        title: "Database Modeling with MongoDB & Mongoose",
        lessons: [
          "MongoDB document structure and Atlas configuration",
          "Defining data schemas and relations using Mongoose",
          "Performing CRUD queries and index configurations"
        ]
      },
      {
        module: "Module 6",
        title: "API Security, Auth with JWT & Validation",
        lessons: [
          "Securing passwords using bcrypt hashing",
          "Configuring token authentication authorizations (JWT)",
          "Building route guards and permissions systems"
        ]
      },
      {
        module: "Module 7",
        title: "Testing, CI/CD, & Cloud Production Deployment",
        lessons: [
          "Writing backend endpoints tests (Jest & Supertest)",
          "Deploying React apps to Vercel/Netlify hosting environments",
          "Hosting Express backends on Render and connecting MongoDB Atlas"
        ]
      }
    ],
    faqs: [
      {
        question: "Will I build real applications during the course?",
        answer: "Yes, you will build 4 full-stack projects, including a fully-featured E-Commerce site and a Collaborative Social App."
      },
      {
        question: "Do I need backend experience to start this program?",
        answer: "No, we teach Node.js, Express, and MongoDB operations from scratch."
      },
      {
        question: "Will I learn cloud hosting?",
        answer: "Yes, we cover deploying frontends to Vercel/Netlify and backends to Render, Railway, or AWS."
      }
    ]
  }
];

export const categories = ["All", "DevOps", "Software Development", "Mobile Development", "Cybersecurity", "AI & ML"];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Backend Engineer at Google",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b9ac?w=80&q=80",
    content:
      "Aspiring You completely changed my career trajectory. The Python Developer course was incredible, and the placement support helped me land my dream job at Google within 3 months.",
    rating: 5,
    course: "Python Developer Program",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Full Stack Engineer at Flipkart",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    content:
      "The Full Stack Java Developer course was the best investment I ever made. The curriculum was current, the projects were real, and the community was incredibly supportive throughout.",
    rating: 5,
    course: "Full Stack Java Developer Program",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "Software Engineer at Microsoft",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    content:
      "I transitioned from a non-tech background to a developer role with Aspiring You's Python Developer Program. The live sessions and personalized mentorship made all the difference!",
    rating: 5,
    course: "Python Developer Program",
  },
  {
    id: 4,
    name: "Karthik Nair",
    role: "DevOps Lead at Infosys",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    content:
      "The DevOps Beginner to Job-Ready program was comprehensive and hands-on. I cleared multiple AWS certifications and got a 40% salary hike. Highly recommend to anyone serious about cloud.",
    rating: 5,
    course: "DevOps Course – Beginner to Job-Ready",
  },
  {
    id: 5,
    name: "Meera Krishnan",
    role: "iOS/Android Developer at Zomato",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
    content:
      "The Flutter Mobile App Development course taught me everything from UI layouts to state management. My portfolio looks amazing and I had multiple offers within weeks of graduating!",
    rating: 5,
    course: "Flutter Mobile App Development Program",
  }
];

export const stats = [
  { value: 50000, suffix: "+", label: "Learners Enrolled" },
  { value: 95, suffix: "%", label: "Placement Rate" },
  { value: 200, suffix: "+", label: "Expert Mentors" },
  { value: 150, suffix: "+", label: "Hiring Partners" },
];

export const whyChooseUs = [
  {
    icon: "🎓",
    title: "Industry-Aligned Curriculum",
    description:
      "Our courses are co-designed with top tech companies to ensure every skill you learn is immediately applicable on the job.",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Mentors",
    description:
      "Learn from professionals at FAANG, unicorn startups, and Fortune 500 companies who bring real-world experience to every class.",
  },
  {
    icon: "🚀",
    title: "Live Interactive Learning",
    description:
      "Participate in live coding sessions, Q&A, group projects, and hackathons—not just passive video watching.",
  },
  {
    icon: "💼",
    title: "Guaranteed Placement Support",
    description:
      "Get dedicated career coaching, mock interviews, resume reviews, and direct referrals to our 150+ hiring partners.",
  },
];

export const programs = [
  {
    id: "tech-accelerator",
    title: "Tech Career Accelerator",
    subtitle: "12-Month Intensive",
    description: "A comprehensive program designed to take you from beginner to job-ready software engineer in 12 months. Includes all domains: programming, DSA, system design, and soft skills.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&q=80",
    highlights: ["Live Daily Classes", "1:1 Mentorship", "300+ Hours of Content", "Guaranteed Placement"],
    skills: ["Python", "JavaScript", "SQL", "System Design", "Communication"],
  },
  {
    id: "ai-fellowship",
    title: "AI & Data Fellowship",
    subtitle: "6-Month Deep Dive",
    description: "An immersive fellowship for aspiring AI engineers and data scientists. Covers deep learning, NLP, computer vision, and production ML system design.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
    highlights: ["Research Projects", "Kaggle Competitions", "Industry Capstone", "Publication Support"],
    skills: ["PyTorch", "TensorFlow", "MLOps", "NLP", "Computer Vision"],
  },
  {
    id: "corporate-upskill",
    title: "Corporate Upskilling Program",
    subtitle: "Tailored for Teams",
    description: "A bespoke training solution for organizations looking to upskill their teams in the latest tech, AI, and leadership competencies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
    highlights: ["Custom Curriculum", "Team Analytics", "Progress Dashboards", "Manager Reports"],
    skills: ["Leadership", "AI Tools", "Agile", "Data Literacy", "Cloud"],
  },
];
