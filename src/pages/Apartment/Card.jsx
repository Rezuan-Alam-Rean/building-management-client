import { Link } from 'react-router-dom'

/* eslint-disable react/prop-types */
const Card = ({ room }) => {
    return (
        <Link to={`/room/${room?._id}`} className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full'>
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
                group-hover:scale-110 
                transition
              '
                        src={room?.ApartmentImage}
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
                <div className='flex flex-row items-center gap-1 justify-evenly'>
                    <p className='font-semibold'>Floor No : {room?.FloorNo}</p>
                    <h1 className='font-semibold '> Block Name : {room.BlockName}</h1>
                    
                </div>
                <div className='flex flex-row items-center gap-1 justify-evenly'>

                <p className='font-semibold text-lg'>Apartment No : {room?.ApartmentNo}</p>
                </div>
                    <h1 className='font-bold text-xl text-orange-600 text-center'>Rent :  {room?.Rent} $ </h1>
                <button className='btn'>Agreement</button>
            </div>
        </Link>
    )
}

export default Card