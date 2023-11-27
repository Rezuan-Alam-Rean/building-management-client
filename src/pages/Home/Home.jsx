
import About from "./About/About"
import ApartmentLocation from "./ApartmentLocation/ApartmentLocation"
import Banner from "./Banner/Banner"
import Slider from "./Banner/Slider"

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Banner></Banner>
      <About></About>
      <ApartmentLocation></ApartmentLocation>
      
    </div>
  )
}

export default Home
