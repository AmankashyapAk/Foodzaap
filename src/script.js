import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import UserContext from "./utils/UserContext";
//type = "module";
// let root = document.getElementById("root");
// let heading = document.createElement("h1");
// heading.innerHTML = "Hello World Js";

// root.appendChild(heading);

// const heading= React.createE
// const heading = React.createElement("h1", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am H1"),
//     React.createElement("h2", {}, "I am H2"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am H1"),
//     React.createElement("h2", {}, "I am H2"),
//   ]),
// ]);

//aman
// "restaurants":

//aman

const AppLayout = () => {
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: "Aman" }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

//some info that tellbrowser router what happen when we go to that path
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
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
// root.render(<AppLayout />);
