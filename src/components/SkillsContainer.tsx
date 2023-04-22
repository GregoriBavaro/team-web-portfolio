//Hooks
import { useContext, useEffect } from "react";
import { GlobalContext } from "../store/global-context";
import { animated, useSpring } from "@react-spring/web";
import Slide from "./Slide";

//CSS
import classes from "./SkillsContainer.module.css";

//Icons
import arrowDown from "../data/ui/down-arrow.png";

const SKillsContainer: React.FC<{
  skillsHandler: () => void;
  isClicked: boolean;
}> = (props) => {
  const personCtx = useContext(GlobalContext);

  const [springs, api] = useSpring(() => ({
    from: { x: "-300%" },
  }));

  useEffect(() => {
    api.start({
      from: {
        x: "-300%",
      },
      to: {
        x: "0%",
      },
      config: {
        duration: 1800,
      },
    });
  }, [props.isClicked, personCtx.id]);

  return (
    <Slide
      isClicked={props.isClicked}
      className={classes.skills}
      from={"100%"}
      leave={"100%"}
    >
      <div>
        <img
          src={arrowDown}
          onClick={props.skillsHandler}
          style={{ transform: !props.isClicked ? "rotate(360deg)" : "" }}
        />
      </div>
      <section className={classes.skills__container}>
        {personCtx.skills.map(({ language, experience }, i) => {
          return (
            <span key={i} className={classes.skills__wrapper}>
              <span className={classes.language}>{language}</span>
              <span className={classes.experience}>
                <animated.span
                  style={{
                    background: personCtx.photoContainerBackground,
                    width: experience,
                    ...springs,
                  }}
                ></animated.span>
              </span>
            </span>
          );
        })}
      </section>
    </Slide>
  );
};

export default SKillsContainer;
