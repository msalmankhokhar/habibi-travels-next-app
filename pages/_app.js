import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import NextTopLoader from 'nextjs-toploader';
import ReactLoadingBar from "react-top-loading-bar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  // console.log("I am _app.js")
  useEffect(() => {
      AOS.init({
        duration: 500,
        once: false,
      })
     router.events.on("routeChangeStart", () => {
          setProgress(40);
        });
     router.events.on("routeChangeComplete", () => {
          setProgress(100);
        });
    
    }, []);
    return <>
          <ReactLoadingBar color="#fd680b" progress={progress} waitingTime={400} onLoaderFinished={() => {setProgress(0);}} height={4}/>
          <Component {...pageProps}/>
          </>
}
