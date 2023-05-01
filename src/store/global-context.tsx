//Hooks
import React, { useState } from "react";

//Model
import Person from "../models/person";

//Photos
import greg from "../data/photos/gregori.png";

//Data
import data from "../data/personalData/data.json";

export const GlobalContext = React.createContext<Person>({
  name: "",
  sirName: "",
  title: "",
  about: "",
  id: 0,
  set: "",
  animation: { from: "", leave: "" },
  skills: [{ language: "", experience: "" }],
  photo: "",
});

const GlobalContextProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const gregori = new Person(
    data.gregori_bavaro.name,
    data.gregori_bavaro.sirName,
    data.gregori_bavaro.position,
    data.gregori_bavaro.about,
    data.gregori_bavaro.id,
    "",
    { from: "-200%", leave: "200%" },
    data.gregori_bavaro.programmingLanguages,
    greg
  );

  const [person, setPerson] = useState<Person>(() => {
    return gregori;
  });
  
  const contextValue: Person = {
    name: person.name,
    sirName: person.sirName,
    title: person.title,
    about: person.about,
    id: person.id,
    set: setPerson,
    animation: person.animation,
    skills: person.skills,
    photo: person.photo,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
