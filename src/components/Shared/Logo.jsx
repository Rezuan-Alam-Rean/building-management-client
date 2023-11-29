import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/house/b-logo.jpg'
const Logo = () => {
  return (
    <Link to='/'>
      <img
        className=' md:block'
        src={logoImg}
        alt='logo'
        width='65'
        height='100'
      />
    </Link>
  )
}

export default Logo
