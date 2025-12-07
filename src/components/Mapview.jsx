import { useState, useMemo } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import mines from "../data";
import MarkerPopup from "./MarkerPopup";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix Leaflet's default icon issue with Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const Mapview = () => {
  const [selectedType, setSelectedType] = useState("all"); // "all" | "coal" | "other"

  const filteredMines = useMemo(() => {
    if (selectedType === "all") return mines;
    if (selectedType === "coal") return mines.filter((m) => m.minetype === "coal");
    if (selectedType === "other") return mines.filter((m) => m.minetype !== "coal");
    return mines;
  }, [selectedType]);

  return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      {/* Filter Overlay */}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 1000,
          background: "white",
          padding: "8px 12px",
          borderRadius: "6px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          fontFamily: "sans-serif",
          fontSize: "14px",
        }}
      >
        <label style={{ marginRight: 8, fontWeight: 600 }}>Filter:</label>
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="all">All Mines</option>
          <option value="coal">Coal Only</option>
          <option value="other">Other Types</option>
        </select>
      </div>

      <MapContainer
        center={[22.5937, 78.9629]}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredMines.map((mine, index) => (
          <Marker key={index} position={[mine.lat, mine.lng]}>
            <Tooltip direction="top" offset={[0, -10]}>
              {mine.name}
            </Tooltip>
            <Popup>
              <MarkerPopup
                mineType={mine.minetype}
                name={mine.name}
                lat={mine.lat}
                lng={mine.lng}
                location={mine.state}
              />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Mapview;
