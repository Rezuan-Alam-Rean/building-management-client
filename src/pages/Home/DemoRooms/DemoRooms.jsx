import { useEffect, useState } from "react";
import { getAllRooms } from "../../../api/rooms";
import Loader from "../../../components/Shared/Loader";
import Container from "../../../components/Shared/Container";
import Dcard from "./Dcart";


const DemoRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    setLoading(true)
    getAllRooms().then(data => {
       setRooms(data)

      setLoading(false)
    })
  }, [])


  const currentRooms = rooms.slice(0, 3); // Displaying only three cards




  if (loading) return <Loader />;

  return (
    <Container>
        
        <div>
            <p className="text-center text-3xl font-bold mt-5 ">Some Demo Rooms </p>
        </div>
        
      <div className='pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10 gap-5 md:gap-16 p-5 md:px-20'>

      

        {currentRooms.map(room => (
         <Dcard key={room._id} room={room} ></Dcard>
        ))}
      </div>
      
    </Container>
  );
};



export default DemoRooms;