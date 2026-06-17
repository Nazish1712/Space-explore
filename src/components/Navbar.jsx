import React from 'react'
import {useState} from "react"
import {Link} from "react-router-dom"


const Navbar = () => {
    
const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)

const [activeTab, setActiveTab] = useState("home")

    const navLinks = [
        {
        id : "home",
        number : "00",
        title : "HOME",
        to : "/"
    },
        {
        id : "destination",
        number : "01",
        title : "DESTINATION",
        to : "/destination"
    },
        {
        id : "crew",
        number: "02",
        title : "CREW",
        to : "/crew"
    },
        {
        id : "technology",
        number : "03",
        title : "TECHNOLOGY",
        to : "/technology"
    },
    ]

  return (
    <nav className="fixed top-0 w-full pt-8 px-5 md:px-0 md:pt-0 lg:pt-8 flex items-center justify-between lg:justify-start z-50 transition-all ">
            <div className="lg:ml-16 md:ml-10 shrink-0 cursor-pointer">
            <Link to="/" onClick={()=>setActiveTab("home")} >
                <img alt="logo" src="logo.svg" className=" w-10 h-10 lg:w-12 lg:h-12"></img>
            </Link>
            </div>
            <div className="hidden lg:block flex-1 h-px z-10 bg-white/40 lg:ml-16 lg:-mr-8"></div>
            <div className="hidden md:block  bg-white/10 backdrop-blur-md md:py-8 md:pl-25 md:pr-10 lg:py-10 lg:pl-40 lg:pr-16 shrink-0">
                <ul className="flex text-nav-style md:gap-10 lg:gap-12">
                {navLinks.map((link, index)=> (
                  <li key={link.id} className={`relative group cursor-pointer  md:tracking-wide  lg:tracking-widest transition-colors duration-300 ${
                   activeTab === link.id ? "text-font-white" : "text-white/70 hover:text-font-white"
                   }`} >
                   <Link to={link.to} className="flex md:gap-2  lg:gap-3 w-full h-full items-center md:text-lg lg:text-xl " onClick={()=>setActiveTab(link.id)}>
                    <span className="font-semibold">{link.number}</span>
                     <span>{link.title}</span>
                     </Link>
                    <div className={`absolute md:-bottom-8 lg:-bottom-10 left-0 h-1 w-full transition-transform bg-font-white origin-left duration-300 ease-out ${
                         activeTab === link.id  ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 bg-white/50"
                    }`}></div>
                    </li>
              ))}
                </ul>
            </div>

            {/* mobile menu */}
            {!mobileMenuIsOpen && 
            <div className="md:hidden cursor-pointer" onClick={()=>setMobileMenuIsOpen(true)}>
                <img alt="menu-close" src="icon-hamburger.svg" className="w-6 h-6"></img>
            </div>}
            
            {mobileMenuIsOpen && 
            <div className="md:hidden bg-white/5 backdrop-blur-md fixed top-0 right-0 h-screen z-50 pt-9 pl-8 w-[65%] animate-slide-in-right">
                <div className="cursor-pointer flex justify-end pr-7 mb-20">
                <img alt="menu-open" src="icon-close.svg" className="w-6 h-6" onClick={()=> setMobileMenuIsOpen(false)}></img>
                </div>
                <ul className="flex flex-col text-font-white text-nav-style gap-6">
                {navLinks.map((link, index)=>(
                <li key={link.id} className={`relative group cursor-pointer tracking-wide py-1 transition-colors duration-300 
                    ${activeTab === link.id ? "text-font-white" : "text-white/70 hover:text-font-white"}`} >
                    <Link to={link.to} className="flex gap-2 w-full h-full items-center text-base" onClick={()=>{setMobileMenuIsOpen(false); setActiveTab(link.id);}}>
                   <span className="font-semibold ">{link.number}</span>
                    <span>{link.title}</span>
                    </Link>
                 <div className={` absolute right-0 top-0 h-full w-1 transition-colors duration-300 ${
                    activeTab === link.id ? "bg-font-white" : "bg-transparent group-hover:bg-white/30"
                    }`}></div>
                </li>
             ))}  
                </ul>
              
            </div>}
    </nav>
  )
}

export default Navbar