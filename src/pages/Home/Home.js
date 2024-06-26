// import React, { useRef, useEffect } from "react";
// import "./Home.css";
// import backgroundvdo from "./backgroundvdo.mp4";
// import Navbar from "../../Navbar/Navbar";
// import { Link } from "react-router-dom";


// function Home() {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.addEventListener("loadedmetadata", () => {
//         videoRef.current.currentTime = 20;
//         videoRef.current.play();
//         setTimeout(() => {
//           videoRef.current.pause();
//           videoRef.current.currentTime = 40;
//         }, 9999);
//         // 10000
//       });
//     }
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Link to={"/report"}>
//         <button>See Report</button>
//       </Link>
//       <Link to={"/input"}>
//         <button>Input</button>
//       </Link>
//     </>
//   );
// }

// export default Home;

import React, { useRef, useEffect } from "react";
import "./Home.css";
import backgroundvdo from "./backgroundvdo.mp4";
import Navbar from "../../Navbar/Navbar";
import { Link } from "react-router-dom";
import Img1 from './img1.webp'

function Home() {


  return (
    <>
      <Navbar />
      <div className="homecontainer">
        <Link to={"/report"} className="button-container">
          <button >See Report</button>
        </Link>
        <Link to={"/input"} className="button-container">
          <button>Input</button>
        </Link>
      </div>
    </>
  );
}

export default Home;

