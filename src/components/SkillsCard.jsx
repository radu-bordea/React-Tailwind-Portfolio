import React from "react";

const SkillsCard = ({ icon, title, text }) => {
  return (
    <article>
      <span>
        {icon}
        <h4 className="mt-2 mx-1 font-bold">{title}</h4>
        <p className="mx-1 my-2 text-slate-400">{text}</p>
      </span>
    </article>
  );
};

export default SkillsCard;
