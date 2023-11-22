import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and code" />
          <p className="text-slate-600 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            sed dolor, ea laboriosam odit iure maiores tempore quae officiis
            voluptatem tempora laudantium aspernatur voluptatibus ullam id qui
            labore? Quia modi saepe voluptatem rerum, dolores corporis sapiente
            optio. Corrupti itaque quis deserunt fuga esse, nulla tenetur?
            Incidunt aspernatur nisi optio fugit.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
