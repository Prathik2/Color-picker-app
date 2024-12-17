import React,{useState} from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
    colorDiv: {
        width: "400px",
        height: "100px",
        color: 'white',
        boxSizing: "border-box",
        marginTop: "10px",
        paddingTop: "33px", 
    }
})

export const HexComp = () => {
    const DEFAULT_COLOR = "#3333cc";
    const classes = useStyles();
    const [hexValue, setHexValue] = useState(DEFAULT_COLOR);
    const handleHexValue = (event) => {
        setHexValue(event.target.value);
    }

    return (
        <>
            <div className={classes.root}>
                <h2>Hex Color Code</h2>
                <TextField placeholder='Enter hexcode' size='small' variant="outlined" value={hexValue} onChange={handleHexValue} />
                <div className={classes.colorDiv} style={{backgroundColor: hexValue}}>{hexValue}</div>
            </div>
        </>
    )
}
