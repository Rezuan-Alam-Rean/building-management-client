/* eslint-disable react/prop-types */
// import { formatDistance } from 'date-fns'
// import { useState } from 'react'
// import Button from '../Button/Button'
// import Calender from './Calender'
// import { formatDistance } from 'date-fns'
// import { useState } from 'react'

import { useState } from "react";
import Button from "../../../components/Button/Button"
import BookingModal from "../../../components/Modal/BookingModal";
import useAuth from "../../../hooks/useAuth";

const RoomReservation = ({ room }) => {

  let [isOpen, setIsOpen] = useState(false)
  const { user } = useAuth()



  const closeModal = () => {
    setIsOpen(false)
  }


  const [bookingInfo, setBookingInfo] = useState({
   
    guest: {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
    },
    
      floorNo: room?.floorNo,
      blockName: room?.blockName,
      apartmentNo: room?.apartmentNo,
      rent: room?.rent,
      rImage: room?.image,
      roomId: room?._id,
  })


console.log(room);

  //   Total days * price
  // const totalDays = parseInt(
  //   formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
  // )
  // Total Price Calculation
  // const totalPrice = totalDays * room?.price

  // console.log(value)

  return (
    <div className='m-auto items-center justify-center rounded-xl border-[1px] max-w-3xl border-neutral-200 overflow-hidden bg-white'>
      <div className='flex flex-col items-center gap-1 p-4'>
        <div className='text-xl font-semibold'>Apartment No :{room?.apartmentNo}</div>
        <div className='text-xl font-semibold'>Block Name : {room?.blockName}</div>
        <div className='text-xl font-semibold'>floor No : {room?.floorNo}</div>
       
        <div className='text-2xl text-red-700 font-semibold'>Rent : {room?.rent} $</div>
        <img className="max-w-xs" src={room?.image} alt="" />
        
        
      </div>
      <hr />
      
      <hr />
      <div className='p-4 w-60 m-auto '>
        <Button 
        
        onClick={() => setIsOpen(true)}
        label={'Make payment'} />
      </div>
      <hr />

      <BookingModal
        closeModal={closeModal}
        isOpen={isOpen}
        bookingInfo={bookingInfo}
      />
      
    </div>
  )
}

export default RoomReservation
