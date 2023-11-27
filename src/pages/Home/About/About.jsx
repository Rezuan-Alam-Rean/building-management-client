/* eslint-disable react/no-unescaped-entities */
import room from '../../../assets/images/house/greg-rivers-rChFUMwAe7E-unsplash.jpg';
import house from '../../../assets/images/house/naomi-ellsworth-EMPLSuvDuhQ-unsplash.jpg';
import Container from '../../../components/Shared/Container';

const About = () => {
    return (
        <Container>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={room} className="w-3/4 rounded-lg shadow-2xl" />
                        <img src={house} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 p-4'>
                        <h3 className='text-5xl text-orange-500 font-bold'>About Putul's Paradise</h3>
                        <h1 className="text-3xl font-bold">Luxurious Apartments Tailored for You</h1>
                        <p className="py-6">Discover an unparalleled living experience at Putul's Paradise. Our meticulously designed apartments offer modern amenities, breathtaking views, and comfort beyond compare.</p>
                        <p className="py-6">Explore a serene ambiance complemented by world-class facilities. Unwind in style amidst lush landscapes and embrace a lifestyle crafted to perfection.</p>
                        <button className="btn btn-warning">Get More Info</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
