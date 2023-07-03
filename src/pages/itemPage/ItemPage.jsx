import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Telephone from "../../components/telephone/Telephone";
import MainItemPage from "./MainItemPage";
import InfoItem from "./InfoItem";
import YouLikeThis from "./YouLikeThis";
import { useLocation } from "react-router-dom";

const ItemPage = () => {
  const location = useLocation();
  const device = location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="backgroundCatalog">
      <Header />
      <MainItemPage device={device} />
      <InfoItem device={device} />
      <YouLikeThis />
      <Footer />
      <Telephone />
    </div>
  );
};

export default ItemPage;
