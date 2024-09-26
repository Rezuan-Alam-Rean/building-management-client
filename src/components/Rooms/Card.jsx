import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = ({ room }) => {
  return (
    <Link to={`/room/${room?._id}`} className='col-span-1 cursor-pointer group'>
      {/* <div className='flex flex-col gap-2 w-full'>
        <div
          className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
        >
          <img
            className='
                object-cover 
                h-full 
                w-full 
                group-hover:scale-150 
                transition
              '
            src={room?.image}
            alt='Room'
          />
          <div
            className='
              absolute
              top-3
              right-3
            '
          ></div>
        </div>
        <div className='font-semibold text-lg'>{room?.location}</div>
        <div className='font-light text-neutral-500'>5 nights .</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>$ {room?.price}</div>
          <div className='font-light'>night</div>
        </div>
      </div> */}
      <div className="group" >
            <div className=" group-hover:scale-110 text-white max-[350px] mx-auto space-y-2 rounded-2xl  px-6 py-2  md:w-[350px]">
               
                <img width={350} height={190} className="h-[190px] w-[350px] rounded-2xl pb-2 bg-gray-400" src={room?.image} alt="card navigate ui" />
               
                <div className='font-semibold pt-3 text-lg'>{room?.location}</div>
                <div className='font-light '>5 nights .</div>
                <div className='flex flex-row  items-center gap-1'>
                    <div className='font-semibold'>$ {room?.price}</div>
                    <div className=''>per night</div>
                </div>

            </div>
        </div>
    </Link>
  )
}

Card.propTypes = {
  room: PropTypes.object,
}

export default Card
