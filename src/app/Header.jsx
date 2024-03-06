"use client"
import React, { useState } from "react";
import Link from "next/link";
import './globals.css'
import NavLink from "./components/NavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import MenuOverlay from "./components/MenuOverlay";




const navLinks=[
  {
    title:"About",
    path:"#about"
  },
  {
    title:"Projects",
    path:"#Projects"
  },
  {
    title:"Contact",
    path:"#Contact"
  },
  
]

export default function Header() {
 
  const[navbarOpen,setNavbarOpen]=useState(false);

  const handleClick = (href) => (e) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setNavbarOpen(false); // Close the navbar after clicking a link on mobile
  };
  return (
    <nav className="fixed top-0 py-4 left-0 right-0 z-10 bg-[#121212]  bg-opacity-90 ">
      
      <div className="flex flex-wrap items-center justify-center mx-auto px-7">
        
        <div>
        
        </div>
        
        <div className="mobile-menu block md:hidden  py-3">
          {
            !navbarOpen ?
            (
              <button onClick={()=>setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                  <FontAwesomeIcon icon={faBars}/>
              </button>
            )
            :
            (
              <button onClick={()=>setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white">
                <FontAwesomeIcon icon={faClose}/>
              </button>
            )
          }
        </div>

        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex gap-7 p-4 md:p-0 md:flex-row md:space-x--8 mt-0">
            {
              navLinks.map((linkName,i)=>{
                return(
                  <li key={i} >
                    <NavLink href={linkName.path} title={linkName.title} onClick={handleClick(linkName.path)} />
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
      {
        navbarOpen ? <MenuOverlay links={navLinks}/> : null
      }
    </nav>
  );
}
