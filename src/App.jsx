
import './App.css'

function App(){
  return (
    <div className='app'>
     <h1>Welcome to React</h1>
    <MyForm/>
    </div>
  )
}

function MyForm(){
  return(
    <div className='card'>
      <input type="text" placeholder='Enter Your Name' />
      <button>Save</button>
    </div>
  )
}

export default App
