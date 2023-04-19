//Hooks
import { useContext, useEffect } from "react";
import { GlobalContext } from "../store/global-context";
import {
  useSpringRef,
  useTransition,
} from "@react-spring/web";

//Components
import pages from "./NamePages"

//CSS
import classes from "./NameContainer.module.css";

const NameContainer: React.FC = () => {
  const personCtx = useContext(GlobalContext);
  const transRef = useSpringRef();

  const transitions = useTransition(personCtx.id, {
    ref: transRef,
    keys: null,
    delay:  250,
    from: { x: personCtx.animation.from, opacity: 1 },
    enter: { x: "0%", opacity: 1 },
    leave: { x: personCtx.animation.leave, opacity: 1 },
    exitBeforeEnter: true,
    config: {
      duration: 300,
      tension: 180, friction: 12 
    },
  });

  useEffect(() => {
    transRef.start();
  }, [personCtx.id]);

  return (
    <div className={classes.container}>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
    </div>
  );
};

export default NameContainer;
