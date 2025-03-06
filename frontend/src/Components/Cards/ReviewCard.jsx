import RatingStars from "./RatingStars";

function reviewcard(props) {
  return (
    <>
      <div className="max-w-sm overflow-hidden rounded-lg py-2 shadow-lg shadow-gray-400 transition duration-200 hover:scale-102 hover:shadow-xl">
        <img
          className="ml-6 h-10 w-10 rounded-full border-2 border-white object-cover shadow-md shadow-neutral-400"
          src={props.img}
          alt="profile photo"
        />
        <p className="text-brand-black-light px-14 py-4 text-center text-sm font-light">
          {props.child}
        </p>
        <div className="flex justify-center px-2 pb-5">
          <RatingStars rating={props.rating} />
        </div>
      </div>
    </>
  );
}

export default reviewcard;
