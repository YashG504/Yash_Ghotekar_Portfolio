import { FaLinkedinIn, FaGithub, FaEnvelope, FaPhone, FaCode } from 'react-icons/fa';

export const resumeData = {
  name: "Yash Ghotekar",
  role: "Full Stack Developer",
  location: "Pune, Maharashtra",
  contact: {
    phone: "+91-8459454322",
    email: "yash.22210210@viit.ac.in",
    linkedin: "https://in.linkedin.com/in/yash-ghotekar-219b42243",
    github: "https://github.com/YashG504",
    leetcode: "https://leetcode.com/u/yash_ghotekar/",
  },
  socialLinks: [
    { name: "LinkedIn", url: "https://in.linkedin.com/in/yash-ghotekar-219b42243", icon: FaLinkedinIn },
    { name: "GitHub", url: "https://github.com/YashG504", icon: FaGithub },
    { name: "Email", url: "mailto:yash.22210210@viit.ac.in", icon: FaEnvelope },
    { name: "LeetCode", url: "https://leetcode.com/u/yash_ghotekar/", icon: FaCode },
  ],
  sections: {
    education: [
      {
        institution: "Vishwakarma Institute of Information Technology, Pune",
        period: "2022 -- 2026",
        degree: "B.Tech – Electronics and Telecommunication",
        score: "CGPA: 8.15",
        location: "Pune, Maharashtra"
      },
      {
        institution: "Shree Mahaveer Jr. College",
        period: "2021 -- 2022",
        degree: "12th Grade",
        score: "Percentage: 88.50%",
        location: "Nashik, Maharashtra"
      },
      {
        institution: "P.T.V.K School",
        period: "2019 -- 2020",
        degree: "10th Grade",
        score: "Percentage: 95.20%",
        location: "Nashik, Maharashtra"
      }
    ],
    skills: {
      languages: ["C++", "Java", "JavaScript", "Python", "HTML", "CSS"],
      frameworks: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
      databases: ["MongoDB", "MySQL"],
      tools: ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Jira"],
      core: ["DSA", "OOP", "REST APIs", "OS"],
      ml: ["CNN", "SVM", "ResNet50", "VGG19"]
    },
    experience: [
      {
        role: "SDE Intern",
        company: "Unique Schools",
        period: "Jan 2026 -- Present",
        location: "Hybrid",
        logo: "/assets/unique_schools.png",
        points: [
          "Working on full-stack development tasks using the MERN stack.",
          "Collaborating with the team to build and maintain scalable web applications.",
          "Contributing to the development of school management features and user interfaces."
        ]
      },
      {
        role: "Intern",
        company: "Stealth Startup (Tales by Dora)",
        period: "Jul 2025 -- Dec 2025",
        location: "Remote",
        logo: "/assets/tales_by_dora.png",
        points: [
          "Developed a responsive and feature-rich travel website using the MERN stack with smooth, dynamic UI/UX.",
          "Built reusable React templates for 7 unique destinations and added engaging interactive animations.",
          "Integrated MongoDB with scalable RESTful APIs for efficiently managing user data and trip details.",
          "Connected WhatsApp and email APIs to handle real-time customer inquiries and securely store leads."
        ]
      },
      {
        role: "Intern",
        company: "9 BRD, Indian Air Force",
        period: "Jan 2025 -- June 2025",
        location: "Pune",
        logo: "/assets/iaf.png",
        points: [
          "Worked on the project \"Learning-Based Data Porting\" under the guidance of Indian Air Force engineers.",
          "Analyzed Qmax (Python) and Universal TMCS (LabVIEW) ATE system architectures.",
          "Worked with demo data, setup LabVIEW environment, and learned automated PCB testing workflows."
        ]
      }
    ],
    extracurricular: [
      {
        role: "Associate Marketing Head",
        organization: "Entrepreneurship Development Cell (EDC)",
        period: "Sep 2023 – Jun 2024",
        location: "Pune, India",
        points: [
          "Led social media management and digital marketing campaigns to improve outreach and engagement.",
          "Created promotional strategies and content to strengthen brand presence and event visibility."
        ]
      },
      {
        role: "Founder",
        organization: "Laptop Bajar",
        period: "Dec 2024 – Apr 2025",
        location: "Pune, India",
        points: [
          "Founded and operated a WhatsApp-based laptop selling initiative to improve access to affordable tech.",
          "Managed customer acquisition, operations, and end-to-end sales coordination."
        ]
      },
      {
        role: "Co-Founder",
        organization: "TreeDevelopers",
        period: "Dec 2024 – Apr 2025",
        location: "Pune, India",
        points: [
          "Co-founded a web development startup delivering client-focused website solutions.",
          "Successfully delivered 3 websites to 3 clients, managing requirements and final deployment."
        ]
      }
    ],
    projects: [
      {
        title: "Metro Route Optimizer",
        tech: "C++, Data Structures, Graph Algorithms",
        image: "/assets/metro.png",
        links: {
          code: "https://github.com/YashG504/Metro-Route-Optimizer/blob/main/metro-app.cpp",
        },
        points: [
          "Developed a C++ console application to find the most efficient routes in a metro network using Dijkstra's algorithm.",
          "Designed the metro map as a weighted graph using an adjacency list for optimal pathfinding performance.",
          "Utilized a priority queue to optimize the algorithm's performance, ensuring fast route calculations.",
          "Implemented features to calculate the shortest path by distance, fastest path by time, fare, and number of interchanges."
        ]
      },
      {
        title: "Connectify – Real-Time MERN Video Calling Platform",
        tech: "MongoDB, Express, React, Node.js",
        image: "/assets/connectify.png",
        links: {
          live: "https://connectify-frontend-b6wv.onrender.com",
          code: "https://github.com/YashG504/Connectify/tree/main"
        },
        points: [
          "Developed a real-time video calling and chat app with custom WebSocket-based communication.",
          "Implemented JWT-based authentication with secure login, onboarding, and protected routes.",
          "Enabled real-time messaging with reactions, file/image sharing, friend requests, notifications, and in-call chat.",
          "Improved performance and scalability using TanStack Query, reusable React hooks, and 32 dynamic UI themes."
        ]
      },
      {
        title: "SARVisionNet – Hybrid CNN-SVM for Military Target Recognition",
        tech: "Python, Deep Learning",
        image: "/assets/sar.png",
        links: {
          code: "https://github.com/YashG504/Blended-model-using-CNN-and-SVM-for-Classification-of-SAR-Images/tree/main"
        },
        points: [
          "Trained CNN, ResNet, VGG19, and hybrid CNN–SVM models on the MSTAR SAR dataset for target classification.",
          "Replaced CNN Softmax with an SVM using squared hinge loss to improve generalization.",
          "Combined CNN feature extraction with SVM classification to achieve higher accuracy than baseline models.",
          "Improved automated military target recognition performance in SAR imagery through a robust hybrid approach."
        ]
      }
    ],

  }
};
