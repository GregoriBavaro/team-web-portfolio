import { CSSProperties } from "react";
import { animated, AnimatedProps } from "@react-spring/web";


const pages: ((
    props: AnimatedProps<{ style: CSSProperties }>
  ) => React.ReactElement)[] = [
    ({ style }) => (
      <animated.div
        style={{
          ...style,
          background: "linear-gradient(180deg,#4a4a4a 0%, #050012 80%)",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      ></animated.div>
    ),
    ({ style }) => (
      <animated.div
        style={{
          ...style,
          background: "linear-gradient(180deg,#6c052e 0%, #de2c54 80%)",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      ></animated.div>
    ),
    ({ style }) => (
      <animated.div
        style={{
          ...style,
          background: "linear-gradient(180deg,#444e50 0%, #5f6e70 80%)",
          height: "100%",
          width: "100%",
          position: "absolute",
          top: "0",
          left: "0",
        }}
      ></animated.div>
    ),
  ];

  export default pages;