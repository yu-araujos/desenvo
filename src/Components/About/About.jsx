import React from "react";
import { Link } from "react-scroll";
import { GoArrowRight } from "react-icons/go";

const About = () => {
  return (
    <section className="py-10 bg-primary" id="sobre">
      <div className=" text-white ">
        <div className="xl:w-[75%] px-4 md:px-10 xl:px-24">
          <h1 className="text-3xl md:text-6xl lg:text-5xl font-chillaxSemibold uppercase">
            apaixonados em potencializar marcas incríveis no universo da{" "}
            <span>tecnologia</span>
          </h1>
        </div>
        <div className="px-4 md:px-10 xl:px-24 pt-7 flex justify-between relative">
          <p className="font-poppins text-2xl md:text-2xl lg:w-4/6 xl:w-1/2">
            Na Desenvo, nosso prazer é impulsionar a sua marca para o cenário
            digital. Com serviços de custos acessíveis, sua empresa ganha
            presença global, alcançando audiências em todos os cantos do mundo.
          </p>
        </div>
        <div className="px-4 pt-10 md:px-10 xl:px-24 md:pt-16">
          <Link
            to="servicos" smooth={true} offset={-150} duration={500}
            className="text-xl font-poppins border-dotted border-b-4 border-secondary flex w-fit items-center pb-2 uppercase cursor-pointer cta-about"
            >
            Conheça Nossos Serviços{" "}
            <span className="inline-block">
              <GoArrowRight className="text-secondary text-5xl ms-5 cursor-pointer" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
