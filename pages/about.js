import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/About.module.css";
import HeaderSmall from "@/components/HeaderSmall";
import GetQuoteForm from "@/components/GetQuoteForm";
import Pkg from "@/components/Pkg";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from '@/public/Spinner.gif'
import Head from "@/components/Head";

export default function About() {

  return (
    <>
      <Head title="About" desc="A next JS app created by Salman" />
      <HeaderSmall title="About Us"/>
      <main id="main" className="container my-5">
        <h1 id={styles.mainHeading} className="text-center">About <span className="span">HABIBI TRAVELS</span></h1>
        <div>
            <p><strong>HABIBI TRAVELS</strong> is a leading travel service provider for Hajj, Umrah, and special Ramadan Tours to facilitate your Holy Journey. If you are seeking a reliable source for your sacred obligations, you have come to the right place. Umrah Insights is your best choice for fulfilling the righteous duties of Islamic Obligations.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident modi rerum maxime eos eum tempore inventore? Est aut dolore, totam necessitatibus tempore laboriosam consequuntur aliquid et! Porro mollitia vitae hic minima officiis nemo! Vel deserunt animi voluptatibus fuga nam officia consequatur quod mollitia nobis aliquid repellendus illo magnam quae reiciendis asperiores sequi dolore, similique aliquam maiores quisquam natus illum exercitationem! Libero molestias nam, voluptatibus maiores at quia quo atque aut facilis, in, fugiat cumque alias placeat? Esse nulla, voluptas quo, eum tempore placeat, quod deserunt temporibus aperiam asperiores praesentium perspiciatis! Laborum nesciunt laboriosam architecto officiis debitis vitae quos corrupti ullam.</p>
        </div>
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
