//Hooks
import { useState, useContext } from "react";
import { GlobalContext } from "../store/global-context";

const Controls = (
  length: number,
  rewind: number,
  forwardsAnimation: { from: string; leave: string },
  backwardsAnimation: { from: string; leave: string },
  setIndex: number
): {
  animation: { from: string; leave: string };
  index: number;
  forward: () => void;
  backward: () => void;
  
} => {
  const personCtx = useContext(GlobalContext)
  const [currentIndex, setCurrentIndex] = useState<number>(() => {return setIndex});
  const [animation, setAnimation] = useState<{ from: string; leave: string }>({
    from: "-100%",
    leave: "100%",
  });

  const forwardArrowButtonHandler = () => {
    if (currentIndex < length) {
      setCurrentIndex((prev: number) => {
        return prev + 1;
      });
    }
    if (currentIndex === rewind) {
      setCurrentIndex(0);
    }
    setAnimation((prev) => ({
      ...prev,
      from: forwardsAnimation.from,
      leave: forwardsAnimation.leave,
    }));
  };

  const backwardArrowButtonHandler = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev: number) => {
        return prev - 1;
      });
    }
    if (currentIndex === 0) {
      setCurrentIndex(rewind);
    }
    setAnimation((prev) => ({
      ...prev,
      from: backwardsAnimation.from,
      leave: backwardsAnimation.leave,
    }));
  };

  return {
    animation: animation,
    index: currentIndex,
    forward: forwardArrowButtonHandler,
    backward: backwardArrowButtonHandler
  };
};

export default Controls;
