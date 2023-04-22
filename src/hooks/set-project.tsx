//Hooks
import { useState, useEffect } from "react";

//Model
import Project from "../models/project";

const project_1 = new Project(
  "MM9 Machinery",
  1,
  "Developed end-to-end solution for a client in the corrugated box manufacturing business. The main focus was to create a product that is user-friendly with amazing UX/UI, optimizing the application for maximum speed and building responsive styled components for a better overall user experience, especially for mobile and tablet users. Developed in React.js & .Net.",
  "website",
  ""
);

const project_2 = new Project(
  "Productivity app",
  2,
  "Developed end-to-end solution with a team of 3 developers, Productivity Web Application aimed at task and time management to help people struggling with productivity management, and help them handle their workload better.",
  "github",
  ""
);

const arrayOfProjects = [project_1, project_2];

const SetPerson = (index: number): any => {
  const [project, setProject] = useState<Project>(project_1);

  useEffect(() => {
    setProject(arrayOfProjects[index]);
  }, [index]);

  return project;
};

export default SetPerson;
