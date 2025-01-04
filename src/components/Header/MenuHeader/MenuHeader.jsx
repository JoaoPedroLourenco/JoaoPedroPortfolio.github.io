import React from "react";
import uploadedFileLink from "../../../assets/CVforDownload/CV João Pedro Lourenço dos Santos.pdf";

const MenuHeader = ({ openCloseMenu }) => {
  return (
    <div className="w-full h-auto py-10 bg-white flex flex-col items-center absolute top-0 left-0 z-50 ">
      <button
        onClick={openCloseMenu}
        className="w-[40px] h-[40px] hover:bg-gray-100 duration-200 flex items-center justify-center rounded-full"
      >
        <i className="fa fa-close" style={{ fontSize: "32px" }}></i>
      </button>
      <nav className="w-full flex justify-center">
        <ul className="w-full flex flex-col items-center gap-5 text-center py-5">
          <a
            href="#About"
            className="w-full h-[50px] flex items-center justify-center text-3xl font-medium"
          >
            Sobre
          </a>
          <a
            href="#Conhecimentos"
            className="w-full h-[50px] flex items-center justify-center text-3xl font-medium"
          >
            Conhecimentos
          </a>
          <a
            href="#Projetos"
            className="w-full h-[50px] flex items-center justify-center text-3xl font-medium"
          >
            Projetos
          </a>
          <div>
            <a
              href={uploadedFileLink}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="w-[150px] px-4 py-2 bg-blue-500 rounded-full text-white font-semibold flex gap-2 items-center justify-center">
                <i className="fa fa-download"></i>
                Baixar CV
              </button>
            </a>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default MenuHeader;
