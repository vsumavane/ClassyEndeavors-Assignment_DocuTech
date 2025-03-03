import PropTypes from 'prop-types';
import icon from "/src/assets/icons/star.svg";

function RatingStars(props) {
    const stars = Math.floor(props.rating);

    return (
        <div className="flex">
            {Array(stars).fill().map((_, i) => (
                <img key={i} src={icon} alt="star" className="px-1 max-h-4 max-w-8" />
            ))}
        </div>
    );
}
RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default RatingStars;