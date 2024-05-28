import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../../assets/images/hotel/pexels-pixabay-258154 (1).jpg";
const SliderCards = () => {
    // Card data array
    const cardData = [
        {
          id: 1,
          title: 'Cox\'s Bazar Beach Sunrise',
          content: '2 Resorts',
          image: 'https://i.ibb.co/LkLpbQN/pexels-travis-rupert-379220-1032650.jpg' 
        },
        {
          id: 2,
          title: 'Sandy Shores of Cox\'s Bazar',
          content: '6 Resorts',
          image: 'https://i.ibb.co/3S6g3Px/pexels-pixabay-67566.jpg' 
        },
        {
          id: 3,
          title: 'Cox\'s Bazar Surfing Wave',
          content: '4 Resorts.',
          image: 'https://i.ibb.co/XFMx3FL/pexels-daniel-jurin-358265-1835718.jpg' 
        },
        {
          id: 4,
          title: 'Tropical Paradise of Cox\'s Bazar',
          content: '8 Resorts',
          image: 'https://i.ibb.co/ky9Rm2R/pexels-pixabay-237272.jpg' 
        },
        {
          id: 5,
          title: 'Cultural Heritage of Cox\'s Bazar',
          content: '12 Resorts',
          image: 'https://i.ibb.co/9Hr0ccB/pexels-rushow-122107-2.jpg' 
        }
      ];
      

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="w-4/5 m-auto">
            <div className='mt-10 mb-10 '>
                <div className="text-white mb-8 ">
                    <h2 className="text-4xl mb-3">Explore Cox's Bazar</h2>
                    <h5>These popular destinations have a lot to offer</h5>
                </div>
                <Slider  {...settings}>
                    {
                        cardData.map(
                            (d) => (
                                <div key={d.id} className="max-[350px] mx-auto space-y-6 rounded-2xl  px-6 py-4  md:w-[350px]">
                                    {/* Card Image */}
                                    <img width={350} height={190} className="h-[190px] w-[350px] rounded-2xl bg-gray-400" src={d.image} alt="card navigate ui" />
                                    {/* Card Heading */}
                                    <div className="space-y-2">
                                        <h2 className="font-medium text-slate-800 sm:text-lg md:text-xl dark:text-white/90">{d.title}</h2>
                                        <h2 className="font-medium text-slate-800  dark:text-white/90">{d.content}</h2>
                                        {/* rating  */}
                                       
                                    </div>
                                   
                                </div>
                            )

                        )
                    }
                </Slider>
            </div>

        </div>
    );
};

export default SliderCards;
