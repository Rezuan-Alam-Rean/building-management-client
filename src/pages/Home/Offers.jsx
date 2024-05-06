
import  image1    from "../../assets/images/hotel/pexels-kaip-591383.jpg";
import  image2    from "../../assets/images/hotel/pexels-zizome-453201.jpg";
const Offers = () => {






    return (

        <div className=" mt-16 bg-slate-900 text-white w-full px-4 md:px-32" >
            <div className="mb-8">

            <h3 className="text-3xl" >Offers</h3>
            <h5 className="text-lg mt-2">Promotions, deals, and special offers for you
            </h5>
            </div>

            <div className=" justify-center items-center space-y-5 flex flex-col md:flex-row   gap-x-5">
                <div className="w-full md:w-1/2 pt-5 px-2">
                    <div className="card card-side bg-base-100 w-full h-56 shadow-xl">
                <figure><img className="h-full w-48" src={image1} alt="offers" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                {/* <button className="btn btn-primary">Watch</button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2  px-2">
                    <div className="card card-side bg-base-100 w-full h-56 shadow-xl z-0 image-full">
                        <figure><img src={image2}alt="offer" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                {/* <button className="btn btn-primary">Buy Now</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offers;
