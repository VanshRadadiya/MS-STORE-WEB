import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { MdStar } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import vi1 from './images/movies-1.jpg';
import vi2 from './images/movies-2.jpg';
import vi3 from './images/movies-3.jpg';
import vi4 from './images/movies-4.jpg';
import vi5 from './images/movies-5.jpg';
import vi6 from './images/movies-6.jpg';
import vi7 from './images/movies-7.jpg';
import vi8 from './images/movies-8.jpg';
import vi9 from './images/movies-9.jpg';
import vi10 from './images/movies-10.jpg';
import vi11 from './images/movies-11.jpg';
import vi12 from './images/movies-12.jpg';
import vi13 from './images/movies-13.jpg';
import vi14 from './images/movies-14.jpg';
import vi15 from './images/movies-15.jpg';
import vi16 from './images/movies-16.jpg';
import vi17 from './images/movies-17.jpg';
import vi18 from './images/movies-18.jpg';
import vi19 from './images/movies-19.jpg';
import vi20 from './images/movies-20.jpg';
import vi21 from './images/movies-21.jpg';
import vi22 from './images/movies-22.jpg';
import vi23 from './images/movies-23.jpg';
import vi24 from './images/movies-24.jpg';
import vi25 from './images/movies-25.jpg';
import vi26 from './images/movies-26.jpg';

import vi27 from './images/movies-27.jpg';
import vi28 from './images/movies-28.jpg';
import vi29 from './images/movies-29.jpg';
import vi30 from './images/movies-30.jpg';
import vi31 from './images/movies-31.jpg';
import vi32 from './images/movies-32.jpg';
import vi33 from './images/movies-33.jpg';
import vi34 from './images/movies-34.jpg';
import vi35 from './images/movies-35.jpg';
import vi36 from './images/movies-36.jpg';
import vi37 from './images/movies-37.jpg';
import vi38 from './images/movies-38.jpg';
import vi39 from './images/movies-39.jpg';
import vi40 from './images/movies-40.jpg';
import vi41 from './images/movies-41.jpg';
import vi42 from './images/movies-42.jpg';
import vi43 from './images/movies-43.jpg';
import vi44 from './images/movies-44.jpg';
import vi45 from './images/movies-45.jpg';
import vi46 from './images/movies-46.jpg';
import vi47 from './images/movies-47.jpg';
import vi48 from './images/movies-48.jpg';
import vi49 from './images/movies-49.jpg';
import vi50 from './images/movies-50.jpg';
import vi51 from './images/movies-51.jpg';
import vi52 from './images/movies-52.jpg';



