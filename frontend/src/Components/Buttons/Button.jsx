import './Button.css'
import PropTypes from 'prop-types';

function Button(props) {
    return (
    <>
        <button className='flex bg-blue-900 hover:bg-blue-800 px-2 py-2 rounded-4xl cursor-pointer hover:shadow-2xl'>
            <img className='size-12 rounded-3xl ' src={props.imgUrl}/>
            <a className='pl-2 pr-4 py-2 text-white font-light align-baseline text-lg'>
            {props.textContent}
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