
const RoomsCard = ({ room }) => {
    return (
        <div className="group" >
            <div className=" group-hover:scale-110 max-[350px] mx-auto space-y-6 rounded-2xl  px-6 py-4  md:w-[350px]">
                {/* Card Image */}
                <img width={350} height={190} className="h-[190px] w-[350px] rounded-2xl bg-gray-400" src={room?.image} alt="card navigate ui" />
                {/* Card Heading */}
                <div className='font-semibold text-white text-lg'>{room?.location}</div>
                <div className='font-light text-white'>5 nights .</div>
                <div className='flex flex-row items-center text-white gap-1'>
                    <div className='font-semibold'>$ {room?.price}</div>
                    <div className='font-light'>night</div>
                </div>

            </div>
        </div>
    );
};

export default RoomsCard;