const MarkerPopup = ({ mineType, name, lat, lng, location }) => {

  const handleOpenPDF = () => {
    // convert name to file-friendly format if needed
    const fileName = name.replace(/\s+/g, "_"); // e.g. "Jharia Mine" -> "Jharia_Mine"
    
    const pdfUrl = `/pdf/${fileName}.pdf`;

    window.open(pdfUrl, "_blank"); // open in new tab
  };

  return (
    <div style={styles.container}>
      <h3 
        style={{ ...styles.title, cursor: "pointer", color: "#007bff" }} 
        onClick={handleOpenPDF}
      >
        {name}
      </h3>

      <div style={styles.row}>
        <span style={styles.label}>Mine Type:</span>
        <span style={styles.value}>{mineType}</span>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Location:</span>
        <span style={styles.value}>{location}</span>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Coordinates:</span>
        <span style={styles.value}>
          {lat}° N, {lng}° E
        </span>
      </div>
    </div>
  );
};
const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    lineHeight: "1.5",
  },
  title: {
    margin: "0 0 8px 0",
    fontSize: "16px",
    fontWeight: "bold",
  },
  row: {
    marginBottom: "4px",
  },
  label: {
    fontWeight: "600",
    marginRight: "4px",
  },
  value: {
    color: "#333",
  },
};

export default MarkerPopup;

