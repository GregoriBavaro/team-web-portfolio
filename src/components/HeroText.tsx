//Hooks
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

//CSS
import classes from "../components/HeroText.module.css";

//icons
import fb from "../data/photos/social/facebook.png";
import li from "../data/photos/social/linkedin.png";
import ins from "../data/photos/social/instagram.png";

const HeroText: React.FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.hero}>
        <span>Hi there!</span>
        <div className={classes.typewriter}>
          <span>We are</span>
          <Typewriter
            options={{
              strings: [
                "Developers.",
                "Strategists.",
                "Designers.",
                "Binary Brigade.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <p>Empowering your digital transformation with software</p>
        <Link to="/contact" className={classes.contactButton}>
          <span>Start a project</span>
          <span>Contact us</span>
        </Link>
      </div>
      <div className={classes.copyright}>
        <p>Copyright &#xA9; {new Date().getFullYear()} Binary Brigade</p>
      </div>
      <div className={classes.social}>
        <a href="https://www.instagram.com/" target="_blank">
          <img src={ins} />
        </a>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={fb} />
        </a>
        <a href="https://www.linkein.com/" target="_blank">
          <img src={li} />
        </a>
      </div>
    </div>
  );
};

export default HeroText;
