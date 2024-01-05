import React, { useState } from "react";
import { Link } from "react-scroll";
import Icon from "../../Images/logo.svg";
import useMedia from "../../Hooks/useMedia";

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const mobile = useMedia('(max-width: 1020px)');

  return (
    <header>
      <div className="max-w-screen overflow-x-hidden font-poppins">
        <nav className="bg-black flex items-center justify-between fixed xl:px-36 xl:py-3 lg:px-10 lg:py-2 sm:h-auto sm:w-full w-screen z-20 left-0 right-0 top-0 border-b border-secondaryGray">
          <div>
            <Link to="/" smooth={true} offset={-100} duration={500} className="cursor-pointer">
              <img
                src={Icon}
                alt="Logo Desenvo"
                className="p-4 lg:me-4 xl:ps-0 xl:me-0"
              />
            </Link>
          </div>
          <div className="flex items-center">
            <ul className={mobile && click ? 'nav-mobile bg-black' : 'text-white lg:flex items-center gap-5 xl:me-32 lg:me-28 text-lg hidden'}>
              <li className="lg:inline-block xl:p-4 cursor-pointer nav-link">
                <Link to="sobre" smooth={true} offset={-270} duration={500}>
                  Sobre Nós
                </Link>
              </li>
              <li className="lg:inline-block xl:p-4 cursor-pointer nav-link">
                <Link to="portfolio" smooth={true} offset={-150} duration={500}>Portfólio</Link>
              </li>
              <li className="lg:inline-block xl:p-4 cursor-pointer nav-link">
                <Link to="servicos" smooth={true} offset={-150} duration={500}>Serviços</Link>
              </li>
              <li className="lg:inline-block xl:p-4 cursor-pointer nav-link">
                <Link to="contato" smooth={true} offset={-50} duration={500}>Contato</Link>
              </li>
            </ul>
            <button className="bg-primary text-white px-4 py-3 w-60 uppercase hidden lg:block lg:me-4 xl:me-0 rounded-md hover:scale-110 hover:transition-all transition-all">
              <a href="https://wa.link/g2j5s4" target="_blank" rel="noreferrer">
                Entrar em Contato
              </a>
            </button>
            <input type="checkbox" role="button" aria-label="Display the menu" className="menu lg:hidden" onClick={handleClick}></input>      
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
