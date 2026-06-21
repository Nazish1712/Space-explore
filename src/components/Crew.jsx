import React from 'react'
import {useState} from "react"
import {crewData} from "../data/crewData"

const Crew = () => {

  const [activeMemberId, setActiveMemberId] = useState("douglas_hurley")

  const currentMember = crewData.find((currentMember)=>(currentMember.id === activeMemberId))

  return (
    <section className="min-h-dvh w-full bg-cover bg-center bg-no-repeat
    bg-[url('background-crew-mobile.jpg')]
    md:bg-[url('background-crew-tablet.jpg')]
    lg:bg-[url('background-crew-desktop.jpg')]">
    <main className="pt-28 md:pt-36 lg:pt-40 pb-6 lg:pb-12 min-h-dvh flex flex-col max-w-2xl lg:max-w-7xl m-auto px-4 text-font-white">
      <h2 className="flex justify-center md:justify-start gap-6 font-barlow-condensed tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.2px] text-base md:text-xl lg:text-[28px] uppercase mb-16">
        <span className="text-gray-500 font-semibold">02</span>
        <span>MEET YOUR CREW</span>
        </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0 mt-4 lg:mt-6">
      <div className="flex flex-col justify-between items-center lg:items-start lg:text-left lg:w-1/2">
        <h2 className="font-bellefair uppercase text-white/50 text-base md:text-2xl 
        lg:text-[32px] text-center mb-2 md:mb-4">{currentMember.role}</h2>
        <h1 className="font-bellefair text-2xl md:text-4xl lg:text-[56px] text-font-white text-center lg:text-start uppercase leading-none mb-4 md:mb-6">{currentMember.name}</h1>
        <p className="font-barlow text-sm md:text-base lg:text-lg text-blue-light text-center lg:text-start leading-relaxed  lg:leading-[1.8] max-w-[330px] md:max-w-[460px] lg:max-w-[450px]">{currentMember.bio}</p>
        <div className="flex justify-center lg:justify-start lg:mt-16 lg:mb-0 gap-4 md:gap-5 my-8 md:my-10">
          {crewData.map((member)=>(<div key={member.id} className={`h-2.5 w-2.5 lg:h-3.5 lg:w-3.5 rounded-full cursor-pointer transition-all duration-300 ${activeMemberId === member.id ? ("bg-font-white") :
           ("bg-white/20 hover:bg-white/50")}`}
           onClick={()=>(setActiveMemberId(member.id))}></div>))}
         </div>
      </div>
      <div className="w-full flex justify-center items-end lg:items-center lg:w-1/2">
        <img alt={currentMember.image} src={currentMember.image} loading="lazy" className="
        h-[32vh] md:h-[350px] lg:h-[500px] object-contain lg:object-center"></img>
      </div>
      </div>
    </main>
    </section>
  )
}

export default Crew