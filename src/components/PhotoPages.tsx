import { CSSProperties } from "react";
import { animated, AnimatedProps } from "@react-spring/web";

//Photos
import greg from "../data/photos/gregori.png";
import person from "../data/photos/person.png";
import person2 from "../data/photos/nikolikj.png";

const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.img
      style={{
        ...style,
      }}
      src={greg}
    />
  ),
  ({ style }) => (
    <animated.img
      style={{
        ...style,
      }}
      src={person}
    />
  ),
  ({ style }) => (
    <animated.img
      style={{
        ...style,
      }}
      src={person2}
    />
  ),
];

export default pages;
