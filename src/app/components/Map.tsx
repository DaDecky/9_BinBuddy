"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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

const Map: React.FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch("/api/coordinates");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: IBinCoordinate[] = await response.json();
        setCoordinates(
          data.map((coordinate) => ({
            lat: parseFloat(coordinate.latitude),
            lng: parseFloat(coordinate.longitude),
          }))
        );
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
      className="w-full h-full"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coordinates.map((coordinate, index) => (
        <Marker key={index} position={[coordinate.lat, coordinate.lng]}>
          <Popup>
            A marker at {coordinate.lat}, {coordinate.lng}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
