
import React from 'react'
import './App.css'

function App(){
  const data = [
    {
    name : "Leo",
    img : "https://timesofindia.indiatimes.com/thumb/msid-104527735,width-1280,height-720,resizemode-4/104527735.jpg",
    rating : "90%",
  },
  {
    name : "Vikram",
    img : "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/436/1630436-h-18323ab5427d",
    rating : "95%",
  },
  {
    name : "Kaithi",
    img : "https://images.news18.com/ibnlive/uploads/2022/02/untitled-design-4-50-16449148684x3.png",
    rating : "98%",
  }
]
  return (
    <div className='app'>
    {/* <Welcome/> */}
    {
      data.map((movie,idx)=>(
        <MovieCard key={idx}
        img={movie.img}
        name={movie.name}
        rating={movie.rating}
        />
      ))
    }
    
    </div>
  )
}

// How JSX works behind creating elements in React.
function Welcome(){
  return (
React.createElement("div",{className:"greet-msg"},React.createElement("h1",{id:"head-msg"},"Welcome to React"))
  )
}

function MovieCard({img,name,rating}){
  
  return (
    <div className='movie-card'>
      <div className='img-sec'>
        <img src={img} alt="" />
      </div>
      <div className="mvname-sec">
        <h3>{name}</h3>
      </div>
      <div className="mvdetail-sec">
        <button>Watch Now</button>
        <p>Ratings: {rating}</p>
      </div>
    </div>
  )
}

export default App
