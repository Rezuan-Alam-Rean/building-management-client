
import About from "./About/About"
import ApartmentLocation from "./ApartmentLocation/ApartmentLocation"
import Slider from "./Banner/Slider"

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <About></About>
      <ApartmentLocation></ApartmentLocation>
      <h1>Welcome to StayVista</h1>
    </div>
  )
}

export default Home
