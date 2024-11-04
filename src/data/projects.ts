interface Project {
  img: string;
  title: string;
  description: string;
  link: string;
  git: string;
}

const projectsObj: Project[] = [
  {
    img: "/feedgames.png",
    title: "Feedgames",
    description: "Comparte tu pasión por los juegos.",
    link: "https://feedgames.vercel.app/",
    git: "https://github.com/WatterAH/Feedgames",
  },
  {
    img: "/minerva.png",
    title: "Minerva",
    description: "Los reportes en papel son cosa del pasado.",
    link: "https://edukatec.vercel.app/",
    git: "https://github.com/WatterAH/Edukatec",
  },
];

export default projectsObj;
