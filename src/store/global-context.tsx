//Hooks
import React, { useState } from "react";

import Person from "../models/person";
import Project from "../models/project";

const gregAbout =
  "Hi, my name is Gregori. I am a Creative and skillful frontend web developer with a passion for design and creating elegant solutions. I care deeply about user experience with a serious passion for UI design and new technologies.I love to create beautiful and performant products with delightful user experiences.";

export const GlobalContext = React.createContext<Person>({
  name: "",
  sirName: "",
  title: "",
  about: "",
  id: 0,
  set: "",
  animation: { from: "", leave: "" },
  photoContainerBackground: "",
  homePageBackground: "",
  buttonBackground: "",
  buttonTextColor: "",
  buttonTextColorHover: "",
  skills: [{ language: "", experience: "" }],
});


const GlobalContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const gregori = new Person(
    "Gregori",
    "Bavaro",
    "Web Developer",
    gregAbout,
    0,
    "",
    { from: "-200%", leave: "200%" },
    "linear-gradient(179deg, #ffb340 0%, #ef6f3e 90%)",
    "linear-gradient(180deg,#4a4a4a 0%, #050012 80%)",
    "var(--orange)",
    "var(--black)",
    "var(--lightBeige)",
    [
      { language: "HTML", experience: "70%" },
      { language: "CSS", experience: "80%" },
      { language: "JavaScript", experience: "60%" },
      { language: "React.js", experience: "55%" },
      { language: "TypeScript", experience: "30%" },
      { language: "C#", experience: "30%" },
      { language: "SQL", experience: "20%" },
      { language: "Spline", experience: "40%" },
    ]
  );

  const [person, setPerson] = useState<Person>(gregori);
  
  const contextValue: Person = {
    name: person.name,
    sirName: person.sirName,
    title: person.title,
    about: person.about,
    id: person.id,
    set: setPerson,
    animation: person.animation,
    photoContainerBackground: person.photoContainerBackground,
    homePageBackground: person.homePageBackground,
    buttonBackground: person.buttonBackground,
    buttonTextColor: person.buttonTextColor,
    buttonTextColorHover: person.buttonTextColorHover,
    skills: person.skills,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
