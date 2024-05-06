import { Link } from 'react-router-dom'
import Container from '../Container'
// import logoImg from '../../../assets/images/b-logo.jpg'
import MenuDropdown from './MenuDropdown'
// import Logo from '../Logo'

const Navbar = () => {
  return (
    <div className='fixed w-full z-10  backdrop-filter backdrop-blur-sm px-10 md:px-0 '>
      <div className='py-4 '>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
            <p className=' text-white  font-extrabold text-lg '>
        <span className='text-orange-500' > SEA</span> PARADISE 
       </p>
            </Link>

            <div className='hidden ' >
              <Link
                to='/'
                className='  px-4 py-3 text-orange-500   font-bold'
              >
                Home
              </Link>

              <Link
                to='/Apartment'
                className='px-4 py-3 text-orange-500   font-bold'
              >
                Apartments
              </Link>
            </div>

            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
