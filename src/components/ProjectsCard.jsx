import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const ProjectsCard = ({ url, img, github, title, text }) => {
  return (
    <article className="bg-indigo-950 border-2 border-indigo-900 shadow-2xl rounded-lg mx-auto mt-4 h-96 w-36 md:w-80 md:h-96  shadow-md hover:shadow-2xl duration-300">
      <img
        src={img}
        alt={title}
        className=" rounded-t-lg h-32 md:h-40 w-60 px-2 mx-auto py-4"
      />
      <div className="capitalize py-2 px-4 ">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-500 text-xs md:text-sm h-28 md:h-24 ">{text}</p>
        <div className="mt-4 flex gap-x-4">
          <a href={url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-slate-400 duration-300" />
          </a>
          <a href={github}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-slate-400 duration-300" />
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
