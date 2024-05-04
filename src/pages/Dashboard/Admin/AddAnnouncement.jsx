import { useState } from "react";
import AddRoomForm from "../../../components/Form/AddRoomForm";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Changed import here
import { Announcement } from "../../../api/rooms";

const AddAnnouncement = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Changed this line

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const description = form.description.value;

        const roomData = {
            title,
            description,
        };

        try {
            const data = await Announcement(roomData);
            // console.log(data);

            toast.success('Announcement Added!');
            navigate('/dashboard'); // Using navigate for navigation
        } catch (err) {
            toast.error(err.message);
            console.log(err.message);
        } finally {
            setLoading(false);
        }

        // console.table(roomData);
    };

    return (
        <div>
            <AddRoomForm handleSubmit={handleSubmit} loading={loading} />
        </div>
    );
};

export default AddAnnouncement;
