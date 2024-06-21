import React from 'react'
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { IoMdStar } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
var music = [
    {image:require("./images/music-1.png"),name:"Spotify Music",rate:"4.2",price:"Free",mid:"m1"},
    {image:require("./images/music-2.png"),name:"iTunes",rate:"2.5",price:"Free",mid:"m2"},
    {image:require("./images/music-3.png"),name:"Apple Music",rate:"3.2",price:"Free",mid:"m3"},
    {image:require("./images/music-4.png"),name:"Amazon Music",rate:"4.6",price:"Free",mid:"m4"},
    {image:require("./images/music-5.png"),name:"Deezer Music",rate:"3.1",price:"Free",mid:"m5"},
    {image:require("./images/music-6.png"),name:"Pandora",rate:"4.3",price:"Free",mid:"m6"},
    {image:require("./images/music-7.png"),name:"SoundCloud - Play Music, Podcasts & New Songs",rate:"4.5",price:"Free",mid:"m7"},
    {image:require("./images/music-8.png"),name:"Tuneln Radio",rate:"3.8",price:"Free",mid:"m8"},
    {image:require("./images/music-9.png"),name:"iHeart: Radio, Music, Podcasts",rate:"3.7",price:"Free",mid:"m9"},
    {image:require("./images/music-10.png"),name:"TIDAL - Music Streaming",rate:"4.3",price:"Free",mid:"m10"},
    {image:require("./images/music-11.png"),name:"Qobuz",rate:"3.3",price:"Free",mid:"m11"},
    {image:require("./images/music-12.png"),name:"FluentCast",rate:"4.8",price:"Free",mid:"m12"},
  ]
function Music() {
  return (
    <div>
         <div className='py-3 mb-5'>
      <div className='data-container'>
        <Row>
          <Col>
            <div className='heading'>
              <p className='text-light mb-0 fw-bold' style={{ fontSize: "20px" }}>Music Streaming apps <FaAngleRight style={{ color: "#60cdff" }}></FaAngleRight></p>
            </div>
          </Col>
        </Row>
        <OwlCarousel autoplay autoplayTimeout={2500}
          className="owl-theme"
          id='music'
          margin={14}
          nav
          items={6}
          dots={false}
          responsive={{
            0: {
              items: 1
            },
            300:{
              items:2,
            },
            500:{
              items:3
            },
            800: {
              items: 4,
            },
            1000: {
              items: 5
            },
            1200:{
              items:6,
            }
          }}
        >
          {
            music.map((item) => {
              return (
                <div className="item music-item mt-3" >
                  <div className='p-4' id={item.mid} style={{ borderRadius: '7px 7px 0px 0px' }}>
                    <img src={item.image} style={{ width: "80px", height: "80px" }} className='mx-auto' />
                  </div>
                  <div className='p-3 music-content'
                    style={{ backgroundColor: "rgba(36,36,40,0.7)", borderRadius: '0 0 7px 7px' }}>

                    <p className='mb-2 fw-bold'
                      style={{ fontSize: '14px', lineHeight: '1.1', height: '20px', color: '#D3D3D9' }}>
                      {item.name}
                    </p>

                    <div className='d-flex justify-content-between pt-4'>
                      <div className='d-flex align-items-center'>
                        <p className='mb-0'
                          style={{ color: '#8e8e9a', fontSize: '12px' }}>
                          {item.rate}
                        </p>
                        <IoMdStar style={{ fontSize: '14px', color: "#8e8e9a", marginLeft: '2px  ' }} />
                      </div>

                      <div>
                        <p className='mb-0 text-light px-2'
                          style={{ fontSize: '12px', backgroundColor: "#1C1C1C", borderRadius: '2px' }}>
                          {item.price}
                        </p>
                      </div>
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

export default Music
