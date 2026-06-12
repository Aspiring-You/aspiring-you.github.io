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
    price: 14999,
    originalPrice: 29999,
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
    price: 19999,
    originalPrice: 39999,
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
    price: 24999,
    originalPrice: 49999,
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
  }
];

export const categories = ["All", "DevOps", "Software Development", "Mobile Development"];

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
