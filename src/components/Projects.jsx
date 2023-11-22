import React from "react";
import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <section className="bg-slate-950 py-2 align-element" id="projects">
      <SectionTitle text="web creation" />
      <Slider {...settings}>
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
