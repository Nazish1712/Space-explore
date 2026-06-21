import React from 'react'
import {technologyData} from "../data/technologyData"
import {useState} from "react"

const Technology = () => {

  const [activeSpaceInfraId, setActiveSpaceInfraId] = useState("space_capsule")

  const currentSpaceInfra = technologyData.find((currentSpaceInfra)=>(currentSpaceInfra.id === activeSpaceInfraId))

  return (
    <section className="min-h-dvh w-full bg-cover bg-center bg-no-repeat 
    bg-[url('background-technology-mobile.jpg')]
    md:bg-[url('background-technology-tablet.jpg')]
    lg:bg-[url('background-technology-desktop.jpg')]">
    <main className="pt-28 md:pt-36 lg:pt-40 pb-6 lg:pb-12 min-h-dvh flex flex-col  max-w-5xl lg:max-w-[1200px] m-auto text-font-white">
      <h2 className="flex justify-center md:justify-start gap-6 font-barlow-condensed tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.2px] text-base md:text-xl lg:text-[28px] uppercase mb-16 md:ml-6">
        <span className="text-gray-500 font-semibold">03</span>
        <span>SPACE LAUNCH 101</span>
      </h2>
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between lg:items-center lg:gap-4">
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-9 md:mb-11 lg:mb-0">
        <picture className="w-full flex justify-center">
        <source media="(min-width:1024px)" srcSet={currentSpaceInfra.imageDesktop}/>
        <img alt={currentSpaceInfra.image} src={currentSpaceInfra.image}
        className="h-60 md:h-72 lg:h-[460px] w-full object-cover lg:object-contain"></img>
        </picture>
       </div>
      <div className="px-4 lg:px-0 lg:pl-3 lg:flex lg:justify-between lg:items-stretch lg:gap-1 lg:w-1/2">
      <nav className="flex lg:flex-col items-center justify-center lg:justify-between lg:items-center  gap-3 md:gap-4 mb-10 md:mb-12 lg:mb-0 lg:gap-0">
        {technologyData.map((spaceInfra)=>(<button 
        key={spaceInfra.id} className={`h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 rounded-full cursor-pointer transition-colors duration-300 ease-out flex items-center justify-center ${activeSpaceInfraId === spaceInfra.id ?
            ("bg-font-white") : ("bg-transparent border border-white/30 hover:border-font-white")}`} onClick={()=>(setActiveSpaceInfraId(spaceInfra.id))}>
          <span className={`font-bellefair text-sm md:text-lg lg:text-xl ${activeSpaceInfraId === spaceInfra.id ?
            ("text-black") : ("text-font-white")
          }`}>{spaceInfra.number}</span></button>))}
      </nav>
      <article className="flex flex-col justify-between items-center lg:items-start">
        <h2 className="font-bellefair uppercase text-white/50 text-base md:text-2xl 
        lg:text-[32px] text-center lg:text-start mb-2 md:mb-4 lg:mb-2">The Terminology</h2>
        <h1 className="font-bellefair text-2xl md:text-4xl lg:text-[56px] text-font-white text-center lg:text-start uppercase leading-none mb-4 md:mb-6 lg:mb-4">{currentSpaceInfra.name}</h1>
        <p className="font-barlow text-sm md:text-base lg:text-lg text-blue-light text-center lg:text-start leading-relaxed  lg:leading-[1.8] max-w-[330px] md:max-w-[480px] lg:max-w-[450px]">{currentSpaceInfra.description}</p>
      </article>
      </div>
      </div>
     </main>
    </section>
  )
}

export default Technology