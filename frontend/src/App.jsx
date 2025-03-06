import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeadMessage from "./Components/Body/HeadMessage";
import ReviewCarousel from "./Components/Carousel/ReviewsCarousel";
import FileGetter from "./Components/Body/FileGetter";
import TextStatement from "./Components/Body/TextStatement";
import { Logos } from "./Components/Body/Logos";
import Footer from "./Components/Footer/Footer";
import WhyChooseDocuTech from "./Components/Body/WhyChooseDocuTEch";
import Subscription from "./Components/Body/Subscription";
import FAQSection from "./Components/Body/FAQ";
import Background from "./Components/Body/Background";

function App() {
  return (
    <div className="">
      <NavBar />
      <HeadMessage />
      <Background />
      <div id="features" className="">
        <FileGetter />
        <TextStatement />
        <Logos />
      </div>
      <ReviewCarousel />
      <Background />
      <div id="why-choose-us" className="">
        <WhyChooseDocuTech />
      </div>
      <div id="pricing">
        <Subscription />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
