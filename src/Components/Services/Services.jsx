import React from "react";
import {
  HiOutlineComputerDesktop,
  HiMiniDevicePhoneMobile,
} from "react-icons/hi2";
import { HiOutlineSearch, HiCheck } from "react-icons/hi";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section
      className="py-10 px-3 md:px-10 xl:px-24 relative border-t border-gray"
      id="servicos"
    >
      <div className="inline">
        <h1 className="text-4xl md:text-6xl text-white font-chillaxSemibold uppercase xl:-rotate-90 xl:absolute top-72 -left-36 xl:underline decoration-secondary text-center">
          Nossos Serviços
        </h1>
      </div>
      <div className="xl:ms-52 mt-6 flex gap-10 flex-wrap xl:flex-nowrap">
        <div className="border border-gray mx-auto md:w-[75%] lg:w-[45%] xl:w-[40%] rounded-lg">
          <div className="p-5">
            <HiOutlineComputerDesktop className="text-white text-7xl rounded-lg mx-auto mb-5" />
            <h1 className="text-primary font-chillaxMedium text-center text-xl md:text-3xl xl:text-4xl uppercase">
              Website
            </h1>
            <div className="py-5">
              <ul className="text-white uppercase font-poppins text-md xl:text-xl">
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> VALOR QUE CABE NO BOLSO
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> LANDING PAGE COM
                  RESPONSIVIDADE
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> SEO
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> HOSPEDAGEM
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> SUPORTE NO
                  DESENVOLVIMENTO E MANUTENÇÃO DO SITE*
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> SITE PUBLICADO EM
                  POUCOS DIAS
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border border-gray mx-auto md:w-[75%] lg:w-[45%] xl:w-[40%] rounded-lg">
          <div className="p-5">
            <HiOutlineSearch className="text-white text-7xl rounded-lg mx-auto mb-5" />
            <h1 className="text-primary font-chillaxMedium text-center  text-xl md:text-3xl xl:text-4xl uppercase">
              Otimização de Site
            </h1>
            <div className="py-5">
              <ul className="text-white uppercase font-poppins text-md md:text-xl">
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> VALOR QUE CABE NO BOLSO
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> Seu site nas primeira
                  páginas do Google
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> Avaliação Completa do
                  Conteúdo
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> Análise técnica da
                  performance do seu site
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> Correções e Adequações
                  de Conteúdo
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border border-gray md:w-[75%] lg:w-[50%] xl:w-[40%] mx-auto rounded-lg ">
          <div className="p-5">
            <HiMiniDevicePhoneMobile className="text-white text-7xl rounded-lg mx-auto mb-5" />
            <h1 className="text-primary font-chillaxMedium text-center text-xl md:text-3xl xl:text-4xl uppercase">
              Posts para Instagram
            </h1>
            <div className="py-5">
              <ul className="text-white uppercase font-poppins text-md md:text-xl">
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> VALOR QUE CABE NO BOLSO
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> ANÁLISE E CRIAÇÃO
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> Arte (criativo) +
                  Postagem (Feed e Stories)
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> Padronização de Rede
                  Social
                </li>
                <li className="p-2 border-b border-secondaryGray flex items-center gap-3">
                  <HiCheck className="text-green-500" /> Copy para os criativos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <button className=" text-primary px-4 py-3 w-64 h-16 text-xl tuppercase rounded-md uppercase font-poppins hover:scale-110 hover:transition-all transition-all font-semibold cta-portfolio">
          <Link to="https://wa.link/g2j5s4" target="_blank">
            Entrar em Contato
          </Link>
        </button>
      </div>
    </section>
  );
};

export default Services;
