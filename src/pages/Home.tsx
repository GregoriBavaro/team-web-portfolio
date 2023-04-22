//Css
import classes from "../components/Home.module.css";

//Components
import HeroThreeDModule from "../components/HeroThreeDModule";
import HeroText from "../components/HeroText";

const Home = () => {
  return (
    <main className={classes.container}>
      {/* <HeroThreeDModule /> */}
      <HeroText />
    </main>
  );
};

export default Home;
