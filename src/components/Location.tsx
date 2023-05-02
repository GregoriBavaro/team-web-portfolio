//Photo
import map from "../data/ui/map-europe-skopje.png";

//CSS
import classes from "./Location.module.css";

const LocationUs = () => {
  return (
    <div className={classes.container}>
      <div>
        <img src={map} alt="map"/>
      </div>
      <section>
        <span>Binary Brigade</span>
        <span>Skopje, Macedonia</span>
        <span>
          <span>@</span>
          <span>: binarybrigade@protonmail.com</span>
        </span>
      </section>
    </div>
  );
};

export default LocationUs;
