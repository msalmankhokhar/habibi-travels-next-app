import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Contact.module.css";
import HeaderSmall from "@/components/HeaderSmall";
import GetQuoteForm from "@/components/GetQuoteForm";
import Pkg from "@/components/Pkg";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from '@/public/Spinner.gif'
import Head from "@/components/Head";

export default function Contact() {

  return (
    <>
      <Head title="About" desc="A next JS app created by Salman" />
      <HeaderSmall title="Contact Us"/>
      <main id="main" className="container my-5">
        <h1 id={styles.mainHeading} className="text-center">Leave a messege for us</h1>
        <form className={styles.form} action="">
          <div className={styles.content}>
            <input type="text" className={styles.formInput} placeholder="Name" />
            <input type="email" className={styles.formInput} placeholder="Email" />
          </div>
            <textarea name="" id="" cols="30" rows="10" className={styles.formInput} placeholder="Your Messege"></textarea>
            <button type="button" className="myBtn btnYellow">Submit</button>
        </form>
      </main>
      <Footer/>
    </>
  );
}

// export async function getServerSideProps(context){
//   return {
//     props : {}
//   }
// }
