//Hooks
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../store/global-context";


//CSS
import classes from "./AboutLayoutWrapper.module.css";

const AboutLayoutWrapper: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const personCtx = useContext(GlobalContext);
  const [styles, setStyles] = useState({
    background: personCtx.homePageBackground,
  });
  useEffect(() => {
    setStyles({background: personCtx.homePageBackground})
  }, [personCtx.id]);

  return <div className={classes.container} style={{...styles}}>{children}</div>;
};

export default AboutLayoutWrapper;
