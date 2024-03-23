import React from 'react'
import logo from '@/public/logo-white.png'
import Image from 'next/image'


export default function LogoBox() {
  const siteName = process.env.SITE_NAME
  return (
    <div className="logoBox">
        <Image className="logoImg" alt="logo" src={logo} width={200}/>
        <div className="logoText">
          <span className="logoTextSpan">HABIBI</span>
          <span className="logoTextSpan">TRAVELS</span>
        </div>
      </div>
  )
}
