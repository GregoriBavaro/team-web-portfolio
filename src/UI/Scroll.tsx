//CSS
import classes from "../UI/Scroll.module.css";

//Icon
import arrowDown from "../data/ui/long-down-arrow.png";

const Scroll: React.FC<{ class: any }> = (props) => {
  const position = props.class;

  return (
    <div className={classes[position]}>
      <span>Scroll down</span>
      <div className={classes[position]}>
        <img src={arrowDown} />
      </div>
    </div>
  );
};

export default Scroll;
