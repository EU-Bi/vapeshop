import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "./SliderArrow/Next";
import SamplePrevArrow from "./SliderArrow/Prev";
import { connect } from "react-redux";
import SmallCard from "../../components/CardProduct/SmallCard/SmallCard";
import { useMediaQuery } from "react-responsive";

const SliderCustom = ({ devicesSlider }) => {
  const isDesKtop = useMediaQuery({ minWidth: "1280px" });
  const isTablet = useMediaQuery({ minWidth: "768px", maxWidth: "1279px" });
  const isMobile = useMediaQuery({ maxWidth: "767px" });
  let settings;
  if (isTablet) {
    settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
  }
  if (isMobile) {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
  }
  if (isDesKtop) {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
  }

  return (
    <Slider {...settings}>
      {devicesSlider.map((item) => (
        <SmallCard key={item.id} device={item} />
      ))}
    </Slider>
  );
};

export default connect((state) => ({
  devicesSlider: !state.items.firstDevices
    ? []
    : state.items.firstDevices.slice(0, 8),
}))(SliderCustom);
