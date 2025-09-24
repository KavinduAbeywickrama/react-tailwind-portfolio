import {
  RiFacebookBoxFill,
  RiGithubFill,
  RiLinkedinFill,
} from "@remixicon/react";

export const navItems = [
  {
    id: 1,
    label: "Home",
    href: "#home",
  },
  {
    id: 2,
    label: "About me",
    href: "#about",
  },
  {
    id: 3,
    label: "Resume",
    href: "#resume",
  },
  {
    id: 4,
    label: "Projects",
    href: "#projects",
  },
  {
    id: 5,
    label: "Contact",
    href: "#contact",
  },
];

export const heroIcons = [
  {
    id: 1,
    icon: RiLinkedinFill,
    url: "https://www.linkedin.com/in/k-abeywickrama/",
  },
  {
    id: 2,
    icon: RiFacebookBoxFill,
    url: "https://www.facebook.com/profile.php?id=100057182983955",
  },
  {
    id: 3,
    icon: RiGithubFill,
    url: "https://github.com/KavinduAbeywickrama",
  },
];

export const aboutItems = [
  {
    id: 1,
    label: "React & Next.js development",
  },
  {
    id: 2,
    label: "TypeScript & JavaScript (ES6+)",
  },
  {
    id: 3,
    label: "Responsive design & CSS frameworks",
  },
  {
    id: 4,
    label: "API integration & state management",
  },
  {
    id: 5,
    label: "Performance optimization",
  },
  {
    id: 6,
    label: "Java & Springboot development",
  },
];

export const ResumeItems = [
  {
    id: 1,
    title: "Experience",
    list: [
      {
        role: "Software Engineer",
        label: "Hatchyard",
        time: "2022-Present",
      },
      {
        label: "Hatchyard",
        role: "Intern SOftware Engineer",
        time: "2020-2022",
      },
      {
        label: "Nalalabs",
        role: "Junior Developer",
        time: "2019-2020",
      },
      {
        label: "People's Bank",
        role: "Trainee Assistant",
        time: "2019-2020",
      },
    ],
  },
  {
    id: 2,
    title: "Education",
    list: [
      {
        label: "University of Kelaniya",
        role: "Bsc(hons) in Software Engineering",
        time: "2019",
      },
      {
        label: "Meta",
        role: "React Developer Certification",
        time: "2022",
      },
    ],
  },
];

export const ProjectsItems = [
  {
    id: 1,
    title: "AI Image Generator",
    src: "/images/portfolio-1.png",
    text: "A full-stack MERN application that uses OpenAI's DALL-E model to generate unique images from text prompts. Features user authentication, cloud storage for generated images, and a community showcase.",
    githubUrl: "https://github.com/KavinduAbeywickrama/ai-image-generator",
  },
  {
    id: 2,
    title: "Netflix Clone - UI",
    src: "/images/portfolio-2.png",
    text: "A responsive front-end clone of the Netflix homepage built with React. It includes a dynamic hero section, movie rows by category, and a hover effect to show more information about a title.",
  },
  {
    id: 3,
    title: "Weather App",
    src: "/images/portfolio-3.png",
    text: "A clean and modern weather application that fetches data from a weather API to display current conditions and forecasts for any city. Features a search function and dynamic weather icons.",
  },
  {
    id: 4,
    title: "Portfolio Website",
    src: "/images/portfolio-4.png",
    text: "The source code for this very portfolio! Built with a modern front-end framework (like React/Next.js) to showcase projects and skills with a clean and interactive design.",
  },
];

export const contactItems = [
  {
    id: 1,
    label: "Email:",
    link: "agckavindu@gmail.com",
  },
  {
    id: 2,
    label: "Phone:",
    link: "+94 71 9697218",
  },
  {
    id: 3,
    label: "Location:",
    link: "Colombo, Sri-Lanka",
  },
];
