import React from "react";
import "./css/Home.css";
import Body from "../../Components/Body/Body";
import Header from "../../Components/Header/Header";
import CarouselComponent from "../../Components/Carousel/Carousel";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <CarouselComponent />
      <Body />
    </div>
  );
};

export default Home;
