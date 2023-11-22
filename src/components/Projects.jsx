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
    <section className=" py-8 align-element" id="projects">
      <SectionTitle text="web creation" />
      <Slider {...settings} className="custom-slick-dots">
        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
