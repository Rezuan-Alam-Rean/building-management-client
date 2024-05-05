
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import img1 from '../../../assets/images/house/avi-werde-hHz4yrvxwlA-unsplash.jpg';
import img2 from '../../../assets/images/house/frames-for-your-heart-mR1CIDduGLc-unsplash.jpg';
import img3 from '../../../assets/images/house/john-fornander-tVzyDSV84w8-unsplash.jpg';
import img4 from '../../../assets/images/house/naomi-ellsworth-EMPLSuvDuhQ-unsplash.jpg';
import img5 from '../../../assets/images/house/paul-szewczyk-nI4aC1kaTRc-unsplash.jpg';
import img6 from '../../../assets/images/house/webaliser-_TPTXZd9mOo-unsplash.jpg';
// import Container from '../../../components/Shared/Container';

const Slider = () => {




  return (


    <Carousel

      autoPlay
      interval={3000}
      infiniteLoop
      showThumbs={false}
      stopOnHover={false}
    >
      <div className='relative  ' >

       
          <img className=" opacity-50 max-h-[calc(100vh-120px)]" src={img1} alt="Slide 1" />
        
      </div>

      <div>
        <img className=" opacity-50 max-h-[calc(100vh-120px)]" src={img2} alt="Slide 2" />
      </div>
      <div>
        <img className=" opacity-50 max-h-[calc(100vh-120px)]" src={img3} alt="Slide 3" />
      </div>
      <div>
        <img className=" opacity-50 max-h-[calc(100vh-120px)]" src={img4} alt="Slide 4" />
      </div>
      <div>
        <img className=" opacity-50 max-h-[calc(100vh-120px)]" src={img5} alt="Slide 5" />
      </div>
      <div>
        <img className=" opacity-50 max-h-[calc(100vh-120px)]" src={img6} alt="Slide 6" />
      </div>
    </Carousel>




  );
};

export default Slider;
