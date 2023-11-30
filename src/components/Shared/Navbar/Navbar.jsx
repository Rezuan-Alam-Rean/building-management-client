import { Link } from 'react-router-dom'
import Container from '../Container'
// import logoImg from '../../../assets/images/b-logo.jpg'
import MenuDropdown from './MenuDropdown'
import Logo from '../Logo'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
             <Logo/>
            </Link>

            <div className='hidden md:flex' >
            <Link
              to='/'
              className='  px-4 py-3 text-red-500  hover:bg-slate-700 transition font-bold'
            >
              Home
            </Link>

            <Link
              to='/Apartment'
              className='px-4 py-3 text-red-500  hover:bg-slate-700 transition font-bold'
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
