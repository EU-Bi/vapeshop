import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MainOptPage from "./MainOptPage";
import Telephone from "../../components/telephone/Telephone";

const OptPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="backgroundCatalog">
      <Header />
      <MainOptPage/>
      <Footer />
      <Telephone/>
    </div>
  );
};

export default OptPage;
