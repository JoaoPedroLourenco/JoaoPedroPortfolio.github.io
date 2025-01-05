import React, { useState } from "react";
import uploadedFileLink from "../../assets/CVforDownload/CV João Pedro Lourenço dos Santos.pdf";
import MenuHeader from "./MenuHeader/MenuHeader";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const openCloseMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="w-full max-w-5xl m-auto py-4 bg-slate-900 scroll-smooth flex justify-between">
      <button
        onClick={openCloseMenu}
        className="w-[40px] h-[40px] md:hidden rounded-xl bg-slate-800 border border-gray-500/30"
      >
        <i className="fa fa-bars" style={{ color: "white" }}></i>
      </button>

      {menu === true ? <MenuHeader openCloseMenu={openCloseMenu} /> : ""}

      <nav className="hidden md:flex w-full h-full justify-between items-center px-5  lg:px-0">
        <div className="flex gap-3 text-white font-semibold md:text-xl">
          <a href="#About" className="hover:text-blue-500 duration-200">
            Sobre
          </a>
          <a href="#Conhecimentos" className="hover:text-blue-500 duration-200">
            Conhecimentos
          </a>
          <a href="#Projetos" className="hover:text-blue-500 duration-200">
            Projetos
          </a>
        </div>
      </nav>
      <div>
        <a
          href={uploadedFileLink}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <button className="w-[150px] px-4 py-2 bg-blue-500 hover:bg-blue-400 duration-200 rounded-full text-white font-semibold flex gap-2 items-center justify-center">
            <i className="fa fa-download"></i>
            Baixar CV
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;
