//Hooks
import { useState } from "react";

const Controls = (
  length: number,
  rewind: number,
  forwardsAnimation: { from: string; leave: string },
  backwardsAnimation: { from: string; leave: string }
): {
  animation: { from: string; leave: string };
  index: number;
  forward: () => void;
  backward: () => void;
} => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
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
