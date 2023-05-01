//Hooks
import { useEffect, useContext } from "react";
import { GlobalContext } from "../store/global-context";

//Models
import Person from "../models/person";

//Photos
import gregori from "../data/photos/gregori.png";
import darko from "../data/photos/person.png";
import darko2 from "../data/photos/person2.png";

//Data
import data from "../data/personalData/data.json";

const SetPerson: React.FC<{
  index: number;
  animate: { from: string; leave: string };
}> = (props): any => {
  const personCtx = useContext(GlobalContext);

  const greg = new Person(
    data.gregori_bavaro.name,
    data.gregori_bavaro.sirName,
    data.gregori_bavaro.position,
    data.gregori_bavaro.about,
    data.gregori_bavaro.id,
    "",
    props.animate,
    data.gregori_bavaro.programmingLanguages,
    gregori
  );

  const darkoD = new Person(
    data.darko_dejanoski.name,
    data.darko_dejanoski.sirName,
    data.darko_dejanoski.position,
    data.darko_dejanoski.about,
    data.darko_dejanoski.id,
    "",
    props.animate,
    data.darko_dejanoski.programmingLanguages,
    darko
  );

  const darkoN = new Person(
    data.darko_nikolikj.name,
    data.darko_nikolikj.sirName,
    data.darko_nikolikj.position,
    data.darko_nikolikj.about,
    data.darko_nikolikj.id,
    "",
    props.animate,
    data.darko_nikolikj.programmingLanguages,
    darko2
  );

  const arrayOfDevelopers = [greg, darkoD, darkoN];

  useEffect(() => {
    personCtx.set(() => {
      return arrayOfDevelopers[props.index];
    });
  }, [props.index]);
};

export default SetPerson;
