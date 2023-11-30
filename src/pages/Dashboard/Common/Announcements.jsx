import { useEffect, useState } from "react";
import { getAnnouncement } from "../../../api/rooms";
import Loader from "../../../components/Shared/Loader";

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getAnnouncement().then((data) => {
            setAnnouncements(data);
            setLoading(false);
        });
    }, []);

    return (
        <div className="m-5 gap-5">
            <p className="text-4xl font-bold text-red-700">Announcements :</p>
            {loading ? (
                <Loader/>
            ) : (
                <div className="m-5 gap-5">
                    {announcements.map((announcement) => (
                        <div className="m-5 gap-5" key={announcement._id}>
                            <p className="text-2xl font-bold text-orange-500"> {announcement.title}</p>
                            <p className="text-lg font-bold "> {announcement.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Announcements;
