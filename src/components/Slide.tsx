//Hooks
import { useEffect } from "react";
import { useSpringRef, useTransition, animated } from "@react-spring/web";

const Slide: React.FC<{
  isClicked: boolean;
  children?: React.ReactNode;
  className: any;
  from: string;
  leave: string
}> = (props) => {
  const transRef = useSpringRef();
  const transitions = useTransition(props.isClicked, {
    ref: transRef,
    keys: null,
    delay: 20,
    from: { y: props.from, opacity: 1 },
    enter: { y: "0%", opacity: 1 },
    leave: { y: props.leave, opacity: 1 },
    config: {
      duration: 600,
      tension: 180,
      friction: 12,
      mass: 1,
    },
  });

  useEffect(() => {
    transRef.start();
  }, [props.isClicked]);

  return (
    <>
      {transitions((style, item): any =>
        item ? (
          <animated.span style={style} className={props.className}>
            {props.children}
          </animated.span>
        ) : (
          ""
        )
      )}
    </>
  );
};

export default Slide;
