//Hooks
import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import GlobalContextProvider from "./store/global-context";

//Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

function App() {
  return (
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  );
}

export default App;
