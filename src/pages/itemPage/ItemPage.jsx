import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Telephone from "../../components/telephone/Telephone";
import MainItemPage from "./MainItemPage";
import InfoItem from "./InfoItem";
import YouLikeThis from "./YouLikeThis";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const ItemPage = () => {
  const location = useLocation();
  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });
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
