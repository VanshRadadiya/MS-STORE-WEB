import React from 'react'
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { IoMdStar } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";


var games = [
    {images:require("./images/games-1.jpeg"),head:"Shop Titans",rate:"4.5",price:"Free"},
    {images:require("./images/games-2.jpeg"),head:"Dungeons 4 Demo (Win)",rate:"--",price:"Free"},
    {images:require("./images/games-3.jpeg"),head:"Starfield",rate:"3.1",price:"Included"},
    {images:require("./images/games-4.jpeg"),head:"Roger That: Merge Adventure Games!",rate:"4.3",price:"Free"},
    {images:require("./images/games-5.jpeg"),head:"SteamWorld Build",rate:"4.4",price:"Included"},
    {images:require("./images/games-6.jpeg"),head:"Zgirls3",rate:"4.4",price:"Free"},
    {images:require("./images/games-7.jpeg"),head:"Game of Thrones Winter is Coming",rate:"4.3",price:"Free"},
    {images:require("./images/games-8.jpeg"),head:"Jusant",rate:"4.4",price:"Included"},
    {images:require("./images/games-9.jpeg"),head:"Jump Ball Quest",rate:"3.8",price:"Free"},
    {images:require("./images/games-10.jpeg"),head:"Forza Motorsport Premium Edition",rate:"3.0",price:"$79.99"},
    {images:require("./images/games-11.jpeg"),head:"Cities: Skylines II - PC Edition",rate:"3.3",price:"Included"},
    {images:require("./images/games-12.jpeg"),head:"Klondike Adventures",rate:"4.0",price:"Free"},
    {images:require("./images/games-13.jpeg"),head:"SHARK! SHARK!",rate:"--",price:"$14.99"},
    {images:require("./images/games-14.jpeg"),head:"Merge Future",rate:"4.6",price:"Free"},
    {images:require("./images/games-15.jpeg"),head:"Township",rate:"4.6",price:"Free"},
    {images:require("./images/games-16.jpeg"),head:"Frontline 1942: World War 2 Online Shooter",rate:"4.0",price:"Free"},
    {images:require("./images/games-17.jpeg"),head:"Magic Jigsaw Puzzles – Puzzle game HD",rate:"4.7",price:"Free"},
    {images:require("./images/games-18.jpeg"),head:"Football Manager 2024 Console",rate:"3.9",price:"Included"},
    {images:require("./images/games-19.jpeg"),head:"Cocoon",rate:"4.5",price:"Included"},
    {images:require("./images/games-20.jpeg"),head:"ASTROSMASH",rate:"--",price:"$14.99"},
    {images:require("./images/games-21.png"),head:"Slots Treasure Dragon - Casino Games",rate:"4.4",price:"Free"},
    {images:require("./images/games-22.jpeg"),head:"Lies of P Digital Deluxe Edition",rate:"4.1",price:"$55.99"},
    {images:require("./images/games-23.jpeg"),head:"DYNABLASTER",rate:"--",price:"$19.99"},
    {images:require("./images/games-24.jpeg"),head:"Sea of Stars",rate:"4.5",price:"Included"},
    {images:require("./images/games-25.jpeg"),head:"Caesars Slots - Casino Slots Games",rate:"3.9",price:"Free"},
    {images:require("./images/games-26.jpeg"),head:"Call of the Wild: The Angler™",rate:"3.2",price:"Included"},
    {images:require("./images/games-27.jpeg"),head:"Top Eleven 2024 - Be a Soccer Manager",rate:"4.3",price:"Free"},
    {images:require("./images/games-28.jpeg"),head:"Sea of Thieves: 2024 Edition",rate:"4.0",price:"Included"},
    {images:require("./images/games-29.jpeg"),head:"Forza Horizon 5 Standard Edition",rate:"4.2",price:"Included"},
    {images:require("./images/games-30.jpeg"),head:"Cradle of Empires: Match 3 Logic Games & City Building",rate:"4.4",price:"Free"},
    {images:require("./images/games-31.jpeg"),head:"Evony: The King's Return",rate:"3.8",price:"Free"},
    {images:require("./images/games-32.png"),head:"Microsoft Flight Simulator Premium Deluxe 40th Anniversary Edition",rate:"3.0",price:"$95.99"},
    {images:require("./images/games-33.jpeg"),head:"SCARF",rate:"5.0",price:"$14.99"},
    {images:require("./images/games-34.jpeg"),head:"Exoprimal",rate:"3.0",price:"Included"},
    {images:require("./images/games-35.jpeg"),head:"Infinity Kingdom",rate:"4.3",price:"Free"},
    {images:require("./images/games-36.jpeg"),head:"Dead by Daylight Windows",rate:"4.0",price:"$11.99",strike:"$19.99",discount:"-40%"},
    {images:require("./images/games-37.jpeg"),head:"Destiny of Armor",rate:"4.1",price:"Free"},
    {images:require("./images/games-38.png"),head:"Aquuua Casino - Slots Machine Games",rate:"4.1",price:"Free"},
    {images:require("./images/games-39.jpeg"),head:"Planet of Lana",rate:"4.6",price:"Included"},
    {images:require("./images/games-40.jpeg"),head:"Age of Wonders: Planetfall",rate:"3.3",price:"$49.99"},
    {images:require("./images/games-41.jpeg"),head:"Cities: Skylines - Hotels & Retreats Bundle",rate:"1.0",price:"$26.99"},
    {images:require("./images/games-42.jpeg"),head:"Amnesia: The Bunker",rate:"4.2",price:"Included"},
    {images:require("./images/games-43.jpeg"),head:"Raid: Shadow Legends",rate:"4.2",price:"Free"},
    {images:require("./images/games-44.jpeg"),head:"Happy Clinic",rate:"4.1",price:"Free"},
    {images:require("./images/games-45.jpeg"),head:"The Qin Empire: International",rate:"3.6",price:"Free"},
    {images:require("./images/games-46.jpeg"),head:"Dungeon Knight Idle",rate:"3.6",price:"Free"},
    {images:require("./images/games-47.jpeg"),head:"World of Warships",rate:"4.2",price:"Free"},
    {images:require("./images/games-48.jpeg"),head:"Disney Speedstorm",rate:"4.2",price:"Free"},
    {images:require("./images/games-49.jpeg"),head:"Minecraft Legends Deluxe Edition",rate:"3.9",price:"$49.99"},
    {images:require("./images/games-50.jpeg"),head:"Mahjong King",rate:"4.8",price:"Free"},
    {images:require("./images/games-51.jpeg"),head:"Mahjong Match Puzzle",rate:"4.5",price:"Free"},
    {images:require("./images/games-52.jpeg"),head:"Destiny 2: Lightfall (PC)",rate:"2.8",price:"Free"},
    {images:require("./images/games-53.jpeg"),head:"Halo Infinite",rate:"4.0",price:"Free"},
    {images:require("./images/games-54.jpeg"),head:"Cyber Burger: Cooking Restaurant",rate:"2.3",price:"Free"},
    {images:require("./images/games-55.jpeg"),head:"Jewels of Rome: Match-3 and City Building Game!",rate:"4.3",price:"Free"},
    {images:require("./images/games-56.jpeg"),head:"Candy Crush Saga",rate:"4.2",price:"Free"},
    {images:require("./images/games-57.jpeg"),head:"Dragon City",rate:"4.6",price:"Free"},
    {images:require("./images/games-58.jpeg"),head:"Goodgame Empire",rate:"3.6",price:"Free"},
    {images:require("./images/games-59.jpeg"),head:"Disney Dreamlight Valley",rate:"4.4",price:"Included"},
]
function Games() {
  return (
    <div>
      <div className='py-3 mb-3'>
        <div className='data-container'>
          <Row>
            <Col>
              <div className='heading'>
                <p className='text-light mb-0 fw-bold' style={{ fontSize: "20px" }}>New & Notable PC games <FaAngleRight style={{ color: "#60cdff" }}></FaAngleRight></p>
              </div>
            </Col>
          </Row>
          <OwlCarousel autoplay autoplayTimeout={2500}
            className="owl-theme"
            id='games'
            margin={14}
            nav
            items={6}
            dots={false}
            responsive={{
              0: {
                items: 1
              },
              300: {
                items: 1,
              },
              800: {
                items: 3,
              },  
              1000:{
                items:4,
              },
              1200: {
                items: 6,
              }
            }}
          >
            {
              games.map((item) => {
                return (
                  <>
                    <div className='item game-item position-relative mt-2' style={{ borderRadius: "10px", height: "410px", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden" }}>
                      <div className=''>
                        <img src={item.images} style={{ height: "300px", borderRadius: "10px 10px 0 0 " }}></img>
                      </div>

                      <div className='blur position-absolute' style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url(${item.images})`, height: "110px", backgroundPosition: "center bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat", bottom: "3%", borderRadius: "0 0 10px 10px" }}>
                      </div>

                      <div className='game-content' style={{width:"100%",display: "flex",flexDirection: "column", justifyContent: "space-between",height:"100px"}}>
                        <p style={{ fontSize: "14px" }} className='head'>{item.head}</p>
                        <div className='d-flex game-content-bottom justify-content-between align-items-center'>
                          <h7>{item.rate} <IoMdStar className='mb-1'/></h7>
                          <div>
                          {item.strike && item.discount ? (
                            <div className='d-flex align-items-center'>
                              <p style={{backgroundColor: "#FCE100",padding:'2px 5px',color:"black",borderRadius:"5px 0px 0px 5px"}}>{item.discount}</p>
                              <p style={{backgroundColor: "rgba(0,0,0,0.5)",padding:'2px 10px',borderRadius:"0px 5px 5px 0px"}}><strike>{item.strike}</strike> {item.price}</p>
                            </div>
                          ) : (
                            <p style={{backgroundColor: "rgba(0,0,0,0.5)",padding:'2px 10px',borderRadius:"5px"}}>{item.price}</p>
                          )}

                          </div>

                        </div>
                      </div >


                    </div>
                  </>
                )
              })
            }
          </OwlCarousel>
        </div>
      </div >
    </div>
  )
}

export default Games;
