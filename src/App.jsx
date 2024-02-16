import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePrincipal from "./pages/homePrincipal"
import Buy from "./pages/buy"
import Rent from "./pages/rent"
import Sell from "./pages/sell"
import HomeLoans from "./pages/homeLoans"
import AgentFinder from "./pages/agentFinder"
import ManageRentals from "./pages/manageRentals"
import Abvertise from "./pages/advertise"
import Help from "./pages/help"
import MenuPrincipal from './menuPrincipal/menu'

function App() {
  
  return (
    <>
        <BrowserRouter>
         <MenuPrincipal/>
          <Routes>
            <Route path='/' element={ <HomePrincipal/>} />
            <Route path='/buy' element={ <Buy/> } />
            <Route path='/rent' element={ <Rent/> } />
            <Route path='/sell' element={ <Sell/> } />
            <Route path='/homeLoans' element={ <HomeLoans/> } />
            <Route path='/agentFinder' element={ <AgentFinder/> } />
            <Route path='/manageRentals' element={ <ManageRentals/> } />
            <Route path='/abvertise' element={ <Abvertise/> } />
            <Route path='/help' element={ <Help/> } />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
