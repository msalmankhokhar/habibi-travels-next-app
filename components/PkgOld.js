import React from 'react'
import Image from 'next/image'
import PkgImg from '@/public/pkg.jpg'

export default function PkgOld({title, duration, price, makkahHotel, madinaHotel, makkahDuration, madinaDuration}) {
  return (
      <div className="pkgCard">
        <Image src={PkgImg} alt="mosque image" className="pkgImg" />
          <div className="textBox">
              <div className="top">
                  <div className="duration">
                      <span className="content">{duration}</span>
                      <span className="days">Days</span>
                  </div>
                  <div className="price"><span>&#163;</span>{price}</div>
              </div>
              <h2 className="title">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg> */}

                  {title}</h2>
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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                      <span>Visa</span>
                  </div>
                  <div className="feature">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                      <span>Transport</span>
                  </div>
                  <div className="feature">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                      <span>Hotels</span>
                  </div>
              </div>
              <button type='button' className="myBtn btnYellow">More Details</button>
          </div>
      </div>    
  )
}
