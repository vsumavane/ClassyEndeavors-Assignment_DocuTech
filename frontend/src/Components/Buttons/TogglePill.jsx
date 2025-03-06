import PropTypes from "prop-types";
import { useRef } from "react";

export function TogglePill({ options, value, onChange }) {
  const option1Ref = useRef(null);
  const option2Ref = useRef(null);

  const handleOptionChange = (optionValue) => {
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div className="group relative flex h-14 w-fit items-center rounded-full bg-white ring-[0.5px] ring-black ring-inset">
      <div
        className={`bg-brand-blue group-hover:bg-brand-blue-mid absolute z-0 h-full rounded-full transition-all duration-300 ${
          value === options[0].value ? "left-0 w-[50%]" : "left-1/2 w-[50%]"
        }`}
      />
      <input
        type="radio"
        id={options[0].value}
        name="toggleOption"
        value={options[0].value}
        className="peer/option1 hidden"
        checked={value === options[0].value}
        onChange={() => handleOptionChange(options[0].value)}
        ref={option1Ref}
      />
      <label
        htmlFor={options[0].value}
        className="relative z-10 cursor-pointer px-10 py-2 text-sm transition duration-300 peer-not-checked/option1:text-gray-800 peer-checked/option1:text-white"
      >
        {options[0].label}
      </label>

      <input
        type="radio"
        id={options[1].value}
        name="toggleOption"
        value={options[1].value}
        className="peer/option2 hidden"
        checked={value === options[1].value}
        onChange={() => handleOptionChange(options[1].value)}
        ref={option2Ref}
      />
      <label
        htmlFor={options[1].value}
        className="relative z-10 cursor-pointer px-10 py-2 text-sm transition duration-300 peer-not-checked/option2:text-gray-800 peer-checked/option2:text-white"
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
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
