import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgOne from "./carousel-img/1.jpg"
import imgTwo from "./carousel-img/2.jpg"
import imgThree from "./carousel-img/3.png"
import "./home.css"
function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
      <img src={imgOne} alt='Error' className='img-fluid'/>
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imgTwo} alt='Error' className='img-fluid'/>
        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={imgThree} alt='Error' className='img-fluid'/>
        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;