import heroImg from "../assets/hero.svg";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const github = "https://github.com/radu-bordea"; // Replace with your GitHub profile URL
  const linkedin = "https://www.linkedin.com/in/radu-nicolae-bordea-695155220/"; // Replace with your LinkedIn profile URL

  return (
    <div className="bg-teal-100 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Radu</h1>
          <p className="mt-4 text-3xl text-slate-00 capitalize tracking-wide ">
            Front-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-500 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href={github}>
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />{" "}
            </a>
            <a href={linkedin}>
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img src={heroImg} className="h-80 lg:h-96" alt="Hero" />
        </article>
      </div>
    </div>
  );
};

export default Hero;
