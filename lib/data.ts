// lib/data.ts – Static data for Aspiring You

export const courses = [
  {
    id: "python-ai-ml",
    title: "Python, AI & Machine Learning",
    category: "AI & Data Science",
    description:
      "Master Python from basics to advanced AI/ML concepts with hands-on projects, live mentorship, and industry-aligned curriculum.",
    duration: "6 Months",
    rating: 4.9,
    reviews: 2840,
    students: 18500,
    price: 29999,
    originalPrice: 59999,
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&q=80",
    badge: "Best Seller",
    badgeColor: "#f59e0b",
    skills: ["Python", "TensorFlow", "Pandas", "Scikit-learn", "DeepLearning"],
    highlights: ["50+ Projects", "Live Classes", "1:1 Mentorship", "Job Assistance"],
  },
  {
    id: "full-stack-development",
    title: "Full Stack Web Development",
    category: "Web Development",
    description:
      "Build production-ready web apps with React, Node.js, MongoDB and deploy to cloud. Includes real-world capstone projects.",
    duration: "5 Months",
    rating: 4.8,
    reviews: 3120,
    students: 22300,
    price: 24999,
    originalPrice: 49999,
    level: "Beginner to Advanced",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
    badge: "Top Rated",
    badgeColor: "#10b981",
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "AWS"],
    highlights: ["40+ Projects", "Live Classes", "Portfolio Review", "Placement Help"],
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    category: "AI & Data Science",
    description:
      "Transform raw data into actionable insights with SQL, Python, Power BI, and modern data engineering practices.",
    duration: "4 Months",
    rating: 4.7,
    reviews: 1980,
    students: 14200,
    price: 19999,
    originalPrice: 39999,
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    badge: "High Demand",
    badgeColor: "#6366f1",
    skills: ["Python", "SQL", "Power BI", "Tableau", "Statistics"],
    highlights: ["30+ Projects", "Industry Dataset", "Mock Interviews", "Job Support"],
  },
  {
    id: "cloud-devops",
    title: "Cloud Computing & DevOps",
    category: "Cloud & Infrastructure",
    description:
      "Master AWS, Azure, Docker, Kubernetes and CI/CD pipelines. Prepare for globally recognized cloud certifications.",
    duration: "5 Months",
    rating: 4.8,
    reviews: 1540,
    students: 11800,
    price: 27999,
    originalPrice: 54999,
    level: "Intermediate to Advanced",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    badge: "New",
    badgeColor: "#ec4899",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    highlights: ["Certification Prep", "Hands-on Labs", "Expert Mentors", "Career Support"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing & Growth",
    category: "Marketing",
    description:
      "Master SEO, SEM, social media marketing, content strategy, and growth hacking for the modern digital landscape.",
    duration: "3 Months",
    rating: 4.6,
    reviews: 2260,
    students: 16900,
    price: 14999,
    originalPrice: 29999,
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
    badge: "Popular",
    badgeColor: "#f97316",
    skills: ["SEO", "Google Ads", "Social Media", "Analytics", "Email Marketing"],
    highlights: ["Real Campaigns", "Tools Mastery", "Agency Projects", "Job Ready"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Mastery",
    category: "Design",
    description:
      "Learn user research, wireframing, prototyping, and visual design using Figma. Build a stunning design portfolio.",
    duration: "3 Months",
    rating: 4.9,
    reviews: 1720,
    students: 12400,
    price: 16999,
    originalPrice: 34999,
    level: "Beginner to Intermediate",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    badge: "Trending",
    badgeColor: "#8b5cf6",
    skills: ["Figma", "Prototyping", "User Research", "Design Systems", "Interaction"],
    highlights: ["Portfolio Projects", "Figma Mastery", "Peer Reviews", "Placement Support"],
  },
];

export const categories = ["All", "AI & Data Science", "Web Development", "Cloud & Infrastructure", "Marketing", "Design"];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Data Analyst at Google",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b9ac?w=80&q=80",
    content:
      "Aspiring You completely changed my career trajectory. The mentors were incredible and the placement support helped me land my dream job at Google within 3 months of completing the course.",
    rating: 5,
    course: "Data Science & Analytics",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Full Stack Engineer at Flipkart",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    content:
      "The Full Stack Development course was the best investment I ever made. The curriculum was current, the projects were real, and the community was incredibly supportive throughout my journey.",
    rating: 5,
    course: "Full Stack Web Development",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "ML Engineer at Microsoft",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    content:
      "I transitioned from a non-tech background to an ML engineer role with Aspiring You's structured AI/ML program. The live sessions and personalized mentorship made all the difference!",
    rating: 5,
    course: "Python, AI & Machine Learning",
  },
  {
    id: 4,
    name: "Karthik Nair",
    role: "DevOps Lead at Infosys",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    content:
      "The Cloud & DevOps program was comprehensive and hands-on. I cleared multiple AWS certifications and got a 40% salary hike. Highly recommend to anyone serious about cloud.",
    rating: 5,
    course: "Cloud Computing & DevOps",
  },
  {
    id: 5,
    name: "Meera Krishnan",
    role: "UX Designer at Zomato",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
    content:
      "The UI/UX Design course taught me everything from user research to high-fidelity prototyping. My portfolio looks amazing now and I had multiple job offers within weeks of graduating!",
    rating: 5,
    course: "UI/UX Design Mastery",
  },
  {
    id: 6,
    name: "Amit Singh",
    role: "Growth Manager at Swiggy",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
    content:
      "The Digital Marketing program gave me practical skills that directly apply to my current role. The instructors share real case studies and teach you to think like a growth hacker.",
    rating: 5,
    course: "Digital Marketing & Growth",
  },
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
