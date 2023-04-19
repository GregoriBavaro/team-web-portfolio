//Models
import Menu from "../models/menu";

//Components
import NavigationItems from "../components/NavigationItems";

//CSS
import classes from "./Navigation.module.css"

const Navigation: React.FC<{ items: Menu[] }> = (props) => {
  return (
    <header className={classes.navigation}>
      <nav>
        <div>
          <span>GD2</span>
        </div>
        <ul>
          {props.items.map(({ id, name, to }) => (
            <NavigationItems key={id} name={name} to={to} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
