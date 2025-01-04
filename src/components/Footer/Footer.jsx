import React from "react";
import ItensFooter from "./ItensFooter";

const Footer = () => {
  return (
    <div className="w-full max-w-5xl h-auto py-5 m-auto bg-slate-800 flex flex-col justify-center gap-10 rounded-tr-3xl rounded-tl-3xl relative">
      <ItensFooter
        logo="fa fa-envelope"
        info="joaopedrolourencocontato@gmail.com"
      />
      <ItensFooter logo="fa fa-phone" info="(14) 99757-3336" />

      <p className="relative bottom-0 text-gray-500 font-semibold text-center">
        Site feito por mim mesmo, João Pedro Lourenço!
      </p>
    </div>
  );
};

export default Footer;
