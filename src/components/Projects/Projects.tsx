import projectsObj from "@/data/projects";
import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="text-2xl font-semibold mb-4 text-[#54a0ff]">Proyectos</h2>
      <div className="space-y-8">
        {projectsObj.map((project, i) => (
          <Project
            key={i}
            img={project.img}
            title={project.title}
            description={project.description}
            link={project.link}
            git={project.git}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
