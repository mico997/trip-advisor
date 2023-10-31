import React from "react";

function Checker() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "80px 20px",
      }}
    >
      We do Not have acces to your location
      <div>
        Please turn on your location & Ensure your browser has access to your
        location
      </div>
    </div>
  );
}

export default Checker;
