import prev from '../../assets/icons/prev.svg'
import next from '../../assets/icons/next.svg'

export default function ScrollButton(props) {
    // eslint-disable-next-line react/prop-types
    const {type, className, onclick, style} = props;
    return (
        <button className={`${className} flex justify-center px-5 py-4 bg-brand-blue rounded-full hover:shadow-lg hover:bg-(--brand-blue-800) active:scale-95 shadow-gray-400 cursor-pointer transition duration-150`} onClick={onclick} style={style}>
            {type === "prev" ? <img src={prev}/> : null} 
            {type === "next" ? <img src={next}/> : null}
        </button>
    )
}