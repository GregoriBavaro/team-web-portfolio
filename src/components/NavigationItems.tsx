//Hooks
import { Link } from "react-router-dom";

const NavigationItems: React.FC<{ name: string; to: string }> = (props) => {
  return (
    <li>
      <Link to={props.to}>
        <span>{props.name}</span>{" "}
      </Link>
    </li>
  );
};

export default NavigationItems;
