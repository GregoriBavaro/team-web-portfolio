//CSS
import classes from "./Layout.module.css";

interface ChildrenProps {
  children?: React.ReactNode;
}

const Layout: React.FC<ChildrenProps> = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Layout;