export default function Top_Selling() {
    return (
        <div>
            <div className='py-5 data-container'>
                <OwlCarousel className='owl-theme ' id='top-selling' dots={false} loop={ true } autoplay autoplayTimeout={3000} nav items={3} margin={50} responsive={{ 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 }, 2000: { items: 4 } }} >

                    <div className='' style={{ color: 'white', width: '100%' }}>
                        <div className='card-main p-4 rounded-3'>
                            <p>TOP-SELLING MOVIES</p>
                            <h5 className='pb-2' style={{ fontSize: '19px' }}>Experience the adrenaline rush</h5>
                            <div className='d-flex movie-card justify-content-center w-100 '>
                                <div className='movie-card0 animation m-0'>
                                    <div class="box tall-box"><img src={vi27}></img></div>
                                    <div class="box tall-box"><img src={vi28}></img></div>
                                    <div class="box tall-box"><img src={vi29}></img></div>
                                    <div class="box tall-box"><img src={vi30}></img></div>
                                    <div class="box tall-box"><img src={vi31}></img></div>
                                    <div class="box tall-box"><img src={vi32}></img></div>
                                    <div class="box tall-box"><img src={vi33}></img></div>
                                    <div class="box tall-box"><img src={vi34}></img></div>
                                    <div class="box tall-box"><img src={vi35}></img></div>
                                    <div class="box tall-box"><img src={vi36}></img></div>
                                    <div class="box tall-box"><img src={vi37}></img></div>
                                    <div class="box tall-box"><img src={vi38}></img></div>
                                    <div class="box tall-box"><img src={vi39}></img></div>
                                    <div class="box tall-box"><img src={vi40}></img></div>
                                    <div class="box tall-box"><img src={vi41}></img></div>
                                    <div class="box tall-box"><img src={vi42}></img></div>
                                    <div class="box tall-box"><img src={vi43}></img></div>
                                    <div class="box tall-box"><img src={vi44}></img></div>
                                    <div class="box tall-box"><img src={vi45}></img></div>
                                    <div class="box tall-box"><img src={vi46}></img></div>
                                    <div class="box tall-box"><img src={vi47}></img></div>
                                    <div class="box tall-box"><img src={vi48}></img></div>
                                    <div class="box tall-box"><img src={vi49}></img></div>
                                    <div class="box tall-box"><img src={vi50}></img></div>
                                    <div class="box tall-box"><img src={vi51}></img></div>
                                    <div class="box tall-box"><img src={vi52}></img></div>

                                </div>
                                <div className='movie-card1 animation'>
                                    <div class="box tall-box"><img src={vi45}></img></div>
                                    <div class="box tall-box"><img src={vi46}></img></div>
                                    <div class="box tall-box"><img src={vi47}></img></div>
                                    <div class="box tall-box"><img src={vi48}></img></div>
                                    <div class="box tall-box"><img src={vi49}></img></div>
                                    <div class="box tall-box"><img src={vi50}></img></div>
                                    <div class="box tall-box"><img src={vi51}></img></div>
                                    <div class="box tall-box"><img src={vi52}></img></div>
                                    <div class="box tall-box"><img src={vi26}></img></div>
                                    <div class="box tall-box"><img src={vi12}></img></div>
                                    <div class="box tall-box"><img src={vi13}></img></div>
                                    <div class="box tall-box"><img src={vi14}></img></div>
                                    <div class="box tall-box"><img src={vi15}></img></div>
                                    <div class="box tall-box"><img src={vi16}></img></div>
                                    <div class="box tall-box"><img src={vi17}></img></div>
                                </div>
                                <div className='movie-card2 animation'>
                                    <div class="box tall-box"><img src={vi38}></img></div>
                                    <div class="box tall-box"><img src={vi39}></img></div>
                                    <div class="box tall-box"><img src={vi40}></img></div>
                                    <div class="box tall-box"><img src={vi41}></img></div>
                                    <div class="box tall-box"><img src={vi42}></img></div>
                                    <div class="box tall-box"><img src={vi43}></img></div>
                                    <div class="box tall-box"><img src={vi44}></img></div>
                                    <div class="box tall-box"><img src={vi18}></img></div>
                                    <div class="box tall-box"><img src={vi19}></img></div>
                                    <div class="box tall-box"><img src={vi19}></img></div>
                                    <div class="box tall-box"><img src={vi12}></img></div>
                                    <div class="box tall-box"><img src={vi13}></img></div>
                                    <div class="box tall-box"><img src={vi14}></img></div>
                                    <div class="box tall-box"><img src={vi15}></img></div>
                                    <div class="box tall-box"><img src={vi16}></img></div>
                                    <div class="box tall-box"><img src={vi17}></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{ color: 'white' }}>
                        <div className='card-main p-4 rounded-3'>
                            <p>TOP-SELLING MOVIES</p>
                            <h5 className='pb-2'>Movie nights with the kids</h5>
                            <div className='d-flex movie-card mx-auto justify-content-center'>
                                <div className='movie-card0 animation m-0'>
                                    <div class="box tall-box"><img src={vi1}></img></div>
                                    <div class="box tall-box"><img src={vi2}></img></div>
                                    <div class="box tall-box"><img src={vi3}></img></div>
                                    <div class="box tall-box"><img src={vi4}></img></div>
                                    <div class="box tall-box"><img src={vi5}></img></div>
                                    <div class="box tall-box"><img src={vi6}></img></div>
                                    <div class="box tall-box"><img src={vi7}></img></div>
                                    <div class="box tall-box"><img src={vi8}></img></div>
                                    <div class="box tall-box"><img src={vi9}></img></div>
                                    <div class="box tall-box"><img src={vi10}></img></div>
                                    <div class="box tall-box"><img src={vi11}></img></div>
                                    <div class="box tall-box"><img src={vi12}></img></div>
                                    <div class="box tall-box"><img src={vi13}></img></div>
                                    <div class="box tall-box"><img src={vi14}></img></div>
                                    <div class="box tall-box"><img src={vi15}></img></div>
                                    <div class="box tall-box"><img src={vi16}></img></div>
                                    <div class="box tall-box"><img src={vi17}></img></div>
                                    <div class="box tall-box"><img src={vi18}></img></div>
                                    <div class="box tall-box"><img src={vi19}></img></div>
                                    <div class="box tall-box"><img src={vi20}></img></div>
                                    <div class="box tall-box"><img src={vi21}></img></div>
                                    <div class="box tall-box"><img src={vi22}></img></div>
                                    <div class="box tall-box"><img src={vi23}></img></div>
                                    <div class="box tall-box"><img src={vi24}></img></div>
                                    <div class="box tall-box"><img src={vi25}></img></div>
                                    <div class="box tall-box"><img src={vi26}></img></div>

                                </div>
                                <div className='movie-card1 animation'>
                                    <div class="box tall-box"><img src={vi18}></img></div>
                                    <div class="box tall-box"><img src={vi19}></img></div>
                                    <div class="box tall-box"><img src={vi20}></img></div>
                                    <div class="box tall-box"><img src={vi21}></img></div>
                                    <div class="box tall-box"><img src={vi22}></img></div>
                                    <div class="box tall-box"><img src={vi23}></img></div>
                                    <div class="box tall-box"><img src={vi24}></img></div>
                                    <div class="box tall-box"><img src={vi25}></img></div>
                                    <div class="box tall-box"><img src={vi26}></img></div>
                                    <div class="box tall-box"><img src={vi12}></img></div>
                                    <div class="box tall-box"><img src={vi13}></img></div>
                                    <div class="box tall-box"><img src={vi14}></img></div>
                                    <div class="box tall-box"><img src={vi15}></img></div>
                                    <div class="box tall-box"><img src={vi16}></img></div>
                                    <div class="box tall-box"><img src={vi17}></img></div>
                                </div>
                                <div className='movie-card2 animation'>
                                    <div class="box tall-box"><img src={vi10}></img></div>
                                    <div class="box tall-box"><img src={vi11}></img></div>
                                    <div class="box tall-box"><img src={vi12}></img></div>
                                    <div class="box tall-box"><img src={vi13}></img></div>
                                    <div class="box tall-box"><img src={vi14}></img></div>
                                    <div class="box tall-box"><img src={vi15}></img></div>
                                    <div class="box tall-box"><img src={vi16}></img></div>
                                    <div class="box tall-box"><img src={vi17}></img></div>
                                    <div class="box tall-box"><img src={vi18}></img></div>
                                    <div class="box tall-box"><img src={vi19}></img></div>
                                    <div class="box tall-box"><img src={vi19}></img></div>
                                    <div class="box tall-box"><img src={vi20}></img></div>
                                    <div class="box tall-box"><img src={vi21}></img></div>
                                    <div class="box tall-box"><img src={vi22}></img></div>
                                    <div class="box tall-box"><img src={vi23}></img></div>
                                    <div class="box tall-box"><img src={vi24}></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{ color: 'white' }}>
                        <div className='card-main p-4 rounded-3'>
                            <p>TOP-SELLING MOVIES</p>
                            <h5 className='pb-2 mb-4 mb-xxl-0'>The classics and more</h5>
                            <div className='d-flex movie-card mx-auto justify-content-center '>
                                <div className='movie-card0 animation m-0'>
                                    <div class="box tall-box"><img src={vi5}></img></div>
                                    <div class="box tall-box"><img src={vi6}></img></div>
                                    <div class="box tall-box"><img src={vi7}></img></div>
                                    <div class="box tall-box"><img src={vi8}></img></div>
                                    <div class="box tall-box"><img src={vi9}></img></div>
                                    <div class="box tall-box"><img src={vi10}></img></div>
                                    <div class="box tall-box"><img src={vi11}></img></div>
                                    <div class="box tall-box"><img src={vi12}></img></div>
                                    <div class="box tall-box"><img src={vi13}></img></div>
                                    <div class="box tall-box"><img src={vi14}></img></div>
                                    <div class="box tall-box"><img src={vi15}></img></div>
                                    <div class="box tall-box"><img src={vi16}></img></div>
                                </div>
                                <div className='movie-card1 animation'>
                                    <div class="box tall-box"><img src={vi16}></img></div>
                                    <div class="box tall-box"><img src={vi17}></img></div>
                                    <div class="box tall-box"><img src={vi18}></img></div>
                                    <div class="box tall-box"><img src={vi19}></img></div>
                                    <div class="box tall-box"><img src={vi20}></img></div>
                                    <div class="box tall-box"><img src={vi21}></img></div>
                                    <div class="box tall-box"><img src={vi22}></img></div>
                                    <div class="box tall-box"><img src={vi23}></img></div>
                                </div>
                                <div className='movie-card2 animation'>
                                    <div class="box tall-box"><img src={vi46}></img></div>
                                    <div class="box tall-box"><img src={vi47}></img></div>
                                    <div class="box tall-box"><img src={vi48}></img></div>
                                    <div class="box tall-box"><img src={vi49}></img></div>
                                    <div class="box tall-box"><img src={vi50}></img></div>
                                    <div class="box tall-box"><img src={vi51}></img></div>
                                    <div class="box tall-box"><img src={vi52}></img></div>
                                    <div class="box tall-box"><img src={vi51}></img></div>
                                    <div class="box tall-box"><img src={vi52}></img></div>
                                    <div class="box tall-box"><img src={vi26}></img></div>
                                    <div class="box tall-box"><img src={vi12}></img></div>
                                    <div class="box tall-box"><img src={vi13}></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{ color: 'white' }}>
                        <div className='card-main p-4 rounded-3'>
                            <p>TOP-SELLING MOVIES</p>
                            <h5 className='pb-2'>Laugh out loud</h5>
                            <div className='d-flex movie-card mx-auto justify-content-center '>
                                <div className='movie-card0 animation m-0'>
                                    <div class="box tall-box"><img src={vi33}></img></div>
                                    <div class="box tall-box"><img src={vi34}></img></div>
                                    <div class="box tall-box"><img src={vi35}></img></div>
                                    <div class="box tall-box"><img src={vi36}></img></div>
                                    <div class="box tall-box"><img src={vi37}></img></div>
                                    <div class="box tall-box"><img src={vi38}></img></div>
                                    <div class="box tall-box"><img src={vi39}></img></div>
                                    <div class="box tall-box"><img src={vi40}></img></div>
                                    <div class="box tall-box"><img src={vi41}></img></div>
                                </div>
                                <div className='movie-card1 animation'>
                                    <div class="box tall-box"><img src={vi51}></img></div>
                                    <div class="box tall-box"><img src={vi52}></img></div>
                                    <div class="box tall-box"><img src={vi26}></img></div>
                                    <div class="box tall-box"><img src={vi12}></img></div>
                                    <div class="box tall-box"><img src={vi13}></img></div>
                                    <div class="box tall-box"><img src={vi14}></img></div>
                                    <div class="box tall-box"><img src={vi15}></img></div>
                                </div>
                                <div className='movie-card2 animation'>
                                    <div class="box tall-box"><img src={vi19}></img></div>
                                    <div class="box tall-box"><img src={vi30}></img></div>
                                    <div class="box tall-box"><img src={vi31}></img></div>
                                    <div class="box tall-box"><img src={vi32}></img></div>
                                    <div class="box tall-box"><img src={vi33}></img></div>
                                    <div class="box tall-box"><img src={vi34}></img></div>
                                    <div class="box tall-box"><img src={vi35}></img></div>
                                    <div class="box tall-box"><img src={vi36}></img></div>
                                    <div class="box tall-box"><img src={vi37}></img></div>
                                    <div class="box tall-box"><img src={vi38}></img></div>
                                    <div class="box tall-box"><img src={vi39}></img></div>
                                    <div class="box tall-box"><img src={vi40}></img></div>
                                    <div class="box tall-box"><img src={vi41}></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div >
    )
}