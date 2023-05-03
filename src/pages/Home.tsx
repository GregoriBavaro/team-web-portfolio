//Components
import HeroText from "../components/HeroText";
import LayoutWrapper from "../UI/LayoutWrapper";

const Home = () => {
  return (
    <LayoutWrapper>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "-10%",
        }}
      >
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
      </div>
      <HeroText />
    </LayoutWrapper>
  );
};

export default Home;
