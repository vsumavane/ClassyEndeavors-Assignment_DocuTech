import axis from "../../assets/icons/axis.svg";

export function ToggleCross(props) {
    // eslint-disable-next-line react/prop-types
    const { state } = props;
    
    return (
        <>
        <div>
            <img src={axis} alt="axis icon" className="absolute" />
            <img 
                src={axis} 
                alt="axis icon rotated" 
                className={`transition duration-200 ${state === '+' ? 'opacity-100 rotate-90' : 'opacity-0'}`}
            />
        </div>
            
        </>
    );
}
