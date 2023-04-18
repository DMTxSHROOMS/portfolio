import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './NavbarStyles.css'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)



  return (
    <div className='header'>
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li >
                <Link to='/'>
                    Home
                </Link>
                <Link to='/pricing'>
                    Contact me
                </Link>
                

            </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
{click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
</div>
        
      
    </div>
  )
}

export default Navbar
