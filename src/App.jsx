import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Destinations from "./components/Destinations/Destinations";
import Search from "./components/Search/Search";
import Selects from "./components/Selects/Selects";
import CarouselAnimation from "./components/Carousel/CarouselAnimation";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Search />
      <Selects />
      <CarouselAnimation />
      <Footer />
    </>
  );
}

export default App;
