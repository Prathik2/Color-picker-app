import React from "react";
import { Rgb } from "./Components/RgbComp/Rgb";
import { makeStyles } from "@mui/styles";

// Define styles using makeStyles
const useStyles = makeStyles({
  container: {
    textAlign: "center",
    marginTop: "20px",
  },
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.title}>Color Picker</div>
      <div className={classes.root}>
        <Rgb color={"Red"} minRange={0} maxRange={255} />
        <Rgb color={"Green"} minRange={0} maxRange={255} />
        <Rgb color={"Blue"} minRange={0} maxRange={255} />
      </div>
    </div>
  );
}

export default App;
