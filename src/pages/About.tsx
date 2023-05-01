//Components
import PhotoContainer from "../components/PhotoContainer";
import NameContainer from "../components/NameContainer";
import TextContainer from "../components/TextContainer";
import AboutLayoutWrapper from "../UI/AboutLayoutWrapper";

const About = () => {
  return (
    <AboutLayoutWrapper>
      <div
        style={{
          width: "100%",
          maxWidth: "1980px",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <PhotoContainer />
        <NameContainer />
        <TextContainer />
      </div>
    </AboutLayoutWrapper>
  );
};

export default About;
