import { useEffect, useState } from "react";
import { getRoom } from "../../../api/rooms";
import useAuth from "../../../hooks/useAuth";
import RoomReservation from "./RoomReservation";

const MyRoom = () => {
    const { user } = useAuth();
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getRoom(user?.email)
            .then(data => {
                if (Array.isArray(data)) {
                    setRooms(data);
                } else if (typeof data === 'object') {
                    setRooms([data]); // Convert single object to an array
                } else {
                    console.error('Unexpected data format received:', data);
                    setRooms([]);
                }
            })
            .catch(error => {
                console.error('Error fetching rooms:', error);
                setRooms([]);
            });
    }, [user]);

    console.log(rooms);

    return (
        <div className="items-center justify-center">
            {rooms.map(room => (
                <RoomReservation key={room._id} room={room} />
            ))}
        </div>
    );
};

export default MyRoom;
