import React from 'react'
import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaAngleRight } from "react-icons/fa6";

var movies = [
  { images: require("./images/movies-1.jpg"), head: "The Beekeeper", year: "2024", price: "Start at $5.99" },
  { images: require("./images/movies-2.jpg"), head: "Bob Marley:One Love", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-3.jpg"), head: "The Iron Claw", year: "2023", price: "Start at $4.99" },
  { images: require("./images/movies-4.jpg"), head: "Madame Web", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-5.jpg"), head: "Wonka", year: "2024", price: "Start at $5.99" },
  { images: require("./images/movies-6.jpg"), head: "Argylle", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-7.jpg"), head: "Anyone But You", year: "2023", price: "$9.99", strike: "$19.99", discount: "-50%" },
  { images: require("./images/movies-8.jpg"), head: "Poor Things", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-9.jpg"), head: "Outlaw Posse", year: "2024", price: "Start at $5.99" },
  { images: require("./images/movies-10.jpg"), head: "Please Don't Destroy : The Treasure of Foggy...", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-11.jpg"), head: "Aquaman and The Lost Kingdom", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-12.jpg"), head: "Drive-Away Dolls", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-13.jpg"), head: "Night Swim", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-14.jpg"), head: "Migration", year: "2023", price: "Start at $19.99" },
  { images: require("./images/movies-15.jpg"), head: "Mean Girls", year: "2024", price: "$19.99", strike: "$12.99", discount: "-35%" },
  { images: require("./images/movies-16.jpg"), head: "Oppenheimer", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-17.jpg"), head: "Barbie", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-18.jpg"), head: "Fitting In", year: "2024", price: "Start at $3.99" },
  { images: require("./images/movies-19.jpg"), head: "French Girl", year: "2024", price: "Start at $14.99" },
  { images: require("./images/movies-20.jpg"), head: "The Animal Kingdom", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-21.jpg"), head: "Reckless Summer", year: "2024", price: "Start at $3.99" },
  { images: require("./images/movies-22.jpg"), head: "Five Nights at Freddy's", year: "2023", price: "Buy or Stream" },
  { images: require("./images/movies-23.jpg"), head: "Stopmotion", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-24.jpg"), head: "Out of Darkness", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-25.jpg"), head: "Napolean", year: "2023", price: "Start at $19.99" },
  { images: require("./images/movies-26.jpg"), head: "Big Stan", year: "2023", price: "Start at $2.99" },
  { images: require("./images/movies-27.jpg"), head: "Good Burger 2", year: "2024", price: "Buy our stream" },
  { images: require("./images/movies-28.jpg"), head: "No Way Up", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-29.jpg"), head: "The Hunger Games: The Ballads of SongBirds and...", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-30.jpg"), head: "5lbs of Pressure", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-31.jpg"), head: "The Color Purple(2023)", year: "2024", price: "Start at $5.99" },
  { images: require("./images/movies-32.jpg"), head: "Trolls Bnad Together", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-33.jpg"), head: "Lovely,Dark,and Deep", year: "2024", price: "Start at $4.99" },
  { images: require("./images/movies-34.jpg"), head: "Lisa Frankenstien", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-35.jpg"), head: "The Marvels", year: "2023", price: "$9.99", strike: "$19.99", discount: "-50%" },
  { images: require("./images/movies-36.jpg"), head: "The Boy in The Boat", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-37.jpg"), head: "The Book of Clarence", year: "2024", price: "Start at $14.99" },
  { images: require("./images/movies-38.jpg"), head: "Next Goals Wins", year: "2023", price: "$9.99", strike: "$19.99", discount: "-33%" },
  { images: require("./images/movies-39.jpg"), head: "The Zone of Interest", year: "2023", price: "Start at $4.99" },
  { images: require("./images/movies-40.jpg"), head: "Red Right Hand", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-41.jpg"), head: "I.S.S.", year: "2024", price: "Start at $4.99" },
  { images: require("./images/movies-42.jpg"), head: "Ferrari", year: "2023", price: "Start at $4.99" },
  { images: require("./images/movies-43.jpg"), head: "Silent Night(2023)", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-44.jpg"), head: "Dream Scenario", year: "2022", price: "Start at $4.99" },
  { images: require("./images/movies-45.jpg"), head: "Thanksgiving", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-46.jpg"), head: "Wish + Bonus Content", year: "2024", price: "$9.99", strike: "$19.99", discount: "-50%" },
  { images: require("./images/movies-47.jpg"), head: "Justice League: Crisis on Infinite Earths: Part One", year: "2024", price: "Start at $5.99" },
  { images: require("./images/movies-48.jpg"), head: "The Exorcist: Believer", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-49.jpg"), head: "Killers Of The Flower Moon", year: "2023", price: "Start at $19.99" },
  { images: require("./images/movies-50.jpg"), head: "John Wick: Chapter 4", year: "2023", price: "Buy ot stream" },
  { images: require("./images/movies-51.jpg"), head: "The Creator", year: "2023", price: "$9.99", strike: "$19.99", discount: "-50%" },
  { images: require("./images/movies-52.jpg"), head: "The Last Voyage Of The Demeter", year: "2023", price: "Start at $19.99" },
  { images: require("./images/movies-53.jpg"), head: "Sound Of Freedom", year: "2023", price: "Buy or stream" },
  { images: require("./images/movies-54.jpg"), head: "Indiana Jones and the Dial of Destiny", year: "2023", price: "$9.99", strike: "$19.99", discount: "-50%" },
  { images: require("./images/movies-55.jpg"), head: "The Equalizer 3", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-56.jpg"), head: "Strays(2023)", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-57.jpg"), head: "Mission: Impossible - Dead Reckoning", year: "2023", price: "Start at $4.99" },
  { images: require("./images/movies-58.jpg"), head: "The Expandables 4", year: "2023", price: "Buy or stream" },
  { images: require("./images/movies-59.jpg"), head: "Saw X", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-60.jpg"), head: "Blue beetle", year: "2023", price: "Start at $5.99" },
  { images: require("./images/movies-61.jpg"), head: "The Super Mario Bros. Movie", year: "2023", strike: "$14.99", price: "$8.99", discount: "-40%" },
  { images: require("./images/movies-62.jpg"), head: "Gran Turismo: Based on a True Story", year: "2023", price: "Start at $4.99" },
  { images: require("./images/movies-63.jpg"), head: "The Meg 2: The Trench", year: "2023", price: "$9.99", strike: "$14.99", discount: "-33%" },
  { images: require("./images/movies-64.jpg"), head: "Talk To Me", year: "2023", price: "Start at $9.99" },
  { images: require("./images/movies-65.jpg"), head: "Teenage Mutant Ninja Turtles: Mutant Mayhem", year: "2023", price: "Buy Or Stream" },
  { images: require("./images/movies-66.jpg"), head: "Transformers: Rise of the Beasts", year: "2023", price: "Buy Or Stream" },
  { images: require("./images/movies-67.jpg"), head: "Spider-Man: Across The Spider-Verse", year: "2023", price: "Start at $3.99" },
  { images: require("./images/movies-68.jpg"), head: "Wonka + Bonus Content", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-69.jpg"), head: "Poor Things + Bonus Content", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-70.jpg"), head: "The End We Start From + Bonus Content", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-71.jpg"), head: "Aquaman and the Lost Kingdom + Bonus Content", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-72.jpg"), head: "Miller's Girl", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-73.jpg"), head: "American Fiction", year: "2023", price: "Start at $3.99" },
  { images: require("./images/movies-74.jpg"), head: "The End We Start From", year: "2023", price: "Start at $4.99" },
  { images: require("./images/movies-75.jpg"), head: "Madame Web + Bonus", year: "2024", price: "Start at $24.99" },
  { images: require("./images/movies-76.jpg"), head: "Justice League: Crisis On Infinite Earths Part Two + Bonus", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-77.jpg"), head: "The Hunger Games: The Ballad of Songbirds and Snakes + Bonus", year: "2023", price: "Start at $19.99" },
  { images: require("./images/movies-78.jpg"), head: "Dune: Part Two + Bonus", year: "2024", price: "Start at $29.99" },
  { images: require("./images/movies-79.jpg"), head: "Kung Fu Panda 4 + Bonus", year: "2024", price: "Start at $29.99" },
  { images: require("./images/movies-80.jpg"), head: "Dune 2-Film Collection", year: "2024", price: "Start at $34.99" },
  { images: require("./images/movies-81.jpg"), head: "Wish", year: "2023", price: "$9.99", strike: "$19.99", discount: "-50%" },
  { images: require("./images/movies-82.jpg"), head: "Mean Girls (2024) + Bonus Content", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-83.jpg"), head: "Kung Fu Panda 4-Movie Collection", year: "2024", price: "Start at $54.99" },
  { images: require("./images/movies-84.jpg"), head: "Silent Night + Bonus", year: "2024", price: "Start at $14.99" },
  { images: require("./images/movies-85.jpg"), head: "Wonka 2-Film Collection", year: "2024", price: "Start at $29.99" },
  { images: require("./images/movies-86.jpg"), head: "Finestkind + Bonus", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-87.jpg"), head: "Lights Out", year: "2024", price: "Start at $3.99" },
  { images: require("./images/movies-88.jpg"), head: "Beautiful Wedding", year: "2024", price: "Start at $5.99" },
  { images: require("./images/movies-89.jpg"), head: "Bob Marley: One Love + Bonus Content", year: "2024", price: "Start at $24.99" },
  { images: require("./images/movies-90.jpg"), head: "All of Us Strangers + Bonus Content", year: "2024", price: "Start at $14.99" },
  { images: require("./images/movies-91.jpg"), head: "Into The Abyss", year: "2024", price: "Start at $3.99" },
  { images: require("./images/movies-92.jpg"), head: "Saltburn", year: "2023", price: "Start at $14.99" },
  { images: require("./images/movies-93.jpg"), head: "The Bad Shepherd", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-94.jpg"), head: "Time Addicts", year: "2024", price: "Start at $3.99" },
  { images: require("./images/movies-95.jpg"), head: "Midnight Peepshow", year: "2024", price: "Start at $3.99" },
  { images: require("./images/movies-96.jpg"), head: "The Book of Clarence + Bonus", year: "2024", price: "Start at $14.99" },
  { images: require("./images/movies-97.jpg"), head: "The Promised Land", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-98.jpg"), head: "Amelia's Children", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-99.jpg"), head: "Monolith", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-100.jpg"), head: "Good Burger & Good Burger 2: 2 - Movie Collection", year: "2024", price: "Start at $24.99" },
  { images: require("./images/movies-101.jpg"), head: "The American Society of Magical Negroes + Bonus", year: "2024", price: "Start at $29.99" },
  { images: require("./images/movies-102.jpg"), head: "Land of Bad", year: "2024", price: "Start at $19.99" },
  { images: require("./images/movies-103.jpg"), head: "Double Blind", year: "2024", price: "Start at $5.99" },
  { images: require("./images/movies-104.jpg"), head: "The Zone of Interest & Under the Skin 2-Pack", year: "2024", price: "Start at $29.99" },
  { images: require("./images/movies-105.jpg"), head: "Perfect Days", year: "2024", price: "Start at $4.99" },
  { images: require("./images/movies-106.jpg"), head: "Which Brings Me To You", year: "2024", price: "Start at $6.99" },
  { images: require("./images/movies-107.jpg"), head: "Drugstore June", year: "2024", price: "Start at $3.99" },
  { images: require("./images/movies-108.jpg"), head: "Gods of the Deep", year: "2024", price: "Start at $3.99" },
  { images: require("./images/movies-109.jpg"), head: "Box:Metaphor", year: "2024", price: "Start at $5.99" },

]
function Movies() {
  return (
    <div>
      <div className='py-3 mb-3'>
        <div className='data-container'>
          <Row>
            <Col>
              <div className='heading'>
                <p className='text-light mb-0 fw-bold' style={{ fontSize: "20px" }}>New Movies <FaAngleRight style={{ color: "#60cdff" }}></FaAngleRight></p>
              </div>
            </Col>
          </Row>
          <OwlCarousel autoplay autoplayTimeout={2500}
            className="owl-theme"
            id='movies'
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
              1000: {
                items: 4,
              },
              1200: {
                items: 6,
              }
            }}
          >
            {
              movies.map((item) => {
                return (
                  <>
                    <div className='item movie-item position-relative mt-2' style={{ borderRadius: "10px", height: "410px", border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden" }}>
                      <div className=''>
                        <img src={item.images} style={{ height: "300px", borderRadius: "10px 10px 0 0 " }}></img>
                      </div>

                      <div className='blur position-absolute' style={{ backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url(${item.images})`, height: "110px", backgroundPosition: "center bottom", backgroundSize: "cover", backgroundRepeat: "no-repeat", bottom: "3%", borderRadius: "0 0 10px 10px" }}>
                      </div>

                      <div className='movie-content' style={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100px" }}>
                        <p style={{ fontSize: "14px" }} className='head'>{item.head}</p>
                        <div className='d-flex movie-content-bottom justify-content-between align-items-center'>
                          <h7>{item.year}</h7>
                          <div>
                            {item.strike && item.discount ? (
                              <div className='d-flex align-items-center'>
                                <p style={{ backgroundColor: "#FCE100", padding: '2px 5px', color: "black", borderRadius: "5px 0px 0px 5px" }}>{item.discount}</p>
                                <p style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: '2px 10px', borderRadius: "0px 5px 5px 0px" }}><strike>{item.strike}</strike> {item.price}</p>
                              </div>
                            ) : (
                              <p style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: '2px 10px', borderRadius: "5px" }}>{item.price}</p>
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
        </div >
      </div >
    </div >
  )
}

export default Movies
