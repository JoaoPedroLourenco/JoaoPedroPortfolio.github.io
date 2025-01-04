import React from "react";
import tailwindLogo from "../../assets/imgs/tailwind-logo.png";
import nextJSLogo from "../../assets/imgs/nextjs-logo.png";
import Tecnologia from "./Tecnologia";

const Tecnologias = () => {
  return (
    <div
      className="w-full max-w-5xl h-auto justify-center pb-2 m-auto flex flex-col gap-4 self-start px-4 flex-wrap overflow-hidden lg:px-0 "
      id="Conhecimentos"
    >
      <h1 className="text-2xl text-white font-semibold">
        Tecnologias que utilizo:
      </h1>
      <div className="w-full ml-1 flex gap-4 flex-wrap">
        <Tecnologia logo="fa-brands fa-html5" nome="HTML" />
        <Tecnologia logo="fa-brands fa-css3-alt" nome="CSS" />
        <Tecnologia logo="fa-brands fa-js" nome="JavaScript" />
        <Tecnologia logo="fa-brands fa-react" nome="React" />
        <div className="w-[110px] h-[110px] flex flex-col items-center justify-center rounded-xl bg-slate-800/30 border-[1px] border-slate-400/30 hover:scale-105 hover:shadow-lg duration-200 cursor-pointer">
          <img
            src={tailwindLogo}
            alt=""
            className="w-[40px] h-[40px] opacity-80"
          />
          <p className="text-white font-medium opacity-80 text-sm">
            TailwindCSS
          </p>
        </div>
        <Tecnologia logo="fa-brands fa-figma" nome="Figma" />
      </div>

      <h1 className="text-2xl text-white font-semibold mt-5">Estudando:</h1>
      <div className="flex gap-4 ml-1">
        <Tecnologia logo="fa-brands fa-node" nome="NodeJS" />

        <div className="w-[110px] h-[110px] flex flex-col items-center justify-center rounded-xl bg-slate-800/30 border-[1px] border-slate-400/30 hover:scale-105 hover:shadow-lg duration-200 cursor-pointer">
          <img
            src={nextJSLogo}
            alt=""
            className="w-[40px] h-[40px] opacity-80"
          />
          <p className="text-white font-medium opacity-80 text-sm">NextJS</p>
        </div>
      </div>
    </div>
  );
};

export default Tecnologias;
