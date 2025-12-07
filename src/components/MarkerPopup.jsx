
const MarkerPopup = ({ mineType, name, lat, lng, location }) => {
    console.log(mineType, name, lat, lng, location)
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{location}</h3>

      <div style={styles.row}>
        <span style={styles.label}>Mine Type:</span>
        <span style={styles.value}>{mineType}</span>
      </div>

      <div style={styles.row}>
        <span style={styles.label}>Name:</span>
        <span style={styles.value}>{name}</span>
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

