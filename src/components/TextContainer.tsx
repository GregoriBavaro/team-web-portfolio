//Hooks
import { useContext, useEffect, useState, useRef } from "react";
import { GlobalContext } from "../store/global-context";
import {
  useSpringRef,
  useTransition,
  animated,
  useSpring,
} from "@react-spring/web";
import Slide from "./Slide";

//Components
import SKillsContainer from "./SkillsContainer";

//CSS
import classes from "./TextContainer.module.css";

const TextContainer: React.FC = () => {
  const transRef = useSpringRef();
  const ref = useRef<HTMLDivElement>(null);

  const personCtx = useContext(GlobalContext);
  const [isClicked, setIsClicked] = useState<boolean>(() => {
    return false;
  });
  const [info, setInfo] = useState<{
    name: string;
    sirName: string;
    title: string;
    about: string;
  }>({
    name: personCtx.name,
    sirName: personCtx.sirName,
    title: personCtx.title,
    about: personCtx.about,
  });

  const transitions = useTransition(personCtx.id, {
    ref: transRef,
    keys: null,
    delay: 200,
    from: { y: personCtx.animation.leave, opacity: 1 },
    enter: { y: "0%", opacity: 1 },
    leave: { y: personCtx.animation.from, opacity: 1 },
    exitBeforeEnter: true,
    config: {
      duration: 300,
      tension: 180,
      friction: 12,
      mass: 1,
    },
  });

  useEffect(() => {
    transRef.start();
  }, [personCtx.id]);

  useEffect(() => {
    const info = setTimeout(() => {
      setInfo(prevState => { return {...prevState, 
        name: personCtx.name,
        sirName: personCtx.sirName,
        title: personCtx.title,
        about: personCtx.about,
      }});
    }, 470);

    return () => {
      clearTimeout(info);
    };
  }, [personCtx.id]);

  const skillsHandler = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <Slide
        isClicked={!isClicked}
        className={classes.text}
        from={"-150%"}
        leave={"-150%"}
      >
        <div>
          {transitions((style, item): any =>
            item > -1 ? (
              <animated.div style={style}>
                <span>
                  {info.name} {info.sirName}
                </span>
                <br />
                <span>{info.title}</span>
              </animated.div>
            ) : (
              ""
            )
          )}
        </div>
        <div>
          <p>{info.about}</p>
        </div>
        <div style={{ background: "var(--orange)" }} onClick={skillsHandler}>
          <span style={{ color: "var(--black)" }}>
            Skills
          </span>
          <span style={{ color: "var(--lightBeige)" }}>
            Skills
          </span>
        </div>
      </Slide>
      <SKillsContainer isClicked={isClicked} skillsHandler={skillsHandler} />
    </div>
  );
};

export default TextContainer;
