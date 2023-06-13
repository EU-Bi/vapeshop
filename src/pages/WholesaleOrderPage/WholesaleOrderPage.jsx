import React, { useEffect } from "react";
import "./WholesaleOrderPage.scss";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Telephone from "../../components/telephone/Telephone";
import MainWholesale from "./MainWholesale";

const WholesaleOrderPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="backgroundCatalog">
      <Header />
      <MainWholesale />
      <Footer />
      <Telephone />
    </div>
  );
};

export default WholesaleOrderPage;
