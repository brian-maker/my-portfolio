import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './components/pages/Home'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Footer from './components/common/Footer'
function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <div className="fl
        ex-grow">
          <Routes>
            <Route path='/' exact Component={Home}/>
            <Route path='/Portfolio' Component={Portfolio}/>
            <Route path='/Contact' Component={Contact}/>
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  )
}

export default App