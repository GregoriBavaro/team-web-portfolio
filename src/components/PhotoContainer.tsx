//Hooks
import { useEffect, useState, useContext } from "react";
import {
  useSpringRef,
  useTransition,
  animated,
  useSpring,
} from "@react-spring/web";
import { GlobalContext } from "../store/global-context";
import SetPerson from "../hooks/set-person"

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
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [animation, setAnimation] = useState<{ from: string; leave: string }>({
    from: "-100%",
    leave: "100%",
  });
  const transRef = useSpringRef();
  const personCtx = useContext(GlobalContext);

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
      mass: 1
    },
  });

  const springs = useSpring({
    from: { background: "linear-gradient(179deg, #ffb340 0%, #ef6f3e 90%)" },
    to: { background: personCtx.photoContainerBackground },
    delay: 700,
  });

  const rightArrowButtonHandler = () => {
    if (currentIndex < 3) {
      setCurrentIndex((prev: number) => {
        return prev + 1;
      });
    }
    if (currentIndex === 2) {
      setCurrentIndex(0);
    }
    setAnimation((prev) => ({ ...prev, from: "-100%", leave: "100%" }));
  };

  const leftArrowButtonHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev: number) => {
        return prev - 1;
      });
    }
    if (currentIndex === 0) {
      setCurrentIndex(2);
    }
    setAnimation((prev) => ({ ...prev, from: "100%", leave: "-100%" }));
  };

  useEffect(() => {
    transRef.start();
    document.body.style.background = personCtx.homePageBackground;
  }, [currentIndex]);

  SetPerson({
    index: currentIndex,
    animate: animation,
  })

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
