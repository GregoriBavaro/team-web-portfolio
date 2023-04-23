//Hooks
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState, useRef } from "react";
import { animated } from "@react-spring/web";

//CSS
import classes from "./ProjectPhotoContainer.module.css";

//Models
import Project from "../models/project";

const ProjectPhotoContainer: React.FC<{ project: Project }> = (props) => {

  const currentProject = props.project;

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Parallax pages={2}>
          {currentProject.mobileImgs.map((item, i) => {
            return (
              <ParallaxLayer offset={item.offset} speed={item.speed} key={i} >
                <img src={item.img} className={classes.img} style={{right: item.x, width: item.scale, transform: `translateX(${item.x})`}}/>
              </ParallaxLayer>
            );
          })}
        </Parallax>
      </div>
    </div>
  );
};

export default ProjectPhotoContainer;
