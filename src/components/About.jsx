import React from "react";
import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-slate-950 py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and code" />
          <p className="text-slate-600 leading-loose">
            As a student IT developer at Åland University of Applied Sciences in
            Finland, my passion lies in coding, and I thoroughly enjoy working
            with technologies such as JavaScript, React, React-Native, Flutter,
            and Node.js. I find immense satisfaction in bringing ideas to life
            through code. Whether it's crafting interactive user interfaces with
            React or building cross-platform mobile applications using
            React-Native and Flutter, I am always eager to explore and apply the
            latest tools in the ever-evolving field of web and mobile
            development. My love for coding extends to server-side development,
            where I leverage the efficiency and scalability of Node.js to create
            robust backend systems. Coding, for me, is not just a skill; it's a
            source of inspiration and a journey of self-discovery in the dynamic
            world of software development.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
