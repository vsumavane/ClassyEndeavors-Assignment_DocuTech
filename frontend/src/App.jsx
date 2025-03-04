import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HeadMessage from './Components/Body/HeadMessage'
import ReviewCarousel from './Components/Carousel/ReviewsCarousel'
import FileGetter from './Components/Body/FileGetter'
import TextStatement from './Components/Body/TextStatement'
import { Logos } from './Components/Body/Logos'
import Footer from './Components/Footer/Footer'
import WhyChooseDocuTech from './Components/Body/WhyChooseDocuTEch'
import Subscription from './Components/Body/Subscription'
import FAQSection from './Components/Body/FAQ'

function App() {
  return (
    <>
    <NavBar/>
    <HeadMessage/>
    <FileGetter/>
    <TextStatement/>
    <Logos/>
    <ReviewCarousel/>
    <WhyChooseDocuTech/>
    <Subscription/>
    <FAQSection/>
    <Footer/>
    </>
  )
}

export default App
