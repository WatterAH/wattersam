import React from "react";
import Navlink from "./Navlink";

const Header = () => {
  return (
    <header className="bg-coal p-6 top-0 z-10 transition-all">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#feca57]">
            Samuel Tlahuel
          </h1>
          <p className="text-xl mt-2 text-[#54a0ff]">Full Stack Developer</p>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Navlink href="#about" color="5f27cd">
            About
          </Navlink>
          <Navlink href="#skills" color="ff6b6b">
            Skills
          </Navlink>
          <Navlink href="#projects" color="54a0ff">
            Projects
          </Navlink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
