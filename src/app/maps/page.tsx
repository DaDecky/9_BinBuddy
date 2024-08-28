import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="h-screen">
      <div className="fixed bottom-5 left-0 right-0 text-center  z-[1000] ">
        <button className="bg-slate-500/80 p-2 rounded-md ">
          Navigate To Closest Bin
        </button>
      </div>
      <Map />
    </div>
  );
};

export default Page;
