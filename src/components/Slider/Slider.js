import React, { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBack";

import "./Slider.css";

function Slider({images}) {
  const [index, setIndex] = useState(0);
  // Manually changing the item/image
  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);
  //automatically sliding images @ interval of 5sec
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <div className="section">
      <div className="section-center">
        {images.map((image, indexImage) => {
          let position = "nextSlide";
          if (indexImage === index) {
            position = "activeSlide";
          }
          if (
            indexImage === index - 1 ||
            (index === 0 && indexImage === images.length - 1)
          ) {
            position = "leftSlide";
          }
          return (
            <article className={position} key={indexImage}>
              <img className="banner-img" src={image} />
            </article>
          );
        })}
        <p className="prev" onClick={() => setIndex(index - 1)}>
          <ArrowBackIosIcon />
        </p>
        <p className="next" onClick={() => setIndex(index + 1)}>
          <ArrowForwardIosIcon />
        </p>
      </div>
    </div>
  );
}

export default Slider;
