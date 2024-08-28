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

const userIcon = new L.Icon({
  iconUrl: "/current-location.png",
  iconSize: [30, 30],
});

const Map: React.FC = () => {
  const [coordinates, setCoordinates] = useState<IBinCoordinate[]>([]);
  const [userPosition, setUserPosition] = useState<Coordinate | null>(null);
  const [closestBin, setClosestBin] = useState<IBinCoordinate | null>(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch("/api/coordinates", {
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
          <Popup>{coordinate.description}</Popup>
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
