import React from "react";
import Skill from "./Skill";
import skillsObj from "@/data/skills";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="text-2xl font-semibold mb-4 text-[#ff6b6b]">
        Habilidades
      </h2>
      <div className="flex flex-wrap gap-4">
        {skillsObj.map((skill, id) => (
          <Skill key={id} name={skill.name} src={skill.img} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
