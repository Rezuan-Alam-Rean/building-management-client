/* eslint-disable react/no-unescaped-entities */
import room from '../../../assets/images/hotel/pexels-zizome-453201.jpg';
import house from '../../../assets/images/hotel/pexels-pixabay-258154 (1).jpg';
// import Container from '../../../components/Shared/Container';
import { openGoogleMaps } from '../../../api/utils';

const About = () => {
    return (
       
            <div className="hero min-h-screen bg-slate-900 text-white">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={room} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={house} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-4 border-white shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 p-4 mt-5 '>
                        <h3 className='md:text-5xl text-4xl text-orange-500 font-bold'>About Sea Paradise</h3>
                        <h1 className="md:text-3xl text-xl font-bold">Luxurious Apartments Tailored for You</h1>
                        <p className="py-6">Discover an unparalleled living experience at Putul's Paradise. Our meticulously designed apartments offer modern amenities, breathtaking views, and comfort beyond compare.</p>
                 
                        <button onClick={openGoogleMaps} className="btn bg-orange-500 text-white "> Open Google Maps </button>
                    </div>
                </div>
            </div>
           
        
    );
};

export default About;
