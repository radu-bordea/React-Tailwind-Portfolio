import ProjectsCard from "./ProjectsCard";
import { projects } from "../data";
import SectionTitle from "./SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {


  return (
    <section className=" py-20 align-element" id="projects">
      <SectionTitle text="web creation" />
        <div className="py-16 grid lg:grid-cols-2 xl:grid-cols-3 gap-8">

        {projects.map((project) => (
          <ProjectsCard key={project.id} {...project} />
        ))}
        </div> 
    </section>
  );
};

export default Projects;
