
//Components
import PhotoContainer from "../components/PhotoContainer";
import NameContainer from "../components/NameContainer";
import TextContainer from "../components/TextContainer";

//CSS
import classes from "../components/Home.module.css";

const Home = () => {
  return (
    <main className={classes.container}>
      <PhotoContainer />
      <NameContainer />
      <TextContainer />
    </main>
  );
};

export default Home;
