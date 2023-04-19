//Hooks
import { Link } from "react-router-dom";

const NavigationItems: React.FC<{ name: string; to: string }> = (props) => {
  return (
    <li>
      <Link to={props.to}>{props.name}</Link>
    </li>
  );
};

export default NavigationItems;
