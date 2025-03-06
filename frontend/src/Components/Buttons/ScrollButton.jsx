import prev from "../../assets/icons/prev.svg";
import next from "../../assets/icons/next.svg";

export default function ScrollButton(props) {
  // eslint-disable-next-line react/prop-types
  const { type, className, onclick, style } = props;
  return (
    <button
      className={`${className} bg-brand-blue hover:bg-brand-blue-mid flex cursor-pointer justify-center rounded-full px-5 py-4 transition duration-150 hover:shadow-lg hover:shadow-gray-400 active:scale-95`}
      onClick={onclick}
      style={style}
    >
      {type === "prev" ? <img src={prev} /> : null}
      {type === "next" ? <img src={next} /> : null}
    </button>
  );
}
