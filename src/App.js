import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import ErrorPage from "./pages/errorPage/ErrorPage";
import Catalog from "./pages/catalog/Catalog";
import WholesaleOrderPage from "./pages/WholesaleOrderPage/WholesaleOrderPage";
import ConfirmationPage from "./pages/confirmationPage/ConfirmationPage";
import OptPage from "./pages/optPage/OptPage";
import AskQuestions from "./pages/informationPage/AskQuestions";
import ItemPage from "./pages/itemPage/ItemPage";
import Description from "./pages/informationPage/Decription";
import Characteristics from "./pages/informationPage/Characteristics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} errorElement={<ErrorPage />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/device/:deviceId" element={<ItemPage />}>
        <Route path="/device/:deviceId/description" element={<Description />} />
        <Route
          path="/device/:deviceId/characteristics"
          element={<Characteristics />}
        />
      </Route>
      <Route path="/basket" element={<WholesaleOrderPage />} />
      <Route path="/greeting" element={<ConfirmationPage />} />
      <Route path="/wholesale" element={<OptPage />} />
      <Route path="/clientinformation" element={<AskQuestions />} />
    </Routes>
  );
}

export default App;
