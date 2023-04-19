//Hooks
import { CSSProperties } from "react";
import { animated, AnimatedProps } from "@react-spring/web";



const pages: ((
  props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
  ({ style }) => (
    <animated.h1
      style={{
        ...style,
      }}
    >
      Gregori
    </animated.h1>
  ),
  ({ style }) => (
    <animated.h1
      style={{
        ...style,
      }}
    >
      Darko
    </animated.h1>
  ),
  ({ style }) => (
    <animated.h1
      style={{
        ...style,
      }}
    >
      Darko
    </animated.h1>
  ),
];

export default pages;
