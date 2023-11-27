
import location_img from "../../../assets/images/Screenshot 2023-11-27 213623.png";

const ApartmentLocation = () => {
    // Updated location and directions
    const location = 'Mirpur, Dhaka, Bangladesh'; // Updated location details
    const directions = 'Click Open in Google Maps'; // Directions to the apartment

    // Updated coordinates for the Mirpur location
    const latitude = 23.8126;
    const longitude = 90.3654;

    // Function to open Google Maps with directions
    const openGoogleMaps = () => {
        const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
        window.open(url, '_blank');
    };

    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-4 text-center">Apartment Location</h1>
            <div className=" hero-content flex-col lg:flex-row justify-evenly">

                <div className="mb-4">
                    <img
                        src={location_img}
                        alt="Apartment"
                        className="rounded-lg"
                    />
                </div>




                <div className="mb-4">
                    <h2 className="text-xl font-semibold mb-2">Location Details:</h2>
                    <p>{location}</p>
                    <h2 className="text-xl font-semibold mb-2">How to Get There:</h2>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
                        onClick={openGoogleMaps}
                    >
                        Open in Google Maps
                    </button>
                    <p className="mt-5">{directions}</p>
                </div>




            </div>
        </div>
    );
};

export default ApartmentLocation;
