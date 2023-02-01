import React from "react";
import { Circles } from "react-loader-spinner";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center">
      <Circles
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        height={550}
        weight={80}
      />
    </div>
  );
};
