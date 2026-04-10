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
  const [selectedCountry, setSelectedCountry] = useState("all");

    // 🔥 Dynamic country list
  const countries = useMemo(() => {
    return ["all", ...new Set(mines.map((m) => m.country))];
  }, []);

  // 🔥 Combined filtering
  const filteredMines = useMemo(() => {
    return mines.filter((m) => {
      const typeMatch =
        selectedType === "all"
          ? true
          : selectedType === "coal"
          ? m.minetype === "coal"
          : m.minetype !== "coal";

      const countryMatch =
        selectedCountry === "all"
          ? true
          : m.country === selectedCountry;

      return typeMatch && countryMatch;
    });
  }, [selectedType, selectedCountry]);
 return (
    <div style={{ position: "relative", height: "100vh", width: "100%" }}>
      
      {/* 🔹 Filter Box */}
      <div
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 1000,
          background: "white",
          padding: "10px 14px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
          fontFamily: "sans-serif",
          fontSize: "14px",
          minWidth: "180px",
        }}
      >
        {/* Type Filter */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ fontWeight: 600, display: "block" }}>Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            style={{ width: "100%", marginTop: "4px" }}
          >
            <option value="all">All Mines</option>
            <option value="coal">Coal Only</option>
            <option value="other">Other Types</option>
          </select>
        </div>

        {/* Country Filter */}
        <div>
          <label style={{ fontWeight: 600, display: "block" }}>Country</label>
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            style={{ width: "100%", marginTop: "4px" }}
          >
            {countries.map((c, i) => (
              <option key={i} value={c}>
                {c === "all" ? "All Countries" : c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 🔹 Map */}
      <MapContainer
        center={[22.5937, 78.9629]}
        zoom={5}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='© OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {filteredMines.map((mine, index) => (
          <Marker key={index} position={[mine.lat, mine.lng]}>
            <Tooltip direction="top" offset={[0, -10]}>
              {mine.name}
            </Tooltip>
            <Popup>
              <MarkerPopup
                hasPdf={mine.hasPdf}
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