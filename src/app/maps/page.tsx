import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const Page = () => {
  return (
    <div className="h-screen">
      <Map />
    </div>
  );
};

export default Page;
