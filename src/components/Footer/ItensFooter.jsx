import React from "react";

const ItensFooter = ({ logo, info }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-[50px] h-[50px] flex flex-col items-center justify-center rounded-xl bg-slate-800/30 border-[1px] border-slate-400/30 hover:scale-105 hover:shadow-lg duration-200 cursor-pointer">
          <i
            className={logo}
            style={{ fontSize: "30px", color: "white", opacity: "0.5" }}
          ></i>
        </div>
        <p className="text-white text-sm font-medium opacity-50">{info}</p>
      </div>
    </div>
  );
};

export default ItensFooter;
