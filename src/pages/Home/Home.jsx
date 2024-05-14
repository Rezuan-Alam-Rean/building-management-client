/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet-async"
import About from "./About/About"

import Banner from "./Banner/Banner"
import Slider from "./Banner/Slider"
import DemoRooms from "./DemoRooms/DemoRooms"
import SliderCards from "./Banner/SliderCards"
import Offers from "./Offers"


const Home = () => {




  return (
    <div>
      <Helmet>
        <title>Sea Paradise || Home</title>
      </Helmet>

      <Slider></Slider>
     <SliderCards/>
      <Offers/>
      <About   ></About>
      <DemoRooms></DemoRooms>
      {/* <Banner></Banner> */}

    </div>
  )
}

export default Home
