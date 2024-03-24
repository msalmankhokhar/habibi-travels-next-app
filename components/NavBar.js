import React from 'react'
import Image from 'next/image'
import Spinner from '@/public/Spinner.gif'
import Link from 'next/link';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Open_Sans } from 'next/font/google'
import LogoBox from './LogoBox';
 
const logoFont = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

const imageLoader = ({ src, width, quality }) => {
    return '/Spinner.gif'
}

function toggleMobileMenu(){
  document.getElementById("mobileMenu").classList.toggle("open");
}

export default function NavBar() {
  return (
    <nav id="nav">
      <LogoBox />
        <ul>
          <li className="navItem navLi"><Link className="navLink" href="/">Home</Link></li>
          <li className="navItem navLi"><Link className="navLink" href="/about">About Us</Link></li>
          <li className="navItem navLi"><Link className="navLink" href="/contact">Contact Us</Link></li>
        </ul>
        <FontAwesomeIcon icon={faBars} id='menuIcon' onClick={toggleMobileMenu} />
        <div id="mobileMenu" className=''>
          <Link className="navLink" href="/">Home</Link>
          <Link className="navLink" href="/about">About Us</Link>
          <Link className="navLink" href="/contact">Contact Us</Link>
        </div>
    </nav>
  )
}
