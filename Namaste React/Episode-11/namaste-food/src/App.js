import React, { useState, lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "John Doe",
    };
    setUserName(data.name);
  }, []);
  return (
    <UserContext.Provider
      value={{
        loggedInUser: userName,
        setUserName,
      }}
    >
      <div className="min-h-screen flex flex-col">
        {/* <UserContext.Provider
          value={{
            loggedInUser: "Jane Doe",
          }}
        > */}
        <Header />
        {/* </UserContext.Provider> */}
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback="Loading...">
            <Grocery />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
