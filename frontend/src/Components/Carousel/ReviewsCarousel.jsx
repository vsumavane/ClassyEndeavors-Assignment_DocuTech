import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import data from '../../Components/data';
import ReviewCard from '../../Components/Cards/ReviewCard';
import ScrollButton from '../Buttons/ScrollButton';

// eslint-disable-next-line react/prop-types
function NewPrevArrow({onClick}) {
  return (
      <ScrollButton className="absolute left-0 top-1/2 -translate-y-1/2 z-10 ml-5" onclick={onClick} style={{left:-12}} type="prev"/>
  );
}
// eslint-disable-next-line react/prop-types
function NewNextArrow({onClick}) {
    return (
        <ScrollButton className="absolute top-1/2 -translate-y-1/2 z-10 mr-5"onclick={onClick} style={{right:-12}} type="next"/>
      
    )
  }
  


// const CustomPrevArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
//   >
//     ◀
//   </button>
// );

// const CustomNextArrow = ({ onClick }) => (
//   <button
//     onClick={onClick}
//     className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
//   >
//     ▶
//   </button>
// );


export default function ImageSlider() {
  const settings = {
    dots: false,
    slidesToShow: 3,
    prevArrow: <NewPrevArrow/>,
    nextArrow: <NewNextArrow/>,
    autoplay: true,
    // nextArrow: <CustomNextArrow />,
    // prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
<div className=''>
<p className='font-bold text-brand-black-light text-2xl pointer-events-none max-w-fit mx-auto'> What our users say </p>
<div className="image-slider-container  max-w-7xl mx-auto">
    <Slider {...settings}>
        {data.userFeedbacks.map((fb, index) => (
            <div key={index} className='px-8 py-10'>
                <ReviewCard child={fb.children} rating={fb.rating} img={fb.profilePhoto} />
            </div>
        ))}
    </Slider>
</div>
  </div>

  
);
}
