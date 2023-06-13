import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/Main";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Catalog from "./pages/catalog/Catalog";
import ItemPage from "./pages/itemPage/ItemPage";
import Decription from "./pages/informationPage/Decription";
import WholesaleOrderPage from "./pages/WholesaleOrderPage/WholesaleOrderPage";
import ConfirmationPage from "./pages/confirmationPage/ConfirmationPage";
import OptPage from "./pages/optPage/OptPage";
import Characteristics from "./pages/informationPage/Characteristics";
import AskQuestions from "./pages/informationPage/AskQuestions";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/catalog",
    element: <Catalog />,
  },
  {
    path: "/catalog/:itemID",
    element: <ItemPage />,
    children: [
      {
        path: "/catalog/:itemID/description",
        element: <Decription />,
      },
      {
        path: "/catalog/:itemID/characteristics",
        element: <Characteristics />,
      },
    ],
  },
  {
    path: "/basket",
    element: <WholesaleOrderPage />,
  },
  {
    path: "/greeting",
    element: <ConfirmationPage />,
  },
  {
    path: "/wholesale",
    element: <OptPage />,
  },
  {
    path: "/clientinformation",
    element: <AskQuestions />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
