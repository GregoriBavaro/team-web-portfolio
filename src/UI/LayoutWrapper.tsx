//CSS
import classes from "./LayoutWrapper.module.css";

const LayoutWrapper: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <main className={classes.container}>{children}</main>;
};

export default LayoutWrapper;
