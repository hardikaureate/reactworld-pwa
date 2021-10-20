



import React, { Component } from "react";
import Slider from "react-slick";

export default class ImageSlider extends Component {
  render() {
    const barsettings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...barsettings}>
          <div>
            <img src="https://f.shgcdn.com/79419303-414d-42c1-b91a-330e733618b9/" />
          </div>
          <div>
            <img src="https://f.shgcdn.com/1a61ee7f-e0ee-4cd5-8d6c-a2e4897f495c/" />
          </div>
          <div>
            <img src="https://f.shgcdn.com/b27c96b9-d833-4804-b293-ebfac3382a13/" />
          </div>
          <div>
            <img src="https://f.shgcdn.com/3f093412-b408-4c96-b954-733655dbd2d5/" />
          </div>
        </Slider>
      </div>
    );
  }
}