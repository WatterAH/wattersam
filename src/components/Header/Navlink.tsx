import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  color: string;
  href: string;
}

const Navlink: React.FC<Props> = ({ color, href, children }) => {
  return (
    <a href={href} className={`hover:text-[#${color}] transition-colors`}>
      {children}
    </a>
  );
};

export default Navlink;
