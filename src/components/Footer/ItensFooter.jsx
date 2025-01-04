import React from "react";

const ItensFooter = ({ logo, info }) => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center gap-2">
        <i
          className={logo}
          style={{ fontSize: "30px", color: "white", opacity: "0.5" }}
        ></i>
        <p className="text-white text-sm font-medium opacity-50">{info}</p>
      </div>
    </div>
  );
};

export default ItensFooter;
