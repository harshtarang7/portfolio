"use client"
import Header from "./Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectCard from "./components/ProjectCard";
import ProjectSections from "./components/ProjectSections";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleUp } from "@fortawesome/free-solid-svg-icons";
import Loader from "./components/Loader";
import {PageTransition} from '@steveeeie/react-page-transition'
import Skills from "./components/Skills";
import {motion , useScroll} from 'framer-motion'



export default function Home() {
  const { scrollYProgress }= useScroll()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  
  return (

    <main className="flex min-h-screen flex-col bg-[#121212]  ">
    
    <motion.div  style={{
                  position: 'sticky',
                  top:'60px',
                  width: '100vw',
                  height:'5px',
                  zIndex:99,
                  backgroundColor :'#6547ff',
                  scaleX:scrollYProgress,
                  transformOrigin: 'left'
                }}>

                </motion.div>
              <div className="container mt-24 mx-auto px-12 py-4">
             
                <Header/>
                
                <HeroSection/>
                <AboutSection/>
                {/* <Skills/> */}
                <ProjectSections/>
                <EmailSection/>
              <button className=" absolute top-[380%] left-10 text-2xl bg-gray-800 text-white py-2 px-4 rounded-md lg:block sm:hidden xs:hidden " onClick={scrollToTop}>
              <FontAwesomeIcon icon={faArrowAltCircleUp} />
            </button>
              </div>
              <Footer/>
        
      {/* <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AboutSection/>
      <ProjectSections/>
      <EmailSection/>
      </div> */}
    
    </main>
  );
}
