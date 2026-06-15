import './App.css'
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Destination from "./components/Destination"
import Technology from "./components/Technology"
import Crew from "./components/Crew"
import Error from "./components/Error"
import {createBrowserRouter, Outlet} from "react-router-dom"

function App() {
 

  return (
    <div className="bg-black min-h-dvh md:h-dvh md:overflow-hidden">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Home/>
      },
      {
        path : "/destination",
        element : <Destination/>
      },
      {
        path : "technology",
        element : <Technology/>
      },
      {
        path : "crew",
        element : <Crew/>
      }
    ],
    errorElement : <Error/>
  }
])

export default appRouter
