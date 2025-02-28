import RatingStars from "./RatingStars";


function reviewcard(props) {
    return  (
        <>
        <div className=" shadow-gray-400 shadow-lg rounded-lg py-2 max-w-sm">
            <img className="ml-6 size-10 object-cover border-2 border-white rounded-full shadow-md shadow-neutral-400" src={props.img}/>
            <p className="px-14 py-4 font-light text-center text-gray-800">{props.child}</p>
            <div className="px-2 py-6 flex justify-center">
            <RatingStars rating={props.rating} />
            </div>
        </div>
        </>
    )
}

export default reviewcard;