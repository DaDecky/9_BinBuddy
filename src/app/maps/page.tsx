import React from "react";
import dynamic from "next/dynamic";
import { LocationProvider } from "../components/LocationContext";
import NavigateButton from "../components/NavigateButton";

const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

const Page = () => {
  return (
    <LocationProvider>
      <div className="h-screen">
        <NavigateButton />
        <Map />
      </div>
    </LocationProvider>
  );
};

export default Page;
