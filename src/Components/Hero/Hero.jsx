import React from "react";
import { GoArrowRight } from "react-icons/go";
import { LuMouse } from "react-icons/lu";

import Spline from "@splinetool/react-spline";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="pt-24 px-3 mb-14 md:px-10 xl:pt-36 xl:ms-36" id="/">
      <div className="text-white mt-14">
        <div className="lg:w-[65%] w-full">
          <h1 className="text-4xl md:text-7xl lg:text-7xl font-chillaxSemibold md:leading-snug">
            Somos uma Agência de Desenvolvimento Digital
          </h1>
          <p className="mt-4 text-xl md:mt-7 lg:text-2xl text-gray">
            Pensamos. Criamos. Solucionamos.
          </p>
        </div>

        <div className="border-2 border-gray w-[300px] md:w-[350px] h-[75px] mt-10 relative cursor-pointer">
          <div className="bg-secondary w-[75px] h-[63px] p-2 m-1 hover:md:w-[338px] hover:text-black hover:font-bold transition-all hover:w-[288px]">
           <Link to="https://wa.link/g2j5s4" target="_blank"><GoArrowRight className="text-black text-5xl mx-auto absolute"/> <span className="absolute top-6 md:top-[22px] font-poppins left-24 md:left-28 md:text-lg uppercase">Entrar Em Contato</span></Link> 
          </div>
        </div>
       
        <div className="xl:w-[35%] xl:h-[40%] xl:absolute xl:top-56 xl:right-0 cursor-move">
          <Spline
            scene="https://prod.spline.design/Zs4iTXaq0c54cyAx/scene.splinecode"
            className="hidden xl:block"
          />
          <span>
            <LuMouse className="text-secondary text-5xl text-center mx-auto lg:mt-10 mt-28 hidden md:block lg:block xl:hidden" />
          </span>
        </div>
      </div>
    </main>
  );
};

export default Hero;
