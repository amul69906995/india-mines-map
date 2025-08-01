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
    return (
        <MapContainer
            center={[22.5937, 78.9629]}
            zoom={5}
            style={{ height: "100vh", width: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mines.map((mine, index) => (
                <Marker key={index} position={[mine.lat, mine.lng]}>
                    <Tooltip direction="top" offset={[0, -10]}>{mine.location}</Tooltip>
                    <Popup>
                        <MarkerPopup options={mine.options} lat={mine.lat} lng={mine.lng} location={mine.location} />
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    )
}
export default Mapview;