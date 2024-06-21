import logo from './logo.svg';
import './App.css';
import React from 'react';
import Productivity from './Productivity';
import Music from './Music';
import Collection from './Collection';
import Movies from './Movies';
import Games from './Games';
import Top_free from './Top_free';
import Creativity from './Creativity';
import Top_Selling from './Top_Selling';
import Top_Movies from './Top_Movies';
import MainSlider from './MainSlider/MainSlider';
import WeeklyDeal from './WeeklyDeal/WeeklyDeal';
// import Footer from './Footer/Footer';
import Essential from './Essential/Essential';
import SearchItem from './searchitem/SearchItem';

function Home() {
  return (
    <>
      {/* <SearchItem></SearchItem> */}
      <MainSlider />
      <Essential></Essential>
      <Top_free></Top_free>
      <Productivity></Productivity>
      <Music></Music>
      <Creativity></Creativity>
      <Games></Games>
      <WeeklyDeal/>
      <Movies></Movies>
      <Top_Selling></Top_Selling>
      <Top_Movies></Top_Movies>
      <Collection></Collection>
      {/* <Footer/> */}
    </>
  );
}

export default Home;
