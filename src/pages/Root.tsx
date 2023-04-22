//Hooks
import { useContext, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../store/global-context";
import {
  useTransition,
  useSpringRef,
} from "@react-spring/web";

//Components
import Navigation from "../components/Navigation";
import Layout from "../UI/Layout";
import pages from "../UI/LayoutPages"

//Models
import MenuItem from "../models/menu";

const RootLayout: React.FC = () => {
  const personCtx = useContext(GlobalContext);
  const transRef = useSpringRef();

  const menu = [
    new MenuItem("Home", 1, "/"),
    new MenuItem("About", 2, "/about"),
    new MenuItem("Projects", 3, "/projects"),
    new MenuItem("Contact", 4, "/contact"),
  ];

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
    <>
      {transitions((style, i) => {
        const Page = pages[i];
        return <Page style={style} />;
      })}
      <Navigation items={menu} />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default RootLayout;
