import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="bg-primary text-white pt-32 pb-10 rounded-t-[50px] mt-5" id="contato">
      <div className="text-3xl md:text-5xl lg:text-7xl text-center font-chillaxMedium uppercase">
        <h1>Entre em contato conosco!</h1>
        <p className="text-xl md:text-2xl lg:text-4xl mt-10">( nosso botão adora ser clicado )</p>
      </div>
      <div className="text-center mt-20 rounded-md flex items-center justify-center border-secondary uppercase">
        <Link to="https://wa.link/g2j5s4" target="_blank" className="btn-contact">
          Entrar em Contato
        </Link>
      </div>
    </section>
  );
};

export default Contact;
