import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const HeadMessage = () => {
    return (
        <div className="px-5 py-5 justify-center">
            <Header />
            <SubHeader />
            <ComplianceList />
        </div>
    );
};

const Header = () => {
    const words = ['Create', 'Sign', 'Convert'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000);

        return () => clearInterval(interval);
    });

    return (
        <p className="my-3 font-bold text-center text-5xl">
            AI-Powered Unified Platform; <br />
            <span className='bg-clip-text text-transparent bg-gradient-to-l from-blue-900 to-blue-400'>{words[currentWordIndex]}</span> Effortlessly
        </p>
    );
};

const SubHeader = () => (
    <p className="my-10 text-center text-gray-600">
        Fast, Smart & Secure – Works with Google Drive, Dropbox, Salesforce & Your Favorite Business Tools
    </p>
);

const ComplianceList = () => (
    <div className="flex justify-center">
        <p className="flex">
            <ComplianceItem text="ESIGN Compliant" />
            <ComplianceItem text="UETA Approved" />
            <ComplianceItem text="eIDAS Certified" />
        </p>
    </div>
);

const ComplianceItem = ({ text }) => (
    <span className="flex items-center px-3">
        <img className="px-1" src="/src/assets/icons/tick.svg" alt="tick icon" />
        {text}
    </span>
); 

ComplianceItem.propTypes = {
    text: PropTypes.string.isRequired,
};

export default HeadMessage;