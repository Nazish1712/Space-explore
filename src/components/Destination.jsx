import React from 'react'
import { destinations } from '../data/destinationData'
import {useState} from "react"

const Destination = () => {

const [activeTabIndex , setActiveTabIndex] = useState("moon")

const currentPlanet = destinations.find((planet)=>(planet.id === activeTabIndex))

  return (
    <section className="min-h-dvh w-full bg-cover bg-center bg-no-repeat
    bg-[url('background-destination-mobile.jpg')]
    md:bg-[url('background-destination-tablet.jpg')]
    lg:bg-[url('background-destination-desktop.jpg')]">

      <div className="pt-28 pb-6 h-full flex flex-col items-center max-w-2xl m-auto px-4 text-font-white">
        <div className="">
          <h2 className="flex gap-6 font-barlow-condensed tracking-[2.7px] text-base uppercase">
            <span className="text-gray-500 font-semibold">01</span><span>PICK YOUR DESTINATION</span>
            </h2>
          <div className="flex items-center justify-center my-10">
            <img className="h-40 w-40" alt={currentPlanet.image} src={currentPlanet.image}></img>
          </div>
        </div>

        <div className="">
         <div className="flex justify-between items-center mb-5">
          {destinations.map((planet, index)=>(
            <button key={planet.id} className={`uppercase font-barlow-condensed tracking-[2.3px] text-sm font-normal pb-2 cursor-pointer transition-all duration-300 ${activeTabIndex === planet.id ? ("border-b-2 text-font-white"): ("border-b-2 border-transparent hover:border-white/50")}`} onClick={()=>(setActiveTabIndex(planet.id))}>{planet.title}</button>
          ))}
         </div>
         <h1 className="text-center font-bellefair uppercase leading-none text-6xl">{currentPlanet.title}</h1>
         <p className="text-blue-light max-w-[330px] text-center paragraph-style text-sm leading-relaxed mt-4">{currentPlanet.description}</p>
         <div className="h-px w-full bg-white/30 my-3"></div>
         <div className="flex flex-col justify-center items-center">
           <div className="text-blue-light font-barlow-condensed text-base tracking-[2px] uppercase mb-1">AVG. DISTANCE</div>
           <div className="font-bellefair tracking-[0px] text-2xl">{currentPlanet.distance}<span className="ml-3 uppercase">KM</span></div>
         </div>
         <div className="flex flex-col justify-center items-center mt-3">
           <div className="text-blue-light font-barlow-condensed text-base tracking-[2px] uppercase mb-1">EST. TRAVEL TIME</div>
           <div className="font-bellefair tracking-[0px] text-2xl uppercase">{currentPlanet.travel}</div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Destination