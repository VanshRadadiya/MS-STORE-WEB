import React, { useEffect, useRef } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './MainSlider.css';
import { Container } from 'react-bootstrap';

function MainSlider() {
  const options = {
    margin: 10,
    loop: true,
    autoWidth: false,
    items: 4,
    merge: true,
    mergeFit: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        stagePadding: 80,
        items: 3,
      },
      1000: {
        items: 5,
        stagePadding: 80,
      },
    },
  };

  const sliderData = [
    { img: require('./img/img1.jpg'), title: 'Microshoft 365', txt: 'Apps tp manage everyday' },
    { img: require('./img/img2.jpg'), title: 'Best entertainment app ', txt: 'Enjoy it...' },
    { img: require('./img/img3.jpg'), title: 'Best selling games ', txt: 'Download now...' },
    { img: require('./img/img4.jpg'), title: 'draw anytime anywhere..', txt: 'Download now...' },
    { img: require('./img/img5.jpg'), title: 'draw anytime anywhere..', txt: 'Download now...' },
    { img: require('./img/img6.jpg'), title: 'Best entertainment app ', txt: 'Enjoy it...' },
    { img: require('./img/img7.jpg'), title: 'Best entertainment app ', txt: 'Enjoy it...' },
    { img: require('./img/img8.jpg'), title: 'Best entertainment app ', txt: 'Enjoy it...' },
    { img: require('./img/img9.jpg'), title: 'Best entertainment app ', txt: 'Enjoy it...' },
    { img: require('./img/img10.jpg'), title: 'Best entertainment app ', txt: 'Enjoy it...' },
  ];


  return (
    <div className='py-5 pb-0 data-container '>
      <OwlCarousel className="owl-theme banner rounded-3  " autoplay autoplayTimeout={3000} {...options} id="banner" dots={false} nav>
        {sliderData.map((item, index) => (
          <div className="item rounded-3 overflow-hidden position-relative" key={index} data-merge={3} >
            <img src={item.img} />
            <div className="banner-text position-absolute top-50 left-0 text-white p-3" >
              <h3 style={{ whiteSpace: 'wrap', width: '75%' }}>{item.title}</h3>
              <p>{item.txt}</p>
            <button class="shadow__btn">
              Get
            </button>
            </div>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default MainSlider;
