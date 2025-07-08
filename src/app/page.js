import React from "react"
import Navigation from "../components/navigation";
import Home1 from "./components/home1";
import Home2 from "./components/home2";
import Contact from "./components/contact";


const Home = () => {
   

  return (
    <Navigation>

      
      <Home1 />
      <Home2 />
      <Contact />

     </Navigation>
  );
};

export default Home;
