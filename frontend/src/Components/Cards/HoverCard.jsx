import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

export function HoverCard({ plan, currency, billingType }) {
  const dirRightRef = useRef(true);
  const [animate, setAnimate] = useState("");

  const formatPrice = (price) => {
    if (price.includes("per user")) {
      return price.replace(" per user", "");
    }
    return price;
  };
  useEffect(() => {
    if (dirRightRef.current) {
      setAnimate("animate-fade-right animate-duration-[0.3s]");
      dirRightRef.current = false;
    } else {
      setAnimate("animate-fade-left animate-duration-[0.3s]");
      dirRightRef.current = true;
    }

    const timer = setTimeout(() => setAnimate(""), 350);
    return () => clearTimeout(timer);
  }, [plan.price, billingType]);

  const showPerUser = plan.price.includes("per user");
  const formattedPrice = formatPrice(plan.price);

  return (
    <div className="group shadow-brand-pink bg-brand-blue flex h-[535px] w-[370px] flex-col justify-between shadow-lg ring-black transition duration-300 ring-inset hover:bg-white hover:ring-1">
      <div
        className={`mx-12 mt-8 flex flex-col space-y-3 text-white group-hover:text-black ${animate}`}
      >
        <h2 className="text-[25px] font-semibold">{plan.name.toUpperCase()}</h2>
        <p className="flex">
          <span className="mr-1 text-[20px] font-light">{currency}</span>
          <span className="text-[40px] leading-none">{formattedPrice}</span>
          {showPerUser ? (
            <span className="mt-1 ml-1 text-[15px] font-thin">
              /user/{billingType}
            </span>
          ) : (
            <span className="mt-1 ml-1 text-[15px] font-thin">
              /{billingType}
            </span>
          )}
        </p>

        {plan.minTotal && (
          <p className="flex text-[15px] font-thin">
            Minimum total of
            <span className="ml-1 font-semibold">{currency}</span>
            <span className="ml-1 font-semibold">{plan.minTotal}</span>
            <span className="font-semibold">/{billingType}</span>
          </p>
        )}

        {plan.name === "Free" && (
          <p className="bg-brand-gray/10 group-hover:bg-brand-gray w-fit rounded-sm px-3 py-2 text-[12px] font-light">
            No Credit Card required
          </p>
        )}

        <ul className="ml-5 list-disc">
          {plan.features.map((feature, index) => (
            <li key={index} className="text-[20px] font-light">
              {feature}
            </li>
          ))}
        </ul>

        {plan.minTotal && (
          <div className="flex justify-between text-[20px] font-light">
            <p>Monthly Total</p>
            <p>
              <span>{currency}</span>
              <span className={"ml-1"}>{plan.minTotal}</span>
            </p>
          </div>
        )}
      </div>

      <div className="mx-8 mb-8 flex">
        <button className="text-brand-blue group-hover:bg-brand-blue flex-1 cursor-pointer rounded-3xl bg-white py-3 text-[15px] transition duration-300 group-hover:text-white">
          Select Plan
        </button>
      </div>
    </div>
  );
}

HoverCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    minTotal: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  currency: PropTypes.string.isRequired,
  billingType: PropTypes.oneOf(["month", "year"]).isRequired,
};
