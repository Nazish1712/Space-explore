import React from 'react'

const Home = () => {
  return (
   <section className="h-dvh w-full bg-cover bg-center bg-no-repeat 
   bg-[url('background-home-mobile.jpg')]
   md:bg-[url('background-home-tablet.webp')]
   lg:bg-[url('background-home-desktop.jpg')]">
    <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between h-full pt-28 md:pt-40 pb-20 md:pb-40 max-w-7xl px-4 lg:px-8 mx-auto text-font-white">
      <div className="flex flex-col gap-4 md:gap-6 items-center lg:items-start text-center lg:text-start">
        <h2 className="text-blue-light text-sm md:text-lg lg:text-[28px] tracking-[2.7px] md:tracking-[3px] lg:tracking-[4.75px] font-barlow-condensed uppercase">SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className="heading-one-text-style leading-none text-7xl md:text-8xl lg:text-[150px] my-2 md:my-3 
        text-transparent animate-shimmer">SPACE</h1>
        <p className="text-blue-light paragraph-style text-sm md:text-base lg:text-lg leading-relaxed max-w-[327px] md:max-w-[480px] lg:max-w-[444px]">Let’s face it; if you want to go to space, you might as
             well genuinely go to outer space and not hover kind of
              on the edge of it. Well sit back, and relax because 
              we’ll give you a truly out of this world 
              experience!</p>
      </div>
      <div className="flex items-center justify-center">
        <button className="w-36 h-36 md:w-50 md:h-50 lg:w-[274px] lg:h-[274px] rounded-full bg-font-white text-blue-dark uppercase font-bellefair 
        text-xl md:text-2xl tracking-widest transition-all duration-500 ease-out hover:shadow-[0_0_0_88px_rgba(255,255,255,0.1)] 
        cursor-pointer animate-cosmic-pulse hover:animate-none lg:mb-2">EXPLORE</button>
      </div>
    </div>
   </section>
    
  )
}

export default Home