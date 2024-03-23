import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import GetQuoteForm from "@/components/GetQuoteForm";
import Pkg from "@/components/Pkg";
import Footer from "@/components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import Spinner from '@/public/Spinner.gif'
import Head from "@/components/Head";

// const API_LINK = "http://192.168.100.125:5000"
const API_LINK = "https://maliksalman138.pythonanywhere.com"


export default function Home() {

  const fetchPkgs = async ()=>{
    let resp = await fetch(`${API_LINK}/api/pkgs`, {
      headers : {
        Accept : 'application/json'
      }
    })
    try {
      let json = await resp.json()
      // return json
      setPkgList(json.list)
    } catch (error) {
      console.log(resp)
      return []
    }
  }
  
  const [pkgList, setPkgList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    fetchPkgs().then(()=>{
      setLoading(false)
    })
  }, [])

  return (
    <>
      <Head title="Home" desc="A next JS app created by Salman" />
      <Header/>
      <main id="main" className="container mb-5">
        <GetQuoteForm/>
        <div id={styles.pkgsBox}>
          <h1 className="my-5 text-center">Special Umrah Pakcages</h1>
          <div className={styles.content}>
          {
            pkgList.map((pkgObj)=>{
              return <Pkg key={pkgList.indexOf(pkgObj)} t={pkgObj.title} d={pkgObj.duration} p={pkgObj.price} />
            }) 
          }
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

// export async function getServerSideProps(context){
//   const json = await fetchPkgs()
//   return {
//     props : {
//       pkgList : json.list
//     }
//   }
// }
