import React from "react";

const Tecnologia = ({ logo, nome }) => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-[110px] h-[110px] flex flex-col items-center justify-center rounded-xl bg-slate-800/30 border-[1px] border-slate-400/30 hover:scale-105 hover:shadow-lg duration-200 cursor-pointer">
        <i
          className={logo}
          style={{
            fontSize: "40px",
            color: "white",
            opacity: "0.8",
          }}
        ></i>
        <p className="text-white font-medium opacity-80">{nome}</p>
      </div>
    </div>
  );
};

export default Tecnologia;
