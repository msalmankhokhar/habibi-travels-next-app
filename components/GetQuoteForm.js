import React from 'react'
import styles from '@/styles/Home.module.css'

export default function GetQuoteForm() {
  return (
    <div id={styles.formBox} className='bg-theme-green'>
        <h1 className="text-center">Find Your Best Umrah Package</h1>
        <p className="text-center">Find the world&apos;s largest collection of Hajj & Umrah Packages</p>
        <form action="" id={styles.form}>
            <div className={styles.content}>
                <input type="text" name="name" id="" className={styles.formInput} placeholder="Name"/>
                <input type="email" name="name" id="" className={styles.formInput} placeholder="Email"/>
                <input type="text" name="name" id="" className={styles.formInput} placeholder="Number of people"/>
                <input type="text" name="name" id="" className={styles.formInput} placeholder="Days of Stay"/>
                <input type="text" name="name" id="" className={styles.formInput} placeholder="Departure Airport"/>
                <input type="text" name="name" id="" className={styles.formInput} placeholder="Arrival Airport"/>
                <input type="text" name="name" id="" className={styles.formInput} placeholder="Rooms"/>
                <input type="text" name="name" id="" className={styles.formInput} placeholder="Accomodation"/>
                <input type="text" name="name" id="" className={styles.formInput} placeholder="Accomodation"/>
                <input type="text" name="name" id="" className={styles.formInput} placeholder="Accomodation"/>
            </div>
            <button type="button" className="myBtn btnYellow">Get Quote</button>
        </form>
    </div>
  )
}
