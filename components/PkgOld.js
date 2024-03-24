import React from 'react'
import Image from 'next/image'
import PkgImg from '@/public/pkg.jpg'
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PkgOld({title, duration, price, makkahHotel, madinaHotel, makkahDuration, madinaDuration}) {
  return (
      <div className="pkgCard">
        {/* <Image src={PkgImg} alt="mosque image" className="pkgImg" /> */}
          <div className="textBox">
              <div className="top">
                  <div className="duration">
                      <span className="content">{duration}</span>
                      <span className="days">Days</span>
                  </div>
                  <div className="price"><span>&#163;</span>{price}</div>
              </div>
              <h2 className="title">{title}</h2>
              <div className="hotelContainer">
                  <div className="hotel">
                      <h3 className="hotelTitle">{makkahHotel} <span>Hotel in Makkah</span></h3>
                      <span className="hotelDuration">{makkahDuration} Days Stay</span>
                  </div>
                  <div className="hotel">
                      <h3 className="hotelTitle">{madinaHotel} <span>Hotel in Madinah</span></h3>
                      <span className="hotelDuration">{madinaDuration} Days Stay</span>
                  </div>
              </div>
              <div className="featureBox">
                  <div className="feature">
                      <FontAwesomeIcon className='icon' icon={faCircleCheck}/>
                      <span>Visa</span>
                  </div>
                  <div className="feature">
                      <FontAwesomeIcon className='icon' icon={faCircleCheck}/>
                      <span>Transport</span>
                  </div>
                  <div className="feature">
                      <FontAwesomeIcon className='icon' icon={faCircleCheck}/>
                      <span>Hotels</span>
                  </div>
              </div>
              <button type='button' className="myBtn btnYellow">More Details</button>
          </div>
      </div>    
  )
}
