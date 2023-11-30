/* eslint-disable react/prop-types */
// import { formatDistance } from 'date-fns'
// import { useState } from 'react'
// import Button from '../Button/Button'
// import Calender from './Calender'
// import { formatDistance } from 'date-fns'
// import { useState } from 'react'

import Button from "../../../components/Button/Button"

const RoomReservation = ({ room }) => {
//   const [value, setValue] = useState({
//     startDate: new Date(room?.from),
//     endDate: new Date(room?.to),
//     key: 'selection',
//   })

console.log(room);

  //   Total days * price
  // const totalDays = parseInt(
  //   formatDistance(new Date(room?.to), new Date(room?.from)).split(' ')[0]
  // )
  // Total Price Calculation
  // const totalPrice = totalDays * room?.price

  // console.log(value)

  return (
    <div className='rounded-xl border-[1px] max-w-3xl border-neutral-200 overflow-hidden bg-white'>
      <div className='flex flex-col items-center gap-1 p-4'>
        <div className='text-xl font-semibold'>Apartment No :{room?.apartmentNo}</div>
        <div className='text-xl font-semibold'>Block Name : {room?.blockName}</div>
        <div className='text-xl font-semibold'>floor No : {room?.floorNo}</div>
       
        <div className='text-2xl font-semibold'>$ {room?.rent}</div>
        
      </div>
      <hr />
      
      <hr />
      <div className='p-4'>
        <Button  label={'Make payment'} />
      </div>
      <hr />
      
    </div>
  )
}

export default RoomReservation
