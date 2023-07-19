import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Telephone from "../../components/telephone/Telephone";
import MainItemPage from "./MainItemPage";
import InfoItem from "./InfoItem";
import YouLikeThis from "./YouLikeThis";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";

const ItemPage = ({ allDevices }) => {
  const location = useLocation();
  const device = location.state;
  const similarDevices = allDevices.filter(
    (dev) => dev.currentDevice === device.currentDevice
  );
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="backgroundCatalog">
      <Header />
      <MainItemPage device={device} similarDevices={similarDevices} />
      <InfoItem device={device} />
      <YouLikeThis similarDevices={similarDevices}/>
      <Footer />
      <Telephone />
    </div>
  );
};

export default connect((state) => ({ allDevices: state.items.devices }))(
  ItemPage
);
