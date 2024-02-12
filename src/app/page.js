"use client"
import Image from "next/image";
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


export default function Home() {
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    
    const timeout = setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 

    return () => clearTimeout(timeout); 
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  
  return (
   <>
    <main className="flex min-h-screen flex-col bg-[#121212]  ">
     
      {isLoading ? ( // Conditionally render the Loader component
          <Loader />
        ) : (
          <>
              <div className="container mt-24 mx-auto px-12 py-4">
                <Header/>
                <HeroSection/>
                <AboutSection/>
                <ProjectSections/>
                <EmailSection/>
              </div>
              <Footer/>
              <button className="fixed bottom-[20%] left-10 text-2xl bg-gray-800 text-white py-2 px-4 rounded-md" onClick={scrollToTop}>
              <FontAwesomeIcon icon={faArrowAltCircleUp}/>
            </button>
         </>
        )}
      {/* <div className="container mt-24 mx-auto px-12 py-4">
      <HeroSection/>
      <AboutSection/>
      <ProjectSections/>
      <EmailSection/>
      </div> */}
     
    </main>
   </>
  );
}
