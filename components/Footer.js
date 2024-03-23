import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo-white.png'
import LogoBox from './LogoBox'

export default function Footer() {
  return (
    <footer id='footer' className="bg-theme-green">
    <div className="upper">
        <div className="column">
            <LogoBox />
            <p>{process.env.SiteName} provides cost-effective Umrah and Hajj services for Muslim individuals and families</p>
        </div>
        <div className="column">
            <h4>Quick Links</h4>
            <div className="subColumn">
                <span>Home</span>
                <span>Before You Travel</span>
                <span>Terms And Conditions</span>
                <span>Privacy Policy</span>
                <span>FAQs</span>
                <span>About Us</span>
                <span>Contact Us</span>
            </div>
        </div>
    
        <div className="column">
            <h4>Contact Us</h4>
            <span>Flat 89d 4 Mann Island, Liverpool, Merseyside, United Kingdom, L3 1BP</span>
            <span>7404 Av Champagneur, Montréal, QC H3N 2J9</span>
            <span>Info@umrahinsights.com</span>
            <span>+447482832114</span>
            <span>+1514-999-8409</span>
        </div>
    </div>
    <div className="lower myBtn btnYellow text-center noBorderRadius">
        &copy; {process.env.SiteName} 2024 All rights reserved
    </div>
</footer>
  )
}
