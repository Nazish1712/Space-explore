import React from 'react'
import {useState} from "react"

const Navbar = () => {
    
const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

    const navLinks = [
        {
        id : "home",
        number : "00",
        title : "HOME"
    },
        {
        id : "destination",
        number : "01",
        title : "DESTINATION"
    },
        {
        id : "crew",
        number: "02",
        title : "CREW"
    },
        {
        id : "technology",
        number : "03",
        title : "TECHNOLOGY"
    },
    ]
  return (
    <nav className="w-full pt-8 px-5 md:px-0 md:pt-0 lg:pt-8 flex items-center justify-between lg:justify-start">
            <div className="lg:ml-16 md:ml-10 shrink-0">
                <img alt="logo" src="logo.svg" className=" w-10 h-10 lg:w-12 lg:h-12"></img>
            </div>
            <div className="hidden lg:block flex-1 h-px z-10 bg-white/40 lg:ml-16 lg:-mr-8"></div>
            <div className="hidden md:block  bg-white/10 backdrop-blur-md md:py-8 md:pl-25 md:pr-10 lg:py-10 lg:pl-40 lg:pr-16 shrink-0">
                <ul className="flex text-font-white text-nav-style md:gap-10 lg:gap-12">
                {navLinks.map((link, index)=> (
                <li key={link.id} className="relative group cursor-pointer flex md:gap-2 md:tracking-wide lg:gap-3 lg:tracking-widest">
                    <span className="font-semibold">{link.number}</span>
                     <span>{link.title}</span>
                    <div className={`absolute md:-bottom-8 lg:-bottom-10 left-0 h-1 w-full  ${
                        index === 0 ? "bg-font-white" : "bg-transparent group-hover:bg-white/30"
                    }`}></div>
                    </li>
              ))}
                </ul>
            </div>
            <div className="md:hidden" onClick={()=>setMobileMenuIsOpen((prev)=>!prev)}>
                {mobileMenuIsOpen ?
                 (<img alt="menu-open" src="icon-close.svg" className="w-6 h-6"></img>):
                 (<img alt="menu-close" src="icon-hamburger.svg" className="w-6 h-6"></img>)
                 }
            </div>
            {mobileMenuIsOpen && 
            <div className="md:hidden bg-white/10 backdrop-blur-md fixed top-0 right-0 h-screen z-50 pt-8 pl-8 pr-5 w-[65%]">
                <ul className="flex flex-col text-font-white text-nav-style gap-6">
                {navLinks.map((link, index)=>(
                <li key={link.id} className="relative group cursor-pointer flex gap-2 tracking-wide" onClick={()=>setMobileMenuIsOpen(false)}>
                    <span className="font-semibold ">{link.number}</span>
                    <span>{link.title}</span>
                    <div className={`absolute h-1 ${
                        index === 0 ? "bg-font-white" : "bg-transparent group-hover:bg-white/30"
                    }`}></div>
                </li>
             ))}  
                </ul>
              
            </div>}
    </nav>
  )
}

export default Navbar