import PropTypes from "prop-types";
import { useState, useEffect, useMemo } from "react";
import img1 from "/src/assets/icons/tick.svg";

const HeadMessage = () => {
  return (
    <div className="my-10 justify-center">
      <Header />
      <SubHeader />
      <ComplianceList />
    </div>
  );
};

const Header = () => {
    const words = useMemo(() => ["Create", "Sign", "Convert"], []);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [displayedWord, setDisplayedWord] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];
            
            // If paused, don't do anything (waiting period after typing word)
            if (isPaused) return;
            
            if (isDeleting) {
                if (charIndex > 0) {
                    setDisplayedWord(currentWord.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
                }
            } else {
                if (charIndex < currentWord.length) {
                    setDisplayedWord(currentWord.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    // Word is fully typed - pause before deleting
                    setIsPaused(true);
                    setTimeout(() => {
                        setIsPaused(false);
                        setIsDeleting(true);
                    }, 2000); // 2 second delay
                }
            }
        };

        // Only set interval if not paused
        if (!isPaused) {
            const typingInterval = setInterval(handleTyping, isDeleting ? 30 : 50);
            return () => clearInterval(typingInterval);
        } else {
            // No need for interval when paused
            return () => {};
        }
    }, [charIndex, isDeleting, currentWordIndex, words, isPaused]);

    return (
        <h1 className="my-3 font-bold text-center text-6xl pointer-events-none">
            AI-Powered Unified Platform; <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-0% from-brand-blue-down via-55% via-brand-blue to-100% to-brand-blue">
                {displayedWord}{" "}
            </span>
            Effortlessly
        </h1>
    );
};

const SubHeader = () => (
  <p className="my-10 text-center text-brand-black-light pointer-events-none">
    Fast, Smart & Secure – Works with Google Drive, Dropbox, Salesforce & Your
    Favorite Business Tools
  </p>
);

const ComplianceList = () => (
  <div className="flex justify-center">
    <p className="flex pointer-events-none font-light text-brand-black-light text-sm">
      <ComplianceItem text="ESIGN Compliant" />
      <ComplianceItem text="UETA Approved" />
      <ComplianceItem text="eIDAS Certified" />
    </p>
  </div>
);

const ComplianceItem = ({ text }) => (
  <span className="flex text-brand-black-light items-center px-3">
    <img className="px-1" src={img1} alt="tick icon" />
    {text}
  </span>
);

ComplianceItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadMessage;
