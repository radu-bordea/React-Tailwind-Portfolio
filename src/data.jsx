import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-teal-500' />,
    text: 'As a moderate-level developer, I have gained proficiency in crafting web pages using HTML and CSS. My journey began with school projects, where I learned the fundamentals of structuring content (HTML) and styling it (CSS). Further honing my skills through Udemy courses and independent learning, I\'ve successfully created aesthetically pleasing and responsive user interfaces. My ability to blend design principles with coding ensures the delivery of visually engaging and user-friendly websites.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-teal-500' />,
    text: 'With a moderate skill level in JavaScript, I\'ve embarked on a dynamic programming journey. Starting from foundational knowledge acquired in school projects, I delved deeper into the language through Udemy courses and self-directed projects. This journey has equipped me with the ability to create interactive and feature-rich websites. Leveraging my skills, I\'ve implemented functionalities ranging from user input validation to asynchronous requests. My JavaScript proficiency is demonstrated through practical application and continuous exploration of its evolving ecosystem.',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-teal-500' />,
    text: 'Venturing into the world of frontend development, I\'ve acquired a moderate proficiency in React. My introduction to this powerful library began with school projects, and I subsequently deepened my understanding through Udemy courses and personal initiatives. Leveraging React, I\'ve developed reusable components and interactive user interfaces. My grasp of state management, component lifecycles, and routing showcases my ability to create dynamic, efficient, and scalable web applications. As a developer, I\'m committed to staying abreast of React\'s latest advancements and refining my skills through hands-on experience..',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'first project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/2148222/pexels-photo-2148222.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'second project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
  {
    id: nanoid(),
    img: 'https://images.pexels.com/photos/12883026/pexels-photo-12883026.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: 'https://react-projects.netlify.app/',
    github: 'https://github.com/john-smilga',
    title: 'third project',
    text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.',
  },
];
