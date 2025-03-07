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

    // Check if component is in viewport
    const checkVisibility = () => {
      const element = document.querySelector("h1");
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (!isVisible && !isPaused) {
        setIsPaused(true);
      } else if (
        isVisible &&
        isPaused &&
        !isDeleting &&
        charIndex === words[currentWordIndex].length
      ) {
        // Don't unpause if we're in the normal pause after completing a word
      } else if (isVisible && isPaused) {
        setIsPaused(false);
      }
    };

    // Set up scroll listener
    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // Check initial state

    // Only set interval if not paused
    if (!isPaused) {
      const typingInterval = setInterval(handleTyping, isDeleting ? 30 : 50);
      return () => {
        clearInterval(typingInterval);
        window.removeEventListener("scroll", checkVisibility);
      };
    } else {
      // Clean up scroll listener when paused
      return () => window.removeEventListener("scroll", checkVisibility);
    }
  }, [charIndex, isDeleting, currentWordIndex, words, isPaused]);

  return (
    <h1 className="pointer-events-none my-3 text-center text-6xl font-bold">
      AI-Powered Unified Platform; <br />
      <span className="from-brand-blue-down via-brand-blue to-brand-blue bg-linear-to-r from-0% via-55% to-100% bg-clip-text text-transparent">
        {displayedWord}{" "}
      </span>
      Effortlessly
    </h1>
  );
};

const SubHeader = () => (
  <p className="text-brand-black-light pointer-events-none my-10 text-center">
    Fast, Smart & Secure – Works with Google Drive, Dropbox, Salesforce & Your
    Favorite Business Tools
  </p>
);

const ComplianceList = () => (
  <div className="flex justify-center">
    <p className="text-brand-black-light pointer-events-none flex text-sm font-light">
      <ComplianceItem text="ESIGN Compliant" />
      <ComplianceItem text="UETA Approved" />
      <ComplianceItem text="eIDAS Certified" />
    </p>
  </div>
);

const ComplianceItem = ({ text }) => (
  <span className="text-brand-black-light flex items-center px-3">
    <img className="px-1" src={img1} alt="tick icon" />
    {text}
  </span>
);

ComplianceItem.propTypes = {
  text: PropTypes.string.isRequired,
};

export default HeadMessage;
