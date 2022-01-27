/* eslint-disable no-unused-vars */
import "./Slides.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sliders } from "../../db/data";

const Slides = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="slider_section">
      <Slider className="slick-slider" {...settings}>
        {sliders.map((slide) => (
          <div className="item" key={slide.id}>
            <img
              className="desktop_slider"
              src={slide.image_desk}
              alt=""
            />
            <img
              className="mobi_slider"
              src={slide.image_mobi}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slides;
