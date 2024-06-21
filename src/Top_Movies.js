import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa6";
import { IoIosSearch, IoMdStar } from "react-icons/io";

const movie_sell = [{ "image": require('./images/movie-1.jpg'), "name": "Madame Web", "year": "2024", "price": "Start at $19.99" },
{ "image": require('./images/movie-2.jpg'), "name": "The Beekeeper", "year": "2024", "price": "Start at $5.99" },
{ "image": require('./images/movie-3.jpg'), "name": "Wonka", "year": "2024", "price": "Start at $5.99" },
{ "image": require('./images/movie-4.jpg'), "name": "Argylle", "year": "2024", "price": "Start at $19.99" },
{ "image": require('./images/movie-5.jpg'), "name": "Paranormal Activity 8-Movie Collection", "year": "2022", "dic": "56%" },
{ "image": require('./images/movie-6.jpg'), "name": "Migration", "year": "2023", "price": "Start at $5.99" }]

const Tv_sell = [{ "image": require('./images/Tv-1.jpg'), "name": "South Park", "ses": "26 seasons", "show": "Animation" },
{ "image": require('./images/Tv-2.jpg'), "name": "The Challenge", "ses": "26 seasons", "show": "Reality TV" },
{ "image": require('./images/Tv-3.jpg'), "name": "The Walking Dead: The Ones Who Live", "ses": "1 seasons", "show": "Other" },
{ "image": require('./images/Tv-4.jpg'), "name": "One Piece", "ses": "86 seasons", "show": "Animation" },
{ "image": require('./images/Tv-5.jpg'), "name": "Yellowstone", "ses": "5 seasons", "show": "Drama" },
{ "image": require('./images/Tv-6.jpg'), "name": "Family Guy", "ses": "21 seasons", "show": "Animation" }]
function Top_Movies() {
  return (
    <div>
      <div className='data-container'>
        <Row xs={1} lg={2}>
          <Col className='px-md-1 px-lg-4 text-light'>
            <div className='selling sm-mb-2 md-mb-0' style={{ backgroundColor: "#1C1C1C", borderRadius: "10px" }}>
              <Row>
                <Col>
                  <div className='heading ms-3 mb-3 mt-5' >
                    <p className='text-light mb-0 fw-bold' style={{ fontSize: "20px" }}>Top-Selling Movies <FaAngleRight style={{ color: "#60cdff" }}></FaAngleRight></p>
                  </div>
                </Col>
                <hr className='d-none d-md-block'></hr>
              </Row>
              <div className='ms-2 p-1 p-lg-2 mb-5 mb-lg-2'>
                {
                  movie_sell.map((item) => {
                    return (
                      <div className="d-flex mb-4 s_box" style={{ borderRadius: "6px" }}>
                        <div style={{ borderRadius: "6px" }} className='img_box'>
                          <img src={item.image} height={"100%"} width={"100%"} style={{ borderRadius: "6px" }}></img>
                        </div>
                        <div style={{ margin: "0px 0px 10px 16px" }} className='d-flex flex-column justify-content-between'>
                          <div >
                            <p style={{ fontWeight: "600" }} className='m-0'>{item.name}</p>
                            <span style={{ color: "rgba(255, 255, 255, 0.725)" }}>{item.year}</span>
                          </div>
                          <div>
                            {
                              item.dic ? <div style={{ fontSize: "13px" }}>
                                <span style={{ padding: "3px 8px 3px 5px", backgroundColor: "#FCE100", color: "black", borderTopLeftRadius: "6px", borderBottomLeftRadius: "6px" }}>-56%</span>
                                <span style={{ padding: "3px 5px 3px 5px", borderTopRightRadius: "6px", borderBottomRightRadius: "6px", backgroundColor: "black" }}><strike style={{ color: "rgba(255, 255, 255, 0.725)" }}>$44.99</strike> $19.99</span>
                              </div> :
                                <span className='rounded' style={{ padding: "3px 4px", backgroundColor: "black" }}>{item.price}</span>
                            }
                          </div>
                        </div>
                      </div>
                    )

                  })
                }
              </div>

            </div>
          </Col>
          <Col className='px-md-1 px-lg-3 text-light'>
            <div className='selling' style={{ backgroundColor: "#1C1C1C", borderRadius: "10px" }}>
            <Row>
                <Col>
                  <div className='heading ms-3 mb-3 mt-5' >
                    <p className='text-light mb-0 fw-bold' style={{ fontSize: "20px" }}>Top-Selling TV shows <FaAngleRight style={{ color: "#60cdff" }}></FaAngleRight></p>
                  </div>
                </Col>
                <hr className='d-none d-md-block'></hr>
              </Row>
              <div className='ms-2 p-1 p-lg-2'>
                {
                  Tv_sell.map((item) => {
                    return (
                      <div className="d-flex mb-4 s_box" style={{ borderRadius: "6px" }}>
                        <div style={{ borderRadius: "6px" }} className='img_box'>
                          <img src={item.image} height={"75%"} width={"100%"} style={{ borderRadius: "6px" }}></img>
                        </div>
                        <div style={{ margin: "0px 0px 10px 16px" }} className='d-flex flex-column justify-content-between'>
                          <div >
                            <p style={{ fontWeight: "600" }} className='m-0 text-wrap'>{item.name}</p>
                            <div>
                              <span style={{ color: "rgba(255, 255, 255, 0.725)" }}>{item.ses}</span>
                              <span style={{ color: "#36363B" }} className='px-1'>|</span>
                              <span style={{ color: "rgba(255, 255, 255, 0.725)" }}>{item.show}</span>
                            </div>
                          </div>
                          <div>
                            <span className='rounded' style={{ padding: "3px 4px", backgroundColor: "black" }}>Stream</span>
                          </div>
                        </div>
                      </div>
                    )

                  })
                }
              </div>

            </div>
          </Col>
        </Row>

      </div>

    </div>
  )
}

export default Top_Movies
