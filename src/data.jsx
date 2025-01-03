import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiBootstrap } from "react-icons/si";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project6 from "./assets/project6.png";

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-teal-400" />,
    text: "As a moderate-level developer, I have gained proficiency in crafting web pages using HTML and CSS. My journey began with school projects, where I learned the fundamentals of structuring content (HTML) and styling it (CSS). Further honing my skills through Udemy courses and independent learning, I've successfully created aesthetically pleasing and responsive user interfaces. My ability to blend design principles with coding ensures the delivery of visually engaging and user-friendly websites.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-teal-400" />,
    text: "With a moderate skill level in JavaScript, I've embarked on a dynamic programming journey. Starting from foundational knowledge acquired in school projects, I delved deeper into the language through Udemy courses and self-directed projects. This journey has equipped me with the ability to create interactive and feature-rich websites. Leveraging my skills, I've implemented functionalities ranging from user input validation to asynchronous requests. My JavaScript proficiency is demonstrated through practical application and continuous exploration of its evolving ecosystem.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-teal-400" />,
    text: "Venturing into the world of frontend development, I've acquired a moderate proficiency in React. My introduction to this powerful library began with school projects, and I subsequently deepened my understanding through Udemy courses and personal initiatives. Leveraging React, I've developed reusable components and interactive user interfaces. My grasp of state management, component lifecycles, and routing showcases my ability to create dynamic, efficient, and scalable web applications. As a developer, I'm committed to staying abreast of React's latest advancements and refining my skills through hands-on experience..",
  },
  {
    id: nanoid(),
    title: "NodeJS & ExpressJs",
    icon: <FaNodeJs className="h-16 w-16 text-teal-400" />,
    text: "I had been proficient in Node.js and Express, with experience in developing scalable server-side applications. I had created RESTful APIs and integrated middleware for authentication, logging, and error handling. I had managed databases with MongoDB Atlas, optimized queries, and performed data migrations. I had developed front-end interfaces using React, ensuring seamless integration with back-end services. I had applied asynchronous programming techniques and security best practices.",
  },
  {
    id: nanoid(),
    title: "Bootsrap",
    icon: <SiBootstrap className="h-16 w-16 text-teal-400" />,
    text: "I have hands-on experience with Bootstrap, working on projects like BeHives and Babyshop. In BeHives, I developed responsive layouts and streamlined the UI for better user engagement. For Babyshop, I crafted mobile-first e-commerce interfaces, ensuring a smooth and consistent user experience across devices, focusing on aesthetics and functionality with Bootstrap components.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: project1,
    url: "https://oleksalt-babyshop.onrender.com/",
    github: "https://github.com/radu-bordea/MERN-eCommerce.git",
    title: "BabyShop",
    text: "A modern e-commerce baby shop built with MERN stack, featuring Redux for state management and secure user login functionality.",
  },
  {
    id: nanoid(),
    img: project2,
    url: "https://bi-project-client.onrender.com/data",
    github: "https://github.com/radu-bordea/BI-Project.git",
    title: "BeeHives",
    text: "A MERN application to visualize temperature, weight, and humidity data from IoT devices installed in beehives for monitoring.",
  },
  {
    id: nanoid(),
    img: project3,
    url: "https://radu-3dportfolio.netlify.app/",
    github: "https://github.com/radu-bordea/REACT-3DPortfolio",
    title: "ModelingPortfolio",
    text: "This is a portfolio made in React for me as a new model. I have different fashion pictures on the gallery section.",
  },
  {
    id: nanoid(),
    img: project4,
    url: "https://react-unsplash-pics.netlify.app/",
    github: "https://github.com/radu-bordea/React-UnsplashProject.git",
    title: "Pictures",
    text: "Discover breathtaking images effortlessly React app, powered by the Unsplash API.",
  },
  {
    id: nanoid(),
    img: project6,
    url: "https://react-typescript-todo-list-task.netlify.app/",
    github: "https://github.com/radu-bordea/ReactTypescript-todoList.git",
    title: "To-Do List",
    text: "Elevating task management, this React-driven todo list combines functionality with style.",
  },
];
