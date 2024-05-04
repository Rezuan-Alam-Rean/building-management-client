

const MannageTable = ({ booking }) => {
    // console.log(booking);
  return (
    <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={booking?.rImage}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>{booking?.title}</p>
          </div>
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <div className='flex items-center'>
          <div className='flex-shrink-0'>
            <div className='block relative'>
              <img
                alt='profile'
                src={booking?.guest?.image}
                className='mx-auto object-cover rounded h-10 w-15 '
              />
            </div>
          </div>
          
        </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>${booking?.rent}</p>
      </td>
      
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              {booking?.apartmentNo}
            </p>
          </div>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
      <div className='ml-3'>
            <p className='text-gray-900 whitespace-no-wrap'>
              <button className="btn ">Delete</button>
            </p>
          </div>
      
      </td>
    </tr>
  )
}

export default MannageTable


