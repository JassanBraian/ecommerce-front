import React from 'react';
import { Carousel } from 'react-bootstrap';
import argSport from "../../../assets/img/arg-sport.webp"
import rojoSport from "../../../assets/img/rojo-sport.webp"
import azulSport from "../../../assets/img/azul-sport.webp"
import "../../../css/common/header/BootsrtapCarousel.css"
import '../../../css/common/header/BootsrtapCarousel.css'

export default function BootstrapCarousel() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="heroimg"
            src={argSport}

            alt="First slide"
            height={100}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="heroimg"

            src={rojoSport}
            alt="Second slide"
          />


        </Carousel.Item>
        <Carousel.Item>
          <img
            className="heroimg"
            src={azulSport}

            alt="Third slide"
          />


        </Carousel.Item>
      </Carousel>
    </>
  )
}
// export default SimpleSlider;
// export default class SimpleSlider extends Component {
//   render() {
// }