import React from "react";
import photo from "../../assets/imgs/Frame 24.png";

const Introduction = () => {
  return (
    <div className="w-full max-w-5xl mx-auto md:my-0 h-auto flex flex-col  md:flex-row-reverse md:justify-between md:items-center  lg:px-0 items-start px-4">
      <div>
        <img
          src={photo}
          alt="Foto de João Pedro L."
          className="w-[250px] md:w-auto hover:anim animate-photoAnimation "
        />
      </div>

      <div className="flex flex-col gap-3 text-white my-5 ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold flex">
          Olá <p className="animate-handWave mx-2 origin-bottom-right">👋</p>,
          eu sou
        </h2>
        <h1 className="text-6xl font-semibold">João Pedro</h1>
        <p className="text-1xl font-normal">
          Tenho 18 anos, sou desenvolvedor web front-end.
        </p>

        <div className="flex gap-5 my-3">
          <a
            href="https://github.com/JoaoPedroLourenco"
            target="_blank"
            className="hover:scale-105 duration-100"
          >
            <i className="fa-brands fa-github" style={{ fontSize: "32px" }}></i>
          </a>

          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-pedro-louren%C3%A7o-dos-santos-28b501291/"
            target="_blank"
            className="hover:scale-105 duration-100 hover:text-[#0e76a8]"
          >
            <i
              className="fa-brands fa-linkedin"
              style={{ fontSize: "32px" }}
            ></i>
          </a>

          <a
            href="https://www.instagram.com/joaoo.pedrool/"
            target="_blank"
            className="hover:scale-105 duration-100 hover:text-[#ff467e]"
          >
            <i
              className="fa-brands fa-instagram"
              style={{ fontSize: "32px" }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
