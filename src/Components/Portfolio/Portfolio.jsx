import React from "react";
import Relatio from "../../Images/portfolio/Relatio.svg";
import Alm from "../../Images/portfolio/almEngenharia.svg";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <section className="py-10" id="portfolio">
      <div className="flex flex-wrap xl:flex-nowrap flex-col-reverse xl:flex-row justify-center items-center xl:gap-40 gap-10">
        <div className="xl:w-[33%] md:w-[50%] w-[75%]">
          <div>
            <Link to="https://relatiomarketing.com.br" target="_blank">
              <img
                src={Relatio}
                alt="Relatio"
                className="rounded-xl hover:scale-110 hover:transition-all transition-all"
              />
            </Link>
          </div>
        </div>
        <h1 className="text-white lg:text-[150px] font-chillaxSemibold md:text-9xl text-6xl">
          Portfólio
        </h1>
      </div>

      <div className="mt-10 md:mt-20 flex items-center justify-center xl:gap-[150px] flex-wrap xl:flex-nowrap xl:flex-row lg:gap-10 gap-5">
        <div>
          <Link to="https://almprojetosengenharia.com.br" target="_blank">
            <img
              src={Alm}
              alt="Alm Engenharia"
              className="w-[77%] md:w-[100%] rounded-xl hover:scale-110 hover:transition-all transition-all mx-auto"
            />
          </Link>
        </div>
        <div className="bg-secondaryGray xl:w-[375px] h-[185px] md:w-[350px] hidden rounded-xl md:flex items-center"></div>
        <div className="bg-secondaryGray xl:w-[375px] h-[185px] md:w-[350px] hidden rounded-xl md:flex items-center"></div>
      </div>

      <div className="text-white text-center pt-10 mb-0">
        <div>
          <button className=" text-primary px-4 py-3 w-64 h-16 text-xl tuppercase rounded-md uppercase font-poppins hover:scale-110 hover:transition-all transition-all font-semibold cta-portfolio">
            <Link to="https://wa.link/g2j5s4" target="_blank">
              Entrar em Contato
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
