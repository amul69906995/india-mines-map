const MarkerPopup = ({mineType, name, lat, lng, location, hasPdf }) => {

  const handleOpenPDF = () => {
    if (!hasPdf) {
      alert("⚠️ PDF not available for this mine");
      return;
    }

    const fileName = name.replace(/\s+/g, "_");
    const pdfUrl = `/pdf/${fileName}.pdf`;

    window.open(pdfUrl, "_blank");
  };

  return (
    <div style={styles.container}>
      <h3
        style={{ ...styles.title, cursor: hasPdf ? "pointer" : "not-allowed", color: hasPdf ? "#007bff" : "gray" }}
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

      {!hasPdf && (
        <div style={{ color: "red", marginTop: "6px" }}>
          PDF not available
        </div>
      )}
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

