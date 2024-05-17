import { useEffect, useState } from "react";
import Container from "../Shared/Container";
import RoomsCard from "./RoomsCard";
import Heading from "../Shared/Heading";
import Categories from "../Categories/Categories";

const Rooms = () => {

  const [rooms, setRooms] = useState([])

  useEffect(() => {

    fetch("./rooms.json")
      .then(res => res.json())
      .then(data => setRooms(data))
  }

    , [])

  return (
    <div>
        <Categories/>
      <Container>
        {/* {
                rooms.map(room => (
                    <RoomsCard key={room?._id} room = {room} ></RoomsCard>
                ))
             } */}
        {rooms && rooms.length > 0 ? (
          <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {rooms.map(room => (
              <RoomsCard key={room._id} room={room} />
            ))}
          </div>
        ) : (
          <div className='flex items-center justify-center min-h-[calc(100vh-300px)]'>
            <Heading
              center={true}
              title='No Rooms Available In This Category!'
              subtitle='Please Select Other Categories.'
            />
          </div>
        )}

      </Container>
    </div>
  );
};

export default Rooms;