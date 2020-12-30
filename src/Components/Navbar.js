import React, { useState,useEffect } from 'react'
import '../Navbar.css'
import logo from './logo.png'
function Navbar() {
    const [nav, setNav] = useState(false)
        useEffect(() => {
            window.addEventListener('scroll',()=>{
                if(window.scrollY > 100){
                    setNav(true)
                }else{
                    setNav(false)
                }
            })
            return () => {
                window.addEventListener('scroll');
            }
        }, [])
    return (
        <div className={`navbar ${nav && 'nav_black'}`}>
            <img className='nav-logo' height='70px' width='130px' src={logo} alt =''/>
            <button className='btn btn-danger btn-nav'>Login</button>
        </div>
    )
}

export default Navbar
