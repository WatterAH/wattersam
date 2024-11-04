import React from "react";
import Image from "next/image";

interface Props {
  src: string;
  name: string;
}

const Skill: React.FC<Props> = ({ src, name }) => {
  return (
    <span className="flex flex-col items-center">
      <Image
        src={src}
        alt={name}
        width={44}
        height={44}
        className="hover:scale-125 active:scale-125 transition-transform duration-300 ease-in-out mb-2"
      />
      <p className="dark:text-white font-kufam text-xs">{name}</p>
    </span>
  );
};

export default Skill;
