//Hooks
import {
  Navigate,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import GlobalContextProvider from "./store/global-context";

//Pages
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import HomePage from "./pages/Home"
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

function App() {
  return (
    <GlobalContextProvider>
      <RouterProvider router={router}/>
    </GlobalContextProvider>
  );
}

export default App;
