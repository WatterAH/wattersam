import React from "react";
import Me from "./Me";
import Contact from "./Contact";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center gap-8 pt-12"
    >
      <Me />
      <div>
        <h2 className="text-2xl font-semibold text-[#feca57]">Sobre mí</h2>
        <p className="text-gray-300">
          La fascinación por entender cómo funciona la tecnología me llevó a
          estudiar Programación, lo cual no fue fácil y hoy sigue siendo un
          desafío constante. Sin embargo, mi perseverancia y amor por esta
          profesión me mantuvieron en pie. Después de un largo camino, estoy
          feliz de compartir soluciones efectivas e innovadoras con todos
          aquellos que las necesiten.
        </p>
        <Contact />
      </div>
    </section>
  );
};

export default About;
