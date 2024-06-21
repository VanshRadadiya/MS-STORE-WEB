import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { MdStar } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import './Essential.css';



export default function Essential() {
    var apps = [
        { id: 1, name: "TikTok", rating: "4.2", type: 'Entertainment', rate: 'Free', img: require('./essen-image/1.png') },
        { id: 2, name: "Adobe Acrobat Reader DC", rating: "3.3", type: 'Productivity', rate: 'Free', img: require('./essen-image/2.png') },
        { id: 3, name: "LinkedIn", rating: "3.9", type: 'Social', rate: 'Free', img: require('./essen-image/3.png') },
        { id: 4, name: "Threads, an Instagram app", rating: "4.8", type: 'Social', rate: 'Free', img: require('./essen-image/4.png') },
        { id: 5, name: "BreeZip: RAR & ZIP Extractor", rating: "4.7", type: 'Productivity', rate: 'Free', img: require('./essen-image/5.png') },
        { id: 6, name: "Adobe Photoshop Elements 2024", rating: "4.0", type: 'Photo & Video', rate: 'Free', img: require('./essen-image/6.png') },
        { id: 7, name: "Adobe Photoshop", rating: "3.9", type: 'Photo & Video', rate: 'Free', img: require('./essen-image/7.png') },
        { id: 8, name: "Dolby Access", rating: "4.3", type: 'Entertainment', rate: 'Free', img: require('./essen-image/8.png') },
        { id: 9, name: "Animotica - Movie Maker", rating: "4.0", type: 'Photo & Video ', rate: 'Free', img: require('./essen-image/9.png') },
    ]




    return (
        <div>
           <div>
           <div className='data-container'>
                <div className='essential my-5'>
                    <Row className='d-sm-flex justify-content-between align-items-center text-center'>
                        <Col md='auto' className='fs-5 fw-bold mt-4 '>
                            <div className='esse-left rounded'><a href=''>Essential apps <font style={{ color: '#14EEEE' }} className='fw-bold'><IoIosArrowForward></IoIosArrowForward></font> </a></div>
                        </Col>
                        <Col sm='auto' className='text-center'>
                            <ul className='d-flex justify-content-center  me-md-4 esse-right'>
                                <a href='' className='ms-2 me-3 me-lg-4 mt-5 rounded-pill left-a' style={{ backgroundColor: '#A0D3F7', color: 'black' }}><li >Apps</li></a>
                                <a href='' className='me-4 me-lg-4 mt-5 rounded-pill'><li >Games</li></a>
                                <a href='' className='me-4 me-lg-5 mt-5 rounded-pill'><li >Movies & Tv</li></a>
                            </ul>
                        </Col>
                    </Row>
                    <hr className='mt-2 d-none d-md-block' style={{ color: '#AAABAB', width: '93%' }}></hr>
                    <Row>

                        {apps && apps.map((ele, ind) => {
                            return (
                                <Col xxs sm={12} md={12} lg={6} xl={4} key={ind}>
                                    <div className='div rounded'>
                                        <div className='d-flex align-items-center'>
                                            <div className='d-flex align-items-center me-3'>
                                                <h1 className=''>{ele.id}</h1>
                                                <img src={ele.img} className='rounded'></img>
                                            </div>
                                            <div>
                                                <p className='fw-bolder  mt-4 mb-1' style={{ fontSize: '15px' }}>{ele.name}</p>
                                                <p className='fw-semibold' style={{ color: '#D4D4D4', fontSize: '12px', marginBottom: '10px' }}>{ele.rating} <MdStar></MdStar>| Photo & Video </p>
                                                <p className='free rounded' style={{ fontSize: '12px', marginTop: '' }}>{ele.rate}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>


                </div>
            </div>
           </div>

           


        </div >
    )
}

