import './App.css'
import NavBar from './Components/NavBar/NavBar'
import HeadMessage from './Components/Body/HeadMessage'
import ReviewCarousel from './Components/Carousel/ReviewsCarousel'

function App() {
  // const img = 'https://img.freepik.com/free-vector/illustration-share-icon_53876-5843.jpg?t=st=1740597330~exp=1740600930~hmac=7bdb0b9b6b8da2b633f5d89034c7e1f3891f54238eced4bc2143b84bf73c0121&w=1380';
  return (
    <>
    <NavBar/>
    <HeadMessage/>
    <ReviewCarousel/>
    </>
  )
}

export default App
