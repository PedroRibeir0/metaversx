'use client'
import '../../css/home/home.css'
import '../../css/index/index.css'
import Gamefi from './Gamefi'
import Games from './Games'
import Header from './Header'



export default function Index() {
  return (
    <div className="app">
        <Header/>
        <Gamefi/>
        <Games/>
    </div>
  )
}

