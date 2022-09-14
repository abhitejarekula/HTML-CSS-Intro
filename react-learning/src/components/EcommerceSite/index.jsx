import React from 'react'
import logo from "./components/EcommerceSite"
import search from "./components/EcommerceSite"
import cart from "./components/EcommerceSite"

function EcommerceSite () {
    return ( 
    <div className='flex flex-col justify-between h-screen'>
      <nav className='flex justify-between bg-slate-300 p-5'>
        <div>
            <img className="my-auto mx-auto" src={logo}/>
            Cozy
        </div>

        <div>
            <ul>
                <li><a>Shop</a></li>
                <li><a>collective</a></li>
                <li><a>Designers</a></li>
                <li><a>About Us</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>

        <div>
            <ul>
            <li><button>=</button></li>
            <li><a><img src={search}/></a></li>
            <li><a><img src={cart}/></a></li>
            </ul>
        </div>
        </nav>
    </div>
  )
}
export default EcommerceSite