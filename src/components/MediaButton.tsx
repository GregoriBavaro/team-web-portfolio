
//CSS
import classes from "./MediaButton.module.css";

const MediaButton: React.FC<{
  icon: any;
  position: string;
  onClick: () => void;
  
}> = (props) => {

  return (
    <div className={classes[props.position]} onClick={props.onClick} >
      <img src={props.icon} />
    </div>
  );
};

export default MediaButton;
