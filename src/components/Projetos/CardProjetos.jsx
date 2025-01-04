import React, { useState } from "react";

const CardProjetos = ({
  nomeProjeto,
  descProjeto,
  imageProjeto,
  firebase,
  linkProjeto,
}) => {
  return (
    <div className="w-[400px] min-h-[420px] p-2 rounded-xl overflow-hidden group hover:bg-slate-800 duration-200 ">
      <img
        src={imageProjeto}
        alt={nomeProjeto}
        className="w-[500px] h-1/2 object-cover rounded-xl brightness-75 group-hover:brightness-95 duration-200 relative z-0"
      />
      <div className="w-full py-2 flex flex-col gap-1">
        <h1 className="text-white text-xl font-semibold">{nomeProjeto}</h1>
        <p className="text-md font-medium text-white/50">{descProjeto}</p>

        <div className="flex gap-2 mt-2">
          <div className="px-2 flex items-center gap-1 bg-[#60DAFA]/50 rounded-full">
            <i className="fa-brands fa-react" style={{ color: "#60DAFA" }}></i>
            <p className="text-white">React</p>
          </div>
          {firebase === true ? (
            <div className="px-1 flex items-center gap-1 bg-orange-400/50 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#ff8f00"
                  d="M8,37L23.234,8.436c0.321-0.602,1.189-0.591,1.494,0.02L30,19L8,37z"
                ></path>
                <path
                  fill="#ffa000"
                  d="M8,36.992l5.546-34.199c0.145-0.895,1.347-1.089,1.767-0.285L26,22.992L8,36.992z"
                ></path>
                <path
                  fill="#ff6f00"
                  d="M8.008 36.986L8.208 36.829 25.737 22.488 20.793 13.012z"
                ></path>
                <path
                  fill="#ffc400"
                  d="M8,37l26.666-25.713c0.559-0.539,1.492-0.221,1.606,0.547L40,37l-15,8.743 c-0.609,0.342-1.352,0.342-1.961,0L8,37z"
                ></path>
              </svg>
              <p className="text-white">Firebase</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <a
          href={linkProjeto}
          target="_blank"
          className="w-[150px] flex gap-3 items-center my-3 text-white font-medium text-left rounded-xl hover:translate-x-1 duration-200"
        >
          Saiba mais
          <i
            className="fa-solid fa-up-right-from-square"
            style={{ color: "white" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default CardProjetos;
