import { Routes, Route } from "react-router-dom"
import Home from "./Home";
import SearchItem from "./searchitem/SearchItem";
import Header from "./Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
    <Header></Header>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/search" element={ <SearchItem/> } />
        {/* <Route path="about" element={ <About/> } /> */}
        {/* <Route path="contact" element={ <Contact/> } /> */}
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
