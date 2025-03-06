import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../Components/data";
import ReviewCard from "../../Components/Cards/ReviewCard";
import ScrollButton from "../Buttons/ScrollButton";

// eslint-disable-next-line react/prop-types
function NewPrevArrow({ onClick }) {
  return (
    <ScrollButton
      className="absolute top-1/2 left-0 z-10 ml-5 -translate-y-1/2"
      onclick={onClick}
      style={{ left: -12 }}
      type="prev"
    />
  );
}
// eslint-disable-next-line react/prop-types
function NewNextArrow({ onClick }) {
  return (
    <ScrollButton
      className="absolute top-1/2 z-10 mr-5 -translate-y-1/2"
      onclick={onClick}
      style={{ right: -12 }}
      type="next"
    />
  );
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
    prevArrow: <NewPrevArrow />,
    nextArrow: <NewNextArrow />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-10">
      <h2 className="text-brand-black-light pointer-events-none mx-auto max-w-fit text-3xl font-bold">
        {" "}
        What our users say{" "}
      </h2>
      <div className="image-slider-container -z-10 mx-auto max-w-7xl">
        <Slider {...settings}>
          {data.userFeedbacks.map((fb, index) => (
            <div key={index} className="px-8 py-10">
              <ReviewCard
                child={fb.children}
                rating={fb.rating}
                img={fb.profilePhoto}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
