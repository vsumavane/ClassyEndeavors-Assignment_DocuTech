import { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

export function HoverCard({ plan, currency, billingType }) {
    const dirRightRef = useRef(true);
    const [animate, setAnimate] = useState('');
    
    const formatPrice = (price) => {
        if (price.includes('per user')) {
            return price.replace(' per user', '');
        }
        return price;
    };
    useEffect(() => {
        if(dirRightRef.current) {
            setAnimate('animate-fade-right animate-duration-[0.3s]');
            dirRightRef.current = false;
        }
        else {setAnimate('animate-fade-left animate-duration-[0.3s]');
            dirRightRef.current = true;
        }
        
        const timer = setTimeout(() => setAnimate(''), 350);
        return () => clearTimeout(timer);
    }, [plan.price, billingType]);


    const showPerUser = plan.price.includes('per user');
    const formattedPrice = formatPrice(plan.price);

    return (
        <div className="flex flex-col justify-between group h-[535px] w-[370px] shadow-brand-pink shadow-lg ring-inset hover:ring-1 ring-black bg-brand-blue hover:bg-white transition duration-300">
            <div className={`flex flex-col space-y-3 mt-8 mx-12 text-white group-hover:text-black ${animate}`}>
                <h2 className="text-[25px] font-semibold">
                    {plan.name.toUpperCase()}
                </h2>
                <p className="flex">
                    <span className="font-light text-[20px] mr-1">{currency}</span>
                    <span className="text-[40px] leading-none ">{formattedPrice}</span>
                    {showPerUser ? (
                        <span className="ml-1 mt-1 font-thin text-[15px] ">/user/{billingType}</span>
                    ) : (
                        <span className="ml-1 mt-1 font-thin text-[15px] ">/{billingType}</span>
                    )}
                </p>
                
                {plan.minTotal && (
                    <p className="flex font-thin text-[15px]">
                        Minimum total of
                        <span className="font-semibold ml-1">{currency}</span>
                        <span className="font-semibold ml-1 ">{plan.minTotal}</span>
                        <span className="font-semibold ">/{billingType}</span>
                    </p>
                )}
                
                {plan.name === "Free" && (
                    <p className="w-fit bg-brand-gray/10 px-3 rounded-sm py-2 text-[12px] font-light group-hover:bg-brand-gray">
                        No Credit Card required
                    </p>
                )}
                
                <ul className="list-disc ml-5">
                    {plan.features.map((feature, index) => (
                        <li key={index} className="font-light text-[20px]">
                            {feature}
                        </li>
                    ))}
                </ul>
                
                {plan.minTotal && (
                    <div className="flex justify-between font-light text-[20px]">
                        <p>Monthly Total</p>
                        <p>
                            <span >{currency}</span><span className={"ml-1"}>{plan.minTotal}</span>
                        </p>
                    </div>
                )}
            </div>
            
            <div className="flex mx-8 mb-8">
                <button className="flex-1 text-[15px] py-3 text-brand-blue bg-white group-hover:bg-brand-blue group-hover:text-white transition duration-300 rounded-3xl cursor-pointer">
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
        features: PropTypes.arrayOf(PropTypes.string).isRequired
    }).isRequired,
    currency: PropTypes.string.isRequired,
    billingType: PropTypes.oneOf(['month', 'year']).isRequired
};