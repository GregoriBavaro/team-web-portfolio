//Hooks
import { useEffect, useState } from "react";
import Controls from "../hooks/set-controls";
import { useSpringRef, useTransition, animated } from "@react-spring/web";
import setProject from "../hooks/set-project";

//Components
import MediaButton from "./MediaButton";

//CSS
import classes from "./ProjectText.module.css";

//Model
import MediaButtonModel from "../models/media";

//Icons
import upArrow from "../data/ui/left-arrow.png";
import downArrow from "../data/ui/right-arrow.png";

const ProjectText: React.FC = () => {
  const transRef = useSpringRef();
  const {
    animation: animation,
    index: currentIndex,
    forward: upArrowButtonHandler,
    backward: downArrowButtonHandler,
  } = Controls(
    2,
    1,
    { from: "100%", leave: "-100%" },
    { from: "-100%", leave: "100%" }
  );

  const project = setProject(currentIndex);

  const [info, setInfo] = useState<{
    name: string;
    id: number;
    description: string;
    buttonName: string;
    buttonLink: string;
  }>({
    name: project.name,
    id: project.id,
    description: project.description,
    buttonName: project.buttonName,
    buttonLink: project.buttonLink
  });

  useEffect(() => {
    const info = setTimeout(() => {
      setInfo({
        name: project.name,
        id: project.id,
        description: project.description,
        buttonName: project.buttonName,
        buttonLink: project.buttonLink
      });
    }, 470);

    return () => {
      clearTimeout(info);
    };
  }, [project.id]);

  const transitions = useTransition(currentIndex, {
    ref: transRef,
    keys: null,
    delay: 200,
    from: { y: animation.from, opacity: 1 },
    enter: { y: "0%", opacity: 1 },
    leave: { y: animation.leave, opacity: 1 },
    exitBeforeEnter: true,
    config: {
      duration: 350,
      tension: 180,
      friction: 12,
      mass: 1,
    },
  });

  const menu = [
    new MediaButtonModel(upArrow, 1, "up", upArrowButtonHandler),
    new MediaButtonModel(downArrow, 2, "down", downArrowButtonHandler),
  ];

  useEffect(() => {
    transRef.start();
  }, [currentIndex]);

  return (
    <div className={classes.container}>
      <div className={classes.container__wrapper}>
        {transitions((style, item): any =>
          item > -1 ? (
            <animated.div style={style}>
              <span>{info.id}</span>
              <h1>{info.name}</h1>
              <p>{info.description}</p>
              <div className={classes.container__button}>
                <a href={info.buttonLink}>
                  {info.buttonName}
                </a>
                <a href={info.buttonLink}>
                  {info.buttonName}
                </a>
              </div>
            </animated.div>
          ) : (
            ""
          )
        )}
      </div>
      {menu.map((item) => (
        <MediaButton
          key={item.id}
          icon={item.icon}
          position={item.className}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default ProjectText;
