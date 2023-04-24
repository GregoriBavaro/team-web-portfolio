//Hooks
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { animated, useTransition, useSpringRef } from "@react-spring/web";
import { useEffect, useState } from "react";

//CSS
import classes from "./ProjectPhotoContainer.module.css";

//Models
import Project from "../models/project";

const ProjectPhotoContainer: React.FC<{ project: Project }> = (props) => {
  const currentProject = props.project;
  const transRef = useSpringRef();
  const [info, setInfo] = useState<Project>(currentProject);

  useEffect(() => {
    const info = setTimeout(() => {
      setInfo(currentProject);
    }, 470);

    return () => {
      clearTimeout(info);
    };
  }, [currentProject.name]);

  const transitions = useTransition(currentProject.name, {
    ref: transRef,
    keys: null,
    delay: 200,
    from: { y: "300%", opacity: 1 },
    enter: { y: "0%", opacity: 1 },
    leave: { y: "300%", opacity: 1 },
    exitBeforeEnter: true,
    config: {
      duration: 350,
      tension: 180,
      friction: 12,
      mass: 1,
    },
  });

  useEffect(() => {
    transRef.start();
  }, [currentProject]);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {transitions((style, item): any =>
          item ? (
            <Parallax pages={2}>
              {info.mobileImgs.map((item, i) => {
                return (
                  <ParallaxLayer
                    offset={item.offset}
                    speed={item.speed}
                    key={i}
                  >
                    <animated.img
                      src={item.img}
                      className={classes.img}
                      style={{
                        ...style,
                        right: item.x,
                        width: item.scale,
                        transform: `translateX(${item.x})`,
                      }}
                    />
                  </ParallaxLayer>
                );
              })}
            </Parallax>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default ProjectPhotoContainer;
