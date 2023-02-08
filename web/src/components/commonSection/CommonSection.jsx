import React from "react";

const CommonSection = ({ title }) => {
  return (
    <>
      <div className="h-72 w-full bg-[url('../assets/images/banner.png')] bg-cover bg-left flex items-center justify-center">
        <p className="font-bold text-4xl text-white">{title}</p>
      </div>
    </>
  );
};

export default CommonSection;
