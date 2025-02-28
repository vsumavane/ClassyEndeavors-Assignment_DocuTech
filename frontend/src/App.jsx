import './App.css'
import ReviewCard from './Components/Cards/ReviewCard';

import data from './Components/data';

function App() {
  // const img = 'https://img.freepik.com/free-vector/illustration-share-icon_53876-5843.jpg?t=st=1740597330~exp=1740600930~hmac=7bdb0b9b6b8da2b633f5d89034c7e1f3891f54238eced4bc2143b84bf73c0121&w=1380';
  return (
    <>
    <ReviewCard img={data.userFeedbacks[0].profilePhoto} child={data.userFeedbacks[0].children} rating={data.userFeedbacks[0].rating}/>
    </>
  )
}

export default App
