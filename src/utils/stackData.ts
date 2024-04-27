import { SiPostgresql, SiTypescript} from "react-icons/si";
import { FaGit } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";

export const stackData = [
  {
    title: "HTML",
    img: FaHtml5,
  },
  {
    title: "CSS",
    img: FaCss3Alt,
  },
  {
    title: "JS",
    img: FaJs,
  },
  {
    title: "React",
    img: FaReact,
  },
  
  { title: "TypeScript", img: SiTypescript },
  {
    title: "Node JS",
    img: FaNode,
  },
  { title: "PostgreSQL", img: SiPostgresql },
  { title: "Git", img: FaGit },
];
