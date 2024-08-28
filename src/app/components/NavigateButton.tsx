"use client";
import React, { useContext } from "react";
import { LocationContext } from "./LocationContext";

const NavigateButton = () => {
  const { userPosition, closestBin } = useContext(LocationContext) || {};
  return (
    <div className={`fixed bottom-5 left-0 right-0 text-center  z-[1000]`}>
      <button className="bg-slate-500/80 p-2 rounded-md ">
        {userPosition && closestBin && (
          <a
            target="_blank"
            href={`https://www.google.com/maps/dir/?api=1&origin=${userPosition?.lat},${userPosition?.lng}&destination=${closestBin?.latitude},${closestBin?.longitude}&travelmode=walking&dir_action=navigate`}
          >
            Navigate To Closest Bin
          </a>
        )}
      </button>
    </div>
  );
};

export default NavigateButton;
