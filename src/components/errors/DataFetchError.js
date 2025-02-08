import React from "react";
import "./DataFetchError.css";
const DataFetchError = ({ message }) => {
  return (
    <div className="error-container">
      <p className="error-message">{message}</p>
    </div>
  );
};

export default DataFetchError;
