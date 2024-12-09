import React from "react";

const Intersection = ({ stone, onClick }) => {
    const getColor = () => {
        if (stone === "black") return "black";
        if(stone === "white") return "white";
        return "transparent";
    };

    return (
        <div 
        onClick = {onClick}
        style = {{
            width: "30px",
            height: "30px",
            backgroundColor: "#f4a460",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }}
        >
            <div
                style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: getColor(),
                    borderRadius: "50%",
                }}
                ></div>
                </div>
    );
};

export default Intersection;