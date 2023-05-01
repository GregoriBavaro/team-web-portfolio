//Hooks
import { useState, useEffect } from "react";

//Model
import Project from "../models/project";

//Photos
//Project 1
import mobile__2 from "../data/photos/projectOne/mobile1.png";
import mobile__1 from "../data/photos/projectOne/mobile2.png";
import tablet__2 from "../data/photos/projectOne/tablet1.png";
import tablet__1 from "../data/photos/projectOne/tablet2.png";

//Project 2
import p2__desktop__1 from "../data/photos/projectTwo/desktop2.png";
import p2__mobile__1 from "../data/photos/projectTwo/mobile.png";
import p2__tablet__1 from "../data/photos/projectTwo/tablet3.png";
import p2__mobile__2 from "../data/photos/projectTwo/mobile4.png";


const project_1 = new Project(
  "MM9 Machinery",
  1,
  "Developed end-to-end solution for a client in the corrugated box manufacturing business. The main focus was to create a product that is user-friendly with amazing UX/UI, optimizing the application for maximum speed and building responsive styled components for a better overall user experience, especially for mobile and tablet users. Developed in React.js & .Net.",
  "website",
  "",
  [
    { img: tablet__1, offset: 0.2, speed: 0.1, x: "50%", scale: "40rem" },
    { img: mobile__1, offset: 0.3, speed: 0.3, x: "2%", scale: "15rem" },
    { img: tablet__2, offset: 1, speed: 0.7, x: "50%", scale: "30rem" },
    { img: mobile__2, offset: 1.2, speed: 1.1, x: "2%", scale: "17rem" },
  ]
);

const project_2 = new Project(
  "Productivity app",
  2,
  "Developed end-to-end solution with a team of 3 developers, Productivity Web Application aimed at task and time management to help people struggling with productivity management, and help them handle their workload better.",
  "github",
  "",
  [
    { img: p2__desktop__1, offset: 0, speed: 0.3, x: "50%", scale: "40rem" },
    { img: p2__mobile__1, offset: 0.3, speed: 0.1, x: "2%", scale: "13rem" },
    { img: p2__tablet__1, offset: 1, speed: 0.7, x: "40%", scale: "40rem" },
    { img: p2__mobile__2, offset: 1.2, speed: 1.1, x: "2%", scale: "13rem" },
  ]
);

const arrayOfProjects = [project_1, project_2];

const SetProject = (index: number): any => {
  const [project, setProject] = useState<Project>(() => project_1);

  useEffect(() => {
    setProject(() => {return arrayOfProjects[index]});
  }, [index]);

  return project;
};

export default SetProject;
