import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import store from "../../redux/store/store";
import {
  actionAddFilter,
  actionResetFilters,
} from "../../redux/actions/ActionFilters";
import SampleNextArrow from "./SliderArrow/Next";
import SamplePrevArrow from "./SliderArrow/Prev";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 300,
  cssEase: "linear",
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const SliderFirstSlide = ({ airis, elf, ElfBar }) => {
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>
        <Link
          to={"/catalog"}
          onClick={() => {
            store.dispatch(actionResetFilters());
            elf.length===0?store.dispatch(actionAddFilter("modes", elf[0])):store.dispatch(actionAddFilter("brands", ElfBar[0]))
            
          }}
          className="oneSlide"
        ></Link>
        <Link
          to={"/catalog"}
          onClick={() => {
            store.dispatch(actionResetFilters());
            store.dispatch(actionAddFilter("brands", airis[0]));
          }}
          className="twoSlide"
        ></Link>
        <Link
          to={"https://t.me/VnP_ua"}
          onClick={() => {
            store.dispatch(actionResetFilters());
          }}
          className="threeSlide"
        ></Link>
      </Slider>
    </div>
  );
};

export default SliderFirstSlide;
