//Hooks
import { useEffect, useContext } from "react";
import {
  useSpringRef,
  useTransition,
  animated,
  useSpring,
} from "@react-spring/web";
import { GlobalContext } from "../store/global-context";
import SetPerson from "../hooks/set-person";
import Controls from "../hooks/set-controls";

//CSS
import classes from "../components/PhotoContainer.module.css";

//Components
import MediaButton from "./MediaButton";
import pages from "./PhotoPages";

//Models
import MediaButtonModel from "../models/media";

//Icons
import leftArrow from "../data/ui/left-arrow.png";
import rightArrow from "../data/ui/right-arrow.png";

const PhotoContainer: React.FC = () => {
  const transRef = useSpringRef();
  const personCtx = useContext(GlobalContext);

  const {
    animation: animation,
    index: currentIndex,
    forward: rightArrowButtonHandler,
    backward: leftArrowButtonHandler,
  } = Controls(
    3,
    2,
    { from: "-100%", leave: "100%" },
    { from: "100%", leave: "-100%" }
  );

  const transitions = useTransition(currentIndex, {
    ref: transRef,
    keys: null,
    delay: 200,
    from: { x: animation.from, opacity: 1 },
    enter: { x: "0%", opacity: 1 },
    leave: { x: animation.leave, opacity: 1 },
    exitBeforeEnter: true,
    config: {
      duration: 300,
      tension: 180,
      friction: 12,
      mass: 1,
    },
  });

  const springs = useSpring({
    from: { background: "linear-gradient(179deg, #ffb340 0%, #ef6f3e 90%)" },
    to: { background: personCtx.photoContainerBackground },
    delay: 700,
  });

  useEffect(() => {
    transRef.start();
    document.body.style.background = personCtx.homePageBackground;
  }, [currentIndex]);

  SetPerson({
    index: currentIndex,
    animate: animation,
  });

  const menu = [
    new MediaButtonModel(leftArrow, 1, "left", leftArrowButtonHandler),
    new MediaButtonModel(rightArrow, 2, "right", rightArrowButtonHandler),
  ];

  return (
    <div className={classes.container}>
      <animated.div style={{ ...springs }}>
        {transitions((style, i) => {
          const Page = pages[i];
          return <Page style={style} />;
        })}
      </animated.div>
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

export default PhotoContainer;
