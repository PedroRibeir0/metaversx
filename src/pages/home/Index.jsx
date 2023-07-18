'use client'
import '../../css/home/home.css'
import '../../css/index/index.css'
import Header from './Header'
import Gamefi from './Gamefi'
import Games from './Games'
import Units from './Units'
import Benefits from './Benefits'
import Footer from './Footer'



export default function Index() {
  return (
    <div className="app">
        <Header/>
        <Gamefi/>
        <Games/>
        <div className="looper-bg">
          <Units/>
          <Benefits/>
          <Footer/>
        </div>
    </div>
  )
}

