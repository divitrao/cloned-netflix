import React, { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
    const [show,handleshow] = useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if (window.scrollY>=200){
                handleshow(true)
                
            }
            else{
                handleshow(false)
            }
        })
        return ()=>{
            window.removeEventListener('scroll')
        }
    },[])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
                <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt='Netflix logo '>
                </img>
        </div>
    )
}
