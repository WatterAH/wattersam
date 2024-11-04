import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="mt-4 flex space-x-4">
      <a
        href="mailto:john@example.com"
        className="text-[#ff6b6b] hover:text-[#ff8787] transition-colors"
      >
        <Mail size={24} />
      </a>
      <a
        href="https://github.com/johndoe"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#54a0ff] hover:text-[#72b5ff] transition-colors"
      >
        <Github size={24} />
      </a>
      <a
        href="https://linkedin.com/in/johndoe"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#5f27cd] hover:text-[#7843d6] transition-colors"
      >
        <Linkedin size={24} />
      </a>
    </div>
  );
};

export default Contact;
