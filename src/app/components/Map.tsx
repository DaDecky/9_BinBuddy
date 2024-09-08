"use client";
import { useContext, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LocationContext } from "./LocationContext";

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

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

const userIcon = new L.Icon({
  iconUrl: "/current-location.png",
  iconSize: [30, 30],
});

const Map: React.FC = () => {
  const locationContext = useContext(LocationContext);
  const { userPosition } = locationContext || {};

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

  return (
    <MapContainer
      center={[-6.890685623184376, 107.61054884359541]}
      zoom={17}
      className="w-full h-screen"
      zoomControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates.map((coordinate, index) => (
        <Marker
          key={index}
          position={[
            parseFloat(coordinate.latitude),
            parseFloat(coordinate.longitude),
          ]}
        >
          <Popup>
            <div className="text-center ">
              {coordinate.description}
              <br />
              <button className="bg-blue-300 py-1 px-2 mt-2 rounded-md ">
                <a
                  target="_blank"
                  href={
                    userPosition
                      ? `https://www.google.com/maps/dir/?api=1&origin=${userPosition?.lat},${userPosition?.lng}&destination=${coordinate.latitude},${coordinate.longitude}&travelmode=walking&dir_action=navigate`
                      : `https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=${coordinate.latitude},${coordinate.longitude}&travelmode=walking&dir_action=navigate`
                  }
                >
                  <span className="text-black text-sm">Navigate Here</span>
                </a>
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
      {userPosition && (
        <Marker position={[userPosition.lat, userPosition.lng]} icon={userIcon}>
          <Popup>Your current position</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
