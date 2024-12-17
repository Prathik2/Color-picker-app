import React, { useState } from "react";
import Slider from "@mui/material/Slider";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "300px",
    height: "75px",
    margin: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    padding: "10px 20px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
  slider: {
    width: "100%",
    color: "#1976d2",
  },
  valueText: {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  },
});

export const Rgb = ({ color, minRange, maxRange, onColorChange }) => {
  const classes = useStyles();
  const [value, setValue] = useState(125);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onColorChange(newValue);
  };

  return (
    <div className={classes.container}>
      <Slider
        className={classes.slider}
        aria-label={color}
        value={value}
        onChange={handleChange}
        min={minRange}
        max={maxRange}
      />
      <p className={classes.valueText}>
        {color}: {value}
      </p>
    </div>
  );
};
