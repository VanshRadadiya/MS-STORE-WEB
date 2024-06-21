import React from 'react'
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa6";

var collection = [ 
    {image:require('./images/collection-1.jpeg'),head:"Best entertainment apps",description:"Enjoy hit movies,TV & music-anytime,anywhere"},
    {image:require('./images/collection-2.jpeg'),head:"Featured free games",description:"Explore free fun to play games and find a new favorite"},
    {image:require('./images/collection-3.jpeg'),head:"Racing games",description:"Rev up for high-speed action"},
    {image:require('./images/collection-4.jpeg'),head:"Social networking apps",description:"connect and learn"},
    {image:require('./images/collection-5.jpeg'),head:"Essential apps",description:"Must-have apps for all your devices"},
    {image:require('./images/collection-6.jpeg'),head:"Find your next widget",description:"Widget for everything"},
    {image:require('./images/collection-7.jpeg'),head:"Games for kids",description:"Entertaining funs for little ones"},
    {image:require('./images/collection-8.jpeg'),head:"Puzzle games",description:"Put yopur brainpower to the test"},
    {image:require('./images/collection-9.jpeg'),head:"Windows themes",description:"Customize your desktop with style"},
    {image:require('./images/collection-10.jpeg'),head:"new & Notable PC games",description:"Enjoy this collection of must-have games"},
    {image:require('./images/collection-11.jpeg'),head:"Weekly Deals",description:"Explore Offers"},
    {image:require('./images/collection-12.jpeg'),head:"Personalization apps",description:"Get free themes and customizations apps"},
    {image:require('./images/collection-13.jpeg'),head:"Productivity apps",description:"Achieve more with these great apps"},
    {image:require('./images/collection-14.jpeg'),head:"Getting started",description:"Unleash your new device's power with these apps"},
    {image:require('./images/collection-15.jpeg'),head:"creativity apps",description:"Find apps to follow your inspition"},
    {image:require('./images/collection-16.jpeg'),head:"Build your own world",description:"Craft,harvest and build"},
]
function Collection() {
  return (
    <div>
         <div className='py-5'>
      <div className='data-container'>
        <Row>
          <Col>
            <div className='heading'>
              <p className='text-light mb-0 fw-bold' style={{ fontSize: "20px" }}>Collections <FaAngleRight style={{ color: "#60cdff" }}></FaAngleRight></p>
            </div>
          </Col>
        </Row>
        <OwlCarousel autoplay autoplayTimeout={2500}
          className="owl-theme"
          id='collection'
          margin={14}
          nav
          items={3}
          dots={false}
          responsive={{
            0: {
              items: 1
            },
            700:{
              items:2,
            },
            1200:{
              items:3,
            }
          }}
        >
          {
            collection.map((item) => {
              return (
                <div className="item mt-3" >
                    <div className="collection-item">
                    <img src={item.image}  ></img>
                    <div className='overlay px-4'>
                        <h2 className='mb-0 text-light' style={{ fontSize: "24px" }}>{item.head}</h2>
                        <p className='mb-0 pt-2 text-light'>{item.description}</p>
                    </div>
                    </div>
                    
                </div>
              )
            })
          }
        </OwlCarousel>
      </div>
    </div>
    </div>
  )
}

export default Collection
