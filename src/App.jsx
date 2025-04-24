import { useState, useEffect } from 'react'
import {Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import NewPlayerForm from './Components/NewPlayerForm'
import './App.css'
import AllPlayers from './Components/AllPlayers'
import SinglePlayer from './Components/SinglePlayer'

function App() {
  const [players, setPlayers] = useState([])

  useEffect(()=>{
    const getPlayers = async () =>{
      const res = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2501-ftb-et-web-pt/players")
      const data = await res.json()
      setPlayers(data.data.players)
    }
    getPlayers()
  }, [])

  return (
    <>
    <div>
      <nav style={{display:"flex", justifyContent:"space-between"}}>
        <Link to="/">Home</Link>
        <Link to="/NewPlayerForm">New Player</Link>
      </nav>
      <h1>Puppy Bowl</h1>


  <Routes>
    <Route path='/' element={<AllPlayers players={players} setPlayers={setPlayers}/>} />
    <Route path='/SinglePlayer' element={<SinglePlayer players={players} setPlayers={setPlayers}/>} />
    <Route path='/players/:id' element={<SinglePlayer players={players}/>}/>
    <Route path='/NewPlayerForm' element={<NewPlayerForm setPlayers={setPlayers} />} />
  </Routes>

</div>
    </>
  )
}






export default App
