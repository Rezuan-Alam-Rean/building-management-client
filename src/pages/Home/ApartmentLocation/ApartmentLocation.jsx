// import location_img from "../../../assets/images/Screenshot 2023-11-27 213623.png";
// import Container from "../../../components/Shared/Container";

// const ApartmentLocation = () => {
//     const location = 'Mirpur, Dhaka, Bangladesh';
//     const directions = 'Click "Open in Google Maps" for directions'; // Updated directions
//     const latitude = 23.8126;
//     const longitude = 90.3654;

//     const openGoogleMaps = () => {
//         const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
//         window.open(url, '_blank');
//     };

//     return (
//         <Container>

//         <div className="container mx-auto mt-8 p-6 lg:p-8 bg-gray-100 rounded-lg shadow-md">
//             <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-center">Discover Our Location</h1>
//             <div className=" hero-content flex-col lg:flex-row gap-6 lg:gap-12  ">
//                 <div className="mb-6 lg:mb-0">
//                     <img
//                         src={location_img}
//                         alt="Apartment"
//                         className="rounded-lg max-w-3xl"
//                     />
//                 </div>
//                 <div className="mb-6 lg:mb-0">
//                     <h2 className="text-xl  lg:text-2xl font-semibold mb-4 w-72 text-center pt-3 h-14 shadow-lg">Location Details:</h2>
//                     <p className="text-gray-700 w-36 text-center p-5 h-20 shadow-lg">{location}</p>
//                     <h2 className="w-72 text-center pt-3 h-14 text-xl shadow-lg lg:text-2xl font-semibold mt-6 mb-4">How to Get There:</h2>
//                     <button
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded mt-2"
//                         onClick={openGoogleMaps}
//                     >
//                         Open in Google Maps
//                     </button>
//                     <p className="mt-4 text-gray-700">{directions}</p>
//                 </div>
//             </div>
//         </div>

//         </Container>
//     );
// };

// export default ApartmentLocation;
