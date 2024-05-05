import { Link } from 'react-router-dom'
import Container from '../Container'
// import logoImg from '../../../assets/images/b-logo.jpg'
import MenuDropdown from './MenuDropdown'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-transparent z-10 '>
      <div className='py-4 '>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
             <Logo/>
            </Link>

            <div className='hidden md:flex' >
            <Link
              to='/'
              className='  px-4 py-3 text-white   font-extrabold'
            >
              Home
            </Link>

            <Link
              to='/Apartment'
              className='px-4 py-3 text-white   font-extrabold'
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
