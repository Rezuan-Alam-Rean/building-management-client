/* eslint-disable react/no-unescaped-entities */
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import avatarImg from '../../../assets/images/placeholder.jpg';

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Dropdown button */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-2 md:py-2 md:px-3 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          
          <AiOutlineMenu />
          <div className='md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md  w-48 bg-slate-800 text-white overflow-hidden right-0 top-12 text-sm text-center'>
          <div className='flex flex-col cursor-pointer'>
            <h2 className='text-center mt-4 mb-1 font-bold'>
              {user && user?.displayName}
            </h2>
            <Link
              to='/'
              className='block  px-4 py-3 hover:bg-gray-900 transition font-bold'
            >
              Home
            </Link>
            <Link
              to='/Apartment'
              className='block  px-4 py-3 hover:bg-gray-900 transition font-bold'
            >
              Apartments
            </Link>
            {user ? (
              <>
                <Link
                  to='/dashboard'
                  className='px-4 py-3 hover:bg-gray-900 transition font-bold'
                >
                  Dashboard
                </Link>
                <div
                  onClick={logOut}
                  className='px-4 py-3 hover:bg-gray-900 transition font-bold cursor-pointer'
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link
                  to='/login'
                  className='px-4 py-3 hover:bg-gray-900 transition font-bold'
                >
                  Login
                </Link>
                <Link
                  to='/signup'
                  className='px-4 py-3 hover:bg-gray-900 transition font-bold'
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuDropdown;













// return (
//   <div className='relative'>
//     <div className='flex flex-row items-center gap-3'>
//       {/* Become A Host btn */}
//       <div className=' md:block'>
//         <p className='text-lg font-extrabold font-serif'>
//         Putul's Paradise
//         </p>
//       </div>
//       {/* Dropdown btn */}
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
//       >
//         <AiOutlineMenu />
//         <div className=' md:block'>
//           {/* Avatar */}
//           <img
//             className='rounded-full'
//             referrerPolicy='no-referrer'
//             src={user && user.photoURL ? user.photoURL : avatarImg}
//             alt='profile'
//             height='30'
//             width='30'
//           />
//         </div>
//       </div>
//     </div>
//     {isOpen && (
//       <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
//         <div className='flex flex-col cursor-pointer'>
//           <Link
//             to='/'
//             className='block md:hidden px-4 py-3 hover:bg-gray-900 transition font-bold'
//           >
//             Home
//           </Link>

//           <Link
//             to='/Apartment'
//             className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
//           >
//             Apartments
//           </Link>

//           <Link
//             to='/login'
//             className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
//           >
//             Login
//           </Link>
//           <Link
//             to='/signup'
//             className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     )}
//   </div>
// )
