
import AffichageRecette from './Components/AffichageRecette'
import './App.css'
import Navbar from "./Components/Navbar"
import Bar from "./Components/Search"
import Post from "./Components/Post"


function App() {
 

  return (
    <>
    
     <Navbar/>
     <h1 className="text-3xl font-bold">
      Let's  Cook
      </h1>
     <Bar/>
     <h2>Toutes les recettes</h2>
    
    <AffichageRecette/>
    </>
  )
}

export default App
