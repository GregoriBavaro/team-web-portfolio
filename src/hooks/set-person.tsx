//Hooks
import { useEffect, useContext } from "react";
import { GlobalContext } from "../store/global-context";

//Models
import Person from "../models/person";

//Photos
import gregori from "../data/photos/gregori.png";
import darko from "../data/photos/person.png";
import darko2 from "../data/photos/person2.png";

const gregAbout =
  "Hi, my name is Gregori. I am a Creative and skillful frontend web developer with a passion for design and creating elegant solutions. I care deeply about user experience with a serious passion for UI design and new technologies.I love to create beautiful and performant products with delightful user experiences.";

const dareNAbout =
  "I am a highly skilled full-stack web developer with a deep passion for pushing the boundaries of what's possible. I thrive on setting new benchmarks and surpassing previous bests in all my endeavors. My goal is to create elegant, efficient solutions that deliver exceptional value to end-users in the shortest possible time.";

const dareDAbout =
  "The passionate approach in my professional orientation has provided me with opportunities throughout my career that helped in building up my skills and capabilities. So far in my career, I have always been in position that demanded high level of internal and interdepartmental teamwork and high level of cooperation, as strong basis of the execution of the company's goals.";

const SetPerson: React.FC<{
  index: number;
  animate: { from: string; leave: string };
}> = (props): any => {
  const personCtx = useContext(GlobalContext);

  const greg = new Person(
    "Gregori",
    "Bavaro",
    "Web Developer",
    gregAbout,
    0,
    "",
    props.animate,
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
    ],
    gregori
  );

  const darkoD = new Person(
    "Darko",
    "Dejanoski",
    "Software Developer",
    dareDAbout,
    1,
    "",
    props.animate,
    "linear-gradient(180deg,#d95063 0%, #d80025 90%)",
    "linear-gradient(180deg,#6c052e 0%, #de2c54 80%)",
    "var(--black)",
    "var(--lightBeige)",
    "var(--cherry)",
    [
      { language: "HTML", experience: "70%" },
      { language: "CSS", experience: "20%" },
      { language: "JavaScript", experience: "50%" },
      { language: "Angular", experience: "45%" },
      { language: "C#", experience: "60%" },
      { language: "SQL", experience: "50%" },
      { language: ".Net", experience: "70%" },
    ],
    darko
  );

  const darkoN = new Person(
    "Darko",
    "Nikolikj",
    ".Net Developer",
    dareNAbout,
    2,
    "",
    props.animate,
    "linear-gradient(180deg,#707b7c 0%, #455052 80%)",
    "linear-gradient(180deg,#444e50 0%, #5f6e70 80%)",
    "var(--lightBeige)",
    "var(--black)",
    "var(--tile)",
    [
      { language: "HTML", experience: "40%" },
      { language: "CSS", experience: "50%" },
      { language: "JavaScript", experience: "80%" },
      { language: "Angular", experience: "45%" },
      { language: "React.js", experience: "45%" },
      { language: "C#", experience: "60%" },
      { language: "SQL", experience: "50%" },
      { language: ".Net", experience: "65%" },
    ],
    darko2
  );

  const arrayOfDevelopers = [greg, darkoD, darkoN];

  useEffect(() => {
    personCtx.set(arrayOfDevelopers[props.index]);
  }, [props.index]);
};

export default SetPerson;
