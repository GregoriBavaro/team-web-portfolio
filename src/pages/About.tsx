//Hooks
import { useContext, useEffect} from "react";
import { GlobalContext } from "../store/global-context";
import {
  useTransition,
  useSpringRef,
} from "@react-spring/web";

//Components
import PhotoContainer from "../components/PhotoContainer";
import NameContainer from "../components/NameContainer";
import TextContainer from "../components/TextContainer";
import AboutLayoutWrapper from "../UI/AboutLayoutWrapper";
import pages from "../UI/LayoutPages"

const About = () => {
  const personCtx = useContext(GlobalContext);
  const transRef = useSpringRef();

  const transitions = useTransition(personCtx.id, {
    ref: transRef,
    keys: null,
    delay: 200,
    from: { x: personCtx.animation.from, opacity: 1 },
    enter: { x: "0%", opacity: 1 },
    leave: { x: personCtx.animation.leave, opacity: 1 },
    exitBeforeEnter: true,
    config: {
      duration: 300,
      tension: 180,
      friction: 12,
      mass: 1,
    },
  });

  useEffect(() => {
    transRef.start();
  }, [personCtx.id]);

  return (
    <AboutLayoutWrapper>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
      <PhotoContainer />
      <NameContainer />
      <TextContainer />
    </AboutLayoutWrapper>
  );
};

export default About;
