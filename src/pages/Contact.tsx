//Components
import LayoutWrapper from "../UI/LayoutWrapper";
import { ContactUs } from "../components/ContactUs";
import LocationUs from "../components/Location";

const Contact = () => {
  return (
    <LayoutWrapper>
      <ContactUs />
      <LocationUs />
    </LayoutWrapper>
  );
};

export default Contact;
