import Image from "next/image";
import React from "react";

const Me = () => {
  return (
    <div className="relative w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-4 border-[#5f27cd]">
      <Image
        src="/me.jpg"
        alt="sam"
        fill
        className="object-cover cursor-pointer rounded-full"
      />
    </div>
  );
};

export default Me;
