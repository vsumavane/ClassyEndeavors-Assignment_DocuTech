import PropTypes from 'prop-types';

function RatingStars(props) {
    const stars = Math.floor(props.rating);

    return (
        <div className="flex">
            {Array(stars).fill().map((_, i) => (
                <img key={i} src="/src/assets/icons/star.svg" alt="star" className="px-1" />
            ))}
        </div>
    );
}
RatingStars.propTypes = {
    rating: PropTypes.number.isRequired,
};

export default RatingStars;