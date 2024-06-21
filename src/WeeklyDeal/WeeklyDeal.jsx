import React from 'react';
import { Container } from 'react-bootstrap';
import { MdArrowForwardIos } from "react-icons/md";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './WeeklyDeal.css';

const WeeklyDeal = () => {
    let data = [
        { id: 1, img: require('./img/img1.jpg'), title: "Gravity Badgers", dtl: 'Step into the space suit of valiant gravity badger Captain T Bayback as he ventures into the deadly depths of deep space to save his friends...' },
        { id: 2, img: require('./img/img2.jpg'), title: "Gravity BadgersSid Meier’s Civilization® VI New ", dtl: 'This content is included in the Anthology Upgrade, please do not purchase this DLC if you already own the Anthology. Continue your...' },
        { id: 3, img: require('./img/img3.jpg'), title: `Sid Meier’s Civilization® VI Anthology`, dtl: 'This bundle contains Civilization VI and all previously-released Civilization VI content*. It is intended for people new to Civilization VI...' },
        { id: 4, img: require('./img/img4.jpg'), title: "Sid Meier’s Civilization® VI Platinum Edition", dtl: 'This bundle is intended for people new to Civilization VI and contains Civilization VI, six DLC packs as well as the Rise and Fall and Gathering...' },
        { id: 5, img: require('./img/img5.jpg'), title: "Kubics (for Windows 10)", dtl: 'Kubics is a platform puzzle game, focused on switching between 2 characters, you It has the control of two players using one of the...' },
        { id: 6, img: require('./img/img6.jpg'), title: "The Fast Journey (for Windows 10)", dtl: 'In "The Fast Journey", embark on an exciting 2D adventure as a brave frog named Rafa. Your beloved frog, Polly, is captured by malevolent...' },
        { id: 7, img: require('./img/img7.jpg'), title: "DARKGEMS (Windows)", dtl: 'DARKGEMS is a cartoony mining rogue-lite game set in the deep gemstone caverns. Journey through three randomly generated map...' }
    ]

    let setting = {
        0: {
            items: 1
        },
        576: {
            items: 2
        },
        992: {
            items: 3
        }
    }
    return (
        <div className='py-5 data-container'>
            <a href="/" className='text-decoration-none text-white lh-1 DealHead p-2 rounded-2 mb-3'><h5 className='m-0'>Weekly Deals <MdArrowForwardIos style={{ color: "#99ebff" }} /></h5></a>
            <OwlCarousel className="owl-theme" id='deals' margin={10} autoplay autoplayTimeout={2500} dots={false} nav responsive={setting}>
                {
                    data ? data.map((ele, ind) => {
                        return (
                            <div className="item" key={ind} >
                                <div className="imgCover position-relative overflow-hidden ">
                                    <h2 className='position-absolute top-0 fw-bolder text-white fs-1 py-2 px-3 itemNumber '>{ele.id}</h2>
                                    <img src={ele.img} className='sliderImg' alt={`Slide ${ind}`} />
                                    <div className="textBox p-3">
                                        <p className=' title text-white mb-2'>{ele.title}</p>
                                        <p className=' m-0 p-0 details'>{ele.dtl}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                        : <h1>Loading</h1>
                }
            </OwlCarousel>
        </div>
    );
};

export default WeeklyDeal;
