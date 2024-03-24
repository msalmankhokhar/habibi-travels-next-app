import React from 'react'
import Image from 'next/image'
import PkgImg from '@/public/pkg.jpg'

export default function Pkg({t, d, p}) {
  return (
    <div className="pkgCard">
        <Image className="pkgImg" src={PkgImg} alt="" />
        <div className="textBox">
            <h2>{t}</h2>
            <div className="featureBox">
                <div className="feature">
                    <h3>Duration</h3>
                    <span>{d} Days</span>
                </div>
                <div className="feature">
                    <h3>Room Type</h3>
                    <span>Quad Sharing</span>
                </div>
                <div className="feature">
                    <h3>Price</h3>
                    <span>&euro; {p}</span>
                </div>
            </div>
            <button type="button" className="myBtn btnYellow">View Package Detail</button>
            </div>
        </div>
  )
}
