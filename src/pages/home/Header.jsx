import { useState, useEffect } from "react"

export default function Header() {

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        function handleResize(){
          setMenu(window.innerWidth >= 1024);
        };
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    return (
    <>
    <header id="header">
        <div className="menu-icon" onClick={(e)=> setMenu(!menu)}>
            <div className={`line line-1 ${menu ? 'menu-close' : ''}`}></div>
            <div className={`line line-2 ${menu ? 'menu-close' : ''}`}></div>
        </div>
        <img className="logo" src="/images/meta-logo.svg" alt="metaverx logo"/>
        {menu ? <button className="connect-wallet-button">Connect Wallet</button> : <img className="wallet-icon" src="/images/wallet-icon.svg" alt="wallet-icon" />}
    </header>
    <nav className="menu-container" style={{display: menu ? 'flex' : 'none'  }}>
      <div className="menu-icon" onClick={(e)=> setMenu(!menu)}>
          <div className={`line line-1 ${menu ? 'menu-close' : ''}`}></div>
          <div className={`line line-2 ${menu ? 'menu-close' : ''}`}></div>
      </div>
      <ul className="menu-list">
          <li className="menu-opt">Home</li>
          <li className="menu-opt">About</li>
          <li className="menu-opt">Units</li>
          <li className="menu-opt">Benefit</li>
          <li className="menu-opt">Whitepaper</li>
      </ul>
    </nav>
    </>
  )
}
