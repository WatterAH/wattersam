import React from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface Props {
  img: string;
  title: string;
  description: string;
  link: string;
  git: string;
}

const Project: React.FC<Props> = ({ img, title, description, link, git }) => {
  return (
    <div className="relative bg-[#202020] rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] border-l-4 border-[#feca57]">
      <Image alt={title} src={img} width={1920} height={1080} />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-[#feca57]">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex gap-3">
            <a
              href={git}
              className="text-[#54a0ff] hover:text-[#72b5ff] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={link}
              className="text-[#5f27cd] hover:text-[#7843d6] transition-colors"
            >
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
        {/* <span className="bg-[#101010] px-3 py-1 rounded-full text-xs text-[#feca57] border border-[#feca57]"></span> */}
      </div>
    </div>
  );
};

export default Project;
