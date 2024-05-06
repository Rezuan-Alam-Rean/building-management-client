import { Link } from 'react-router-dom'
// import logoImg from '../../assets/images/house/b-logo.jpg'
const Logo = () => {
  return (
    <Link to='/'>
      <p className=' text-black  font-extrabold text-lg '>
        <span className='text-orange-500' > SEA</span> PARADISE 
       </p>
    </Link>
  )
}

export default Logo
