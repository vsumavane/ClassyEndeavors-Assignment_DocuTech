import PropTypes from 'prop-types';
import { useRef } from 'react';

export function TogglePill({ options, value, onChange }) {
    const option1Ref = useRef(null);
    const option2Ref = useRef(null);
    
    const handleOptionChange = (optionValue) => {
        if (onChange) {
            onChange(optionValue);
        }
    };

    return(
        <div className="group relative flex h-14 items-center bg-white ring-inset ring-[0.5px] ring-black rounded-full w-fit">
            <div 
                className={`absolute h-full bg-brand-blue group-hover:bg-brand-blue-mid rounded-full transition-all duration-300 z-0 ${
                    value === options[0].value ? "left-0 w-[50%]" : "left-1/2 w-[50%]"
                }`}
            />
            <input
                type="radio"
                id={options[0].value}
                name="toggleOption"
                value={options[0].value}
                className="hidden peer/option1"
                checked={value === options[0].value}
                onChange={() => handleOptionChange(options[0].value)}
                ref={option1Ref}
            />
            <label
                htmlFor={options[0].value}
                className="relative z-10 px-10 py-2 text-sm cursor-pointer transition duration-300 peer-checked/option1:text-white peer-not-checked/option1:text-gray-800"
            >
                {options[0].label}
            </label>
            
            <input
                type="radio"
                id={options[1].value}
                name="toggleOption"
                value={options[1].value}
                className="hidden peer/option2"
                checked={value === options[1].value}
                onChange={() => handleOptionChange(options[1].value)}
                ref={option2Ref}
            />
            <label
                htmlFor={options[1].value}
                className="relative z-10 px-10 py-2 text-sm cursor-pointer transition duration-300 peer-checked/option2:text-white peer-not-checked/option2:text-gray-800"
            >
                {options[1].label}
            </label>
        </div>
    );
}

TogglePill.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        })
    ).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
