/* eslint-disable react/no-unescaped-entities */

import { Helmet } from "react-helmet-async"
import About from "./About/About"
import ApartmentLocation from "./ApartmentLocation/ApartmentLocation"
import Banner from "./Banner/Banner"
import Slider from "./Banner/Slider"
import DemoRooms from "./DemoRooms/DemoRooms"


const Home = () => {

 


  return (
    <div>
<Helmet>
  <title>Putul's Paradise || Home</title>
</Helmet>

      <Slider></Slider>
      <Banner></Banner>
      <About></About>
      <ApartmentLocation></ApartmentLocation>
      <DemoRooms></DemoRooms>
      
    </div>
  )
}

export default Home
