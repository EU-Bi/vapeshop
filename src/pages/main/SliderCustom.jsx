import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "./SliderArrow/Next";
import SamplePrevArrow from "./SliderArrow/Prev";
import { connect } from "react-redux";
import SmallCard from "../../components/CardProduct/SmallCard/SmallCard";

const SliderCustom = ({ devicesSlider }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <Slider {...settings}>
      {devicesSlider.map((item) => (
        <SmallCard key={item.id} device={item} />
      ))}
    </Slider>
  );
};

export default connect((state) => ({
  devicesSlider: !state.items.firstDevices.rows
    ? []
    : state.items.firstDevices.rows,
}))(SliderCustom);
