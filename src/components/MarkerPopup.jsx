import { useNavigate } from "react-router";

const MarkerPopup = ({ options, lat, lng, location }) => {
const navigate=useNavigate()
    const handleClick = (key) => {
         const url = `/${lat}/${lng}/${key}`;
        navigate(url)// open in same tab
        //window.open(url, "_blank");//opens in new tab
    }
    return (
        <div>
            <strong>{location}</strong>
            <ul style={{ listStyle: "none", padding: 0, marginTop: "0.5rem" }}>
                {options.map((opt, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleClick(opt.key)}
                            style={{
                                background: "none",
                                border: "none",
                                color: "#0077cc",
                                cursor: "pointer",
                                textDecoration: "underline",
                                marginBottom: "4px"
                            }}
                        >
                            {opt.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MarkerPopup;
