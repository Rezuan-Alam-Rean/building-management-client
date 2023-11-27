import { Link } from 'react-router-dom'
import Container from '../Container'
import logoImg from '../../../assets/images/b-logo.jpg'
import MenuDropdown from './MenuDropdown'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>
              <img
                className=' md:block'
                src={logoImg}
                alt='logo'
                width='65'
                height='100'
              />
            </Link>

            <div className='hidden md:flex' >
            <Link
              to='/'
              className='  px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>

            <Link
              to='/login'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Login
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
