import { useParams } from "react-router";
import mines from "../data.js";

const DetailsPage = () => {
  const { lat, lng, option } = useParams();

  const parsedLat = parseFloat(lat);
  const parsedLng = parseFloat(lng);

  // Find the mine with matching lat/lng
  const mine = mines.find(
    (m) => m.lat === parsedLat && m.lng === parsedLng
  );

  if (!mine) {
    return <div style={{ padding: "1rem" }}>Mine not found for given coordinates.</div>;
  }

  // Find the option by key
  const detail = mine.options.find((opt) => opt.key === option);

  if (!detail) {
    return <div style={{ padding: "1rem" }}>Detail "{option}" not found for this mine.</div>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{mine.location}</h2>
      <p><strong>{detail.label}:</strong> {detail.data}</p>
    </div>
  );
};

export default DetailsPage;

