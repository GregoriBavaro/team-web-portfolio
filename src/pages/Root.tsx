//Hooks
import { Outlet } from "react-router-dom";

//Components
import Navigation from "../components/Navigation";
import Layout from "../UI/Layout";

//Models
import MenuItem from "../models/menu";

const RootLayout: React.FC = () => {
  const menu = [
    new MenuItem("Home", 1, "/"),
    new MenuItem("About", 2, "/about"),
    new MenuItem("Projects", 3, "/projects"),
    new MenuItem("Contact", 4, "/contact"),
  ];

  return (
    <>
      <Navigation items={menu} />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default RootLayout;
