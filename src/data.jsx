import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";
import project5 from "./assets/project5.png";
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
    icon: <FaHtml5 className="h-16 w-16 text-teal-500" />,
    text: "As a moderate-level developer, I have gained proficiency in crafting web pages using HTML and CSS. My journey began with school projects, where I learned the fundamentals of structuring content (HTML) and styling it (CSS). Further honing my skills through Udemy courses and independent learning, I've successfully created aesthetically pleasing and responsive user interfaces. My ability to blend design principles with coding ensures the delivery of visually engaging and user-friendly websites.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-teal-500" />,
    text: "With a moderate skill level in JavaScript, I've embarked on a dynamic programming journey. Starting from foundational knowledge acquired in school projects, I delved deeper into the language through Udemy courses and self-directed projects. This journey has equipped me with the ability to create interactive and feature-rich websites. Leveraging my skills, I've implemented functionalities ranging from user input validation to asynchronous requests. My JavaScript proficiency is demonstrated through practical application and continuous exploration of its evolving ecosystem.",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-teal-500" />,
    text: "Venturing into the world of frontend development, I've acquired a moderate proficiency in React. My introduction to this powerful library began with school projects, and I subsequently deepened my understanding through Udemy courses and personal initiatives. Leveraging React, I've developed reusable components and interactive user interfaces. My grasp of state management, component lifecycles, and routing showcases my ability to create dynamic, efficient, and scalable web applications. As a developer, I'm committed to staying abreast of React's latest advancements and refining my skills through hands-on experience..",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: project1,
    url: "https://react-unsplash-pics.netlify.app/",
    github: "https://github.com/radu-bordea/React-UnsplashProject.git",
    title: "first project",
    text: "Discover breathtaking images effortlessly React app, powered by the Unsplash API.",
  },
  {
    id: nanoid(),
    img: project2,
    url: "https://react-menu-categories.netlify.app/",
    github: "https://github.com/radu-bordea/React-Menu.git",
    title: "second project",
    text: "Crafted with elegance, this React-based menu app presents a delightful collection of recipe cards.",
  },
  {
    id: nanoid(),
    img: project3,
    url: "https://react-typescript-todo-list-task.netlify.app/",
    github: "https://github.com/radu-bordea/ReactTypescript-todoList.git",
    title: "third project",
    text: "Elevating task management, this React-driven todo list combines functionality with style.",
  },
  {
    id: nanoid(),
    img: project4,
    url: "https://react-tours-offer.netlify.app/",
    github: "https://github.com/radu-bordea/React-Tours.git",
    title: "forth project",
    text: "Navigate through travel possibilities effortlessly with this React-powered tour list.",
  },
  {
    id: nanoid(),
    img: project5,
    url: "https://react-reviews-users.netlify.app/",
    github: "https://github.com/radu-bordea/React-Reviews.git",
    title: "fifth project",
    text: "Experience the elegance of user interaction with this React-based profile card component.",
  },
  {
    id: nanoid(),
    img: project6,
    url: "https://react-mixdrinks.netlify.app/",
    github: "https://github.com/radu-bordea/React-MixDrinks.git",
    title: "sixth project",
    text: "Explore an array of tantalizing cocktails with our React app powered by the CocktailAPI. Discover, mix, and savor!",
  },
];
