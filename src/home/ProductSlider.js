import product from "./img/banner.png"
import React from "react";
import Slider from "react-slick";
import "./productslider.css"
export default function TeamSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      };
  return (
 <div className="slider-container px-5">
     <div className="mt-5  justify-content-center align-items-center d-flex text-center">
        <div>
            <h5>Good Offer</h5>
            <h3>Up To 80%</h3>
        </div>
    </div>
    <Slider {...settings}>
      <div >
        <h3>
          <div className="team-card" style={{backgroundImage:`url(${product})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    {/* <h3>
                        Coach One
                    </h3> */}
                    {/* <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p> */}
                    <button>
                        20000 EGP
                    </button>
                </div>
          </div>
        </h3>
      </div>
      <div>
      <h3>
      <div className="team-card" style={{backgroundImage:`url(${product})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    {/* <h3>
                        Coach One
                    </h3> */}
                    {/* <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p> */}
                    <button>
                        20000 EGP
                    </button>
                </div>
          </div>
        </h3>
      </div>
      <div>
      <h3>
      <div className="team-card" style={{backgroundImage:`url(${product})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    {/* <h3>
                        Coach One
                    </h3> */}
                    {/* <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p> */}
                    <button>
                        20000 EGP
                    </button>
                </div>
          </div>
        </h3>
      </div>
      <div>
      <h3>
      <div className="team-card" style={{backgroundImage:`url(${product})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    {/* <h3>
                        Coach One
                    </h3> */}
                    {/* <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p> */}
                    <button>
                        20000 EGP
                    </button>
                </div>
          </div>
        </h3>
      </div>
      <div>
      <h3>
      <div className="team-card" style={{backgroundImage:`url(${product})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    {/* <h3>
                        Coach One
                    </h3> */}
                    {/* <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p> */}
                    <button>
                       20000 EGP
                    </button>
                </div>
          </div>
        </h3>
      </div>
      <div>
      <h3>
      <div className="team-card" style={{backgroundImage:`url(${product})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    {/* <h3>
                        Coach One
                    </h3> */}
                    {/* <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p> */}
                    <button>
                        20000 EGP
                    </button>
                </div>
          </div>
        </h3>
      </div>
    </Slider>
    </div>
  );
}