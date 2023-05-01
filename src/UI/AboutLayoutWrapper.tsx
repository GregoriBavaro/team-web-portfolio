//CSS
import classes from "./AboutLayoutWrapper.module.css";

const AboutLayoutWrapper: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <div className={classes.container}>{children}</div>;
};

export default AboutLayoutWrapper;
