import React, { useState } from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";

const Residencies = () => {
  const [progress, setProgress] = useState('begin');
  const [activeIndex, setActiveIndex] = useState();

  const onChange = (index) => {
    setActiveIndex(index.activeIndex);
  }

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices </span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}  onActiveIndexChange={onChange} >
          <SlideNextButton activeIndex={activeIndex} />
          {/* slider */}
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <a href="/residencies">
                <div className="flexColStart r-card">
                  <img src={card.image} alt="home" />

                  <span className="secondaryText r-price">
                    <span style={{ color: "orange" }}>₱</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = ({ activeIndex }) => {
  const swiper = useSwiper();
  return (
    <div className="flex absolute right-0 -top-24">
      <button onClick={() => swiper.slidePrev()}
       className="transition-all mr-2 text-blue-600 py-2 px-4 rounded-lg active:bg-blue-100 bg-blue-50 disabled:bg-slate-50 disabled:text-slate-300" disabled={activeIndex === 0}>
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()}
       className="transition-all text-blue-600 py-2 px-4 rounded-lg active:bg-blue-100 bg-blue-50 disabled:bg-slate-50 disabled:text-slate-300" disabled={activeIndex === 2}>
        &gt;
      </button>
    </div>
  );
};
