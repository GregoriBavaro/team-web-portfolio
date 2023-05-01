//Components
import PhotoContainer from "../components/PhotoContainer";
import NameContainer from "../components/NameContainer";
import TextContainer from "../components/TextContainer";
import LayoutWrapper from "../UI/LayoutWrapper";

const About = () => {
  return (
    <LayoutWrapper>
      <PhotoContainer />
      <NameContainer />
      <TextContainer />
    </LayoutWrapper>
  );
};

export default About;
