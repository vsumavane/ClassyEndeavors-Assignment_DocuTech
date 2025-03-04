import RatingStars from "./RatingStars";


function reviewcard(props) {
    return  (
        <>
        <div className=" shadow-gray-400 shadow-lg rounded-lg py-2 max-w-sm transition duration-200 hover:shadow-xl hover:scale-102 overflow-hidden">
            <img className="ml-6 w-10 h-10 object-cover border-2 border-white rounded-full shadow-md shadow-neutral-400" src={props.img} alt="profile photo"/>
            <p className="text-sm px-14 py-4 font-light text-center text-brand-black-light">{props.child}</p>
            <div className="px-2 pb-5 flex justify-center">
            <RatingStars rating={props.rating} />
            </div>
        </div>
        </>
    )
}

export default reviewcard;