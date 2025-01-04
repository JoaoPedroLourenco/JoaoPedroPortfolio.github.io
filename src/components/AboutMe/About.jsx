import React from "react";

const About = () => {
  return (
    <div
      className="w-full h-[25vh] max-w-5xl flex justify-center md:items-center md:justify-center my-10 p-4 md:p-0 text-white"
      id="About"
    >
      <div className="max-w-xl flex flex-col gap-4 md:text-center">
        <h1 className="text-3xl font-semibold text-blue-500">Sobre mim</h1>
        <p className="text-lg">
          Técnico em desenvolvimento de sistemas na ETEC Antonio Devisate e
          apaixonado pela programação. Procuro sempre evoluir e buscar novos
          conhecimentos sobre a área.
        </p>
      </div>
    </div>
  );
};

export default About;
