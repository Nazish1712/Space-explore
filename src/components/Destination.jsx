import React from 'react'
import { destinations } from '../data/destinationData'
import {useState} from "react"

const Destination = () => {

const [activeTabId , setActiveTabId] = useState("moon")

const currentPlanet = destinations.find((planet)=>(planet.id === activeTabId))

  return (
    <section className="min-h-dvh w-full bg-cover bg-center bg-no-repeat
    bg-[url('/background-destination-mobile.jpg')]
    md:bg-[url('/background-destination-tablet.jpg')]
    lg:bg-[url('/background-destination-desktop.jpg')]">

      <div className="pt-28 md:pt-36 lg:pt-40 pb-6 lg:pb-12 h-full flex flex-col lg:flex-row lg:justify-between lg:items-center lg:max-w-6xl items-center max-w-2xl m-auto px-4 text-font-white">
        <div className="w-full flex flex-col items-center md:items-start">
          <h2 className="flex gap-6 font-barlow-condensed tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.2px] text-base md:text-xl lg:text-2xl uppercase">
            <span className="text-gray-500 font-semibold">01</span><span>PICK YOUR DESTINATION</span>
            </h2>
          <div className="flex w-full items-center justify-center my-10 md:my-11 lg:mt-20 ">
            <img className="h-40 w-40 md:h-72 md:w-72 lg:h-[445px] lg:w-[445px] animate-[spin_120s_linear]" alt={currentPlanet.image} src={currentPlanet.image} loading="lazy"></img>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start w-full md:max-w-[570px]">
         <div className="flex justify-center items-center gap-7 md:gap-8 lg:gap-9 mb-5 md:mb-6 lg:mb-7">
          {destinations.map((planet)=>(
            <button key={planet.id} className={`uppercase font-barlow-condensed tracking-[2.3px] md:tracking-[2.7px] lg:tracking-[3.2px] text-sm md:text-base lg:text-lg font-normal pb-2 md:pb-3 lg:pb-4 cursor-pointer transition-all duration-300 
              ${activeTabId === planet.id ? ("border-b-2 text-font-white"): ("border-b-2 border-transparent hover:border-white/50")}`} onClick={()=>(setActiveTabId(planet.id))}>{planet.title}</button>
          ))}
         </div>
         <h1 className="text-center font-bellefair uppercase leading-none text-6xl md:text-[80px] lg:text-[110px] lg:text-left">{currentPlanet.title}</h1>
         <p className=" text-blue-light max-w-[330px] md:max-w-[500px] lg:max-w-[550px] text-center lg:text-start paragraph-style text-sm md:text-base lg:text-lg leading-relaxed mt-4 lg:mt-5">{currentPlanet.description}</p>
         <div className="h-px w-full bg-white/30 my-3 md:my-5 lg:my-6"></div>
         <div className="flex flex-col md:flex-row md:justify-center md:items-center lg:justify-start md:gap-20 lg:gap-16 "> 
         <div className="flex flex-col justify-center items-center lg:items-start">
           <div className="text-blue-light font-barlow-condensed text-base md:text-lg lg:text-xl tracking-[2px] md:tracking-[2.35px] lg:tracking-[3.2px] uppercase mb-1 lg:mb-2">AVG. DISTANCE</div>
           <div className="font-bellefair tracking-[0px] text-2xl md:text-3xl lg:text-4xl">{currentPlanet.distance}<span className="ml-3 lg:ml-4 uppercase">KM</span></div>
         </div>
         <div className="flex flex-col justify-center items-center lg:items-start mt-3 md:mt-0">
           <div className="text-blue-light font-barlow-condensed text-base md:text-lg lg:text-xl tracking-[2px] md:tracking-[2.35px] lg:tracking-[3.2px] uppercase mb-1 lg:mb-2">EST. TRAVEL TIME</div>
           <div className="font-bellefair tracking-[0px] text-2xl md:text-3xl lg:text-4xl uppercase">{currentPlanet.travel}</div>
         </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Destination