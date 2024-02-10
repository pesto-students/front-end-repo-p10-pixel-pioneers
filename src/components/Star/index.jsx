import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import "./style.css"

const Star = ({ marked, rating }) => {
    return (
        <Stack direction={"row"} alignItems={"center"} className="star-container">
            <span style={{fontSize: "medium"}}>
                {rating || "N/A"}
            </span>
            <span className="star" role="button">
                {marked ? '\u2605' : '\u2606'}
            </span>
        </ Stack>
    )
}

export default Star;