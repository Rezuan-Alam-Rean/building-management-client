import Container from "../../../components/Shared/Container";
import imageUrl from "../../../assets/images/istockphoto-598820096-612x612.jpg"

const Banner = () => {
    // Assuming you have an image URL
     
    const couponCode = 'RENT20'; // Coupon code for 20% off

    return (
        <Container>
            <div className="bg-gradient-to-r from-slate-700 to-slate-900 py-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-x-10 items-center justify-between px-4">
                    <div className="md:w-1/2 mb-4 md:mb-0">
                        <img src={imageUrl} alt="House" className="rounded-lg w-full shadow-lg" />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-3">20% OFF in House Rent</h2>
                        <p className="text-lg md:text-xl mb-3">Use coupon code:</p>
                        <p className="text-4xl text-orange-500 md:text-5xl font-semibold tracking-wide mb-3">{couponCode}</p>
                        <p className="text-base md:text-lg">Limited time offer. Apply at checkout.</p>
                    </div>
                </div>
            </div>

        </Container>

    );
};

export default Banner;
