import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import { useEffect } from "react";

// Chunking
// Code Splitting
// lazy loading
// dynamic bundling
// loading while scrolling
//one demand loading
const Grocery = lazy(() => import("./components/grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
  const [userName, setUserName] = useState("");
  // authentication
  useEffect(() => {
    // Make and API call and send username and data
    const data = {
      name: "ruku neupane",
    };
    setUserName(data.name);
  }, []);
  console.log(userName);
  return (
    <UserContext.Provider
      value={{ loggedInUser: userName, setUserName, userName }}
    >
      <div className="app">
        {/* <UserContext.Provider value={{ loggedInUser: "ruku" }}> */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
        {/*  if my path is = / > body */}
      </div>
    </UserContext.Provider>
  );
};

// console.log(heading);
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
