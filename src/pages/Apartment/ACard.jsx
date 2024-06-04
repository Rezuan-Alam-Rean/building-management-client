import axios from "axios";
import useAuth from "../../hooks/useAuth"
import toast from "react-hot-toast";



/* eslint-disable react/prop-types */
const ACard = ({ room }) => {

    const { user } = useAuth()
    // console.log(user?.email);
    // console.log(user?.displayName);
    // console.log(user);


    const handleAgreement = async () => {
        try {
            const bookingData = {
                displayName: user?.displayName,
                email: user?.email,
                floorNo: room?.FloorNo,
                blockName: room?.BlockName,
                apartmentNo: room?.ApartmentNo,
                rent: room?.Rent,
                image: room?.ApartmentImage
            };

            const response = await axios.post('http://localhost:8000/book', bookingData);
            // console.log(response.data); // Log the response from the server

            // Show success toast
            toast.success('Agreement successful! !');
        } catch (error) {
            console.error('Error:', error);
            // Show error toast
            toast.success('save Apartment data in database');
        }
    };




    return (

        <div className='flex mt-20  flex-col gap-2 w-full'>
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
                <h1 className='font-semibold '> Block Name : {room?.BlockName}</h1>

            </div>
            <div className='flex flex-row items-center gap-1 justify-evenly'>

                <p className='font-semibold text-lg'>Apartment No : {room?.ApartmentNo}</p>
            </div>
            <h1 className='font-bold text-xl text-orange-600 text-center'>Rent :  {room?.Rent} $ </h1>
            <button onClick={handleAgreement} className='btn'>
                Agreement
            </button>
        </div>

    )
}

export default ACard