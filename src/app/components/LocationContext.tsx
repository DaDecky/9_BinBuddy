"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Coordinate {
  lat: number;
  lng: number;
}

interface IBinCoordinate {
  id: number;
  createdAt: string;
  updatedAt: string | null;
  latitude: string;
  longitude: string;
  description: string;
}

interface LocationContextProps {
  userPosition: Coordinate | null;
  closestBin: IBinCoordinate | null;
}

export const LocationContext = createContext<LocationContextProps | undefined>(
  undefined
);

export const LocationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [userPosition, setUserPosition] = useState<Coordinate | null>(null);
  const [closestBin, setClosestBin] = useState<IBinCoordinate | null>(null);
  const [coordinates, setCoordinates] = useState<IBinCoordinate[]>([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch("/api/coordinates", {
          cache: "force-cache",
          next: { revalidate: 3600 },
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: IBinCoordinate[] = await response.json();
        setCoordinates(data);
      } catch (error) {
        console.error("There was an error fetching the coordinates!", error);
      }
    };

    fetchCoordinates();
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          setUserPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  useEffect(() => {
    if (userPosition && coordinates.length > 0) {
      const closest = coordinates.reduce((prev, current) => {
        const prevDistance = Math.sqrt(
          Math.pow(userPosition.lat - parseFloat(prev.latitude), 2) +
            Math.pow(userPosition.lng - parseFloat(prev.longitude), 2)
        );
        const currentDistance = Math.sqrt(
          Math.pow(userPosition.lat - parseFloat(current.latitude), 2) +
            Math.pow(userPosition.lng - parseFloat(current.longitude), 2)
        );
        return prevDistance < currentDistance ? prev : current;
      });
      setClosestBin(closest);
    }
  }, [userPosition, coordinates]);

  return (
    <LocationContext.Provider value={{ userPosition, closestBin }}>
      {children}
    </LocationContext.Provider>
  );
};
