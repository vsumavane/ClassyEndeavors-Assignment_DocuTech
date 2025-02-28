import PropTypes from 'prop-types';

function Button(prop) {
    return (
    <>
        <button className='flex bg-blue-900 hover:bg-blue-800 px-2 py-2 rounded-4xl cursor-pointer hover:shadow-2xl'>
            <img className='size-6 rounded-3xl ' src={prop.imgUrl}/>
            <a className='pl-2 pr-4 text-white font-light text-sm'>
            {prop.textContent}
            </a>
        </button>
    </>
    )
}
Button.propTypes = {
    textContent: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
};

export default Button;