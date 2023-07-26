import React from "react";
import About from "./Components/About";
import Banner from "./Components/Banner";
import Contacts from "./Components/Contact";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";


const App = () => {
  return (
    <div  className='bg-site bg-no-repeat bg-cover overflow-hidden text-white bg-gray-900 body-font'>
    <Header />
    <Banner />
    <Nav />
    <About />
    <Skills />
    <Projects />
    <Contacts />
    {/* <div className='h-[4000px]'></div> */}
    <div className='pb-20'></div>
    </div>
  );
}

export default App;
