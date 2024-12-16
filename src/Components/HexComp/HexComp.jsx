import React,{useState} from 'react';
import { TextField } from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    root: {
        textAlign: "center",
    }
})

export const HexComp = () => {
    const classes = useStyles();
    const [hexValue, setHexValue] = useState("");
    const handleHexValue = (event) => {
        setHexValue(event.target.value);
    }

    return (
        <>
            <div className={classes.root}>
                <h1>Hex Color Code</h1>
                <TextField placeholder='Enter hexcode' size='small' variant="outlined" value={hexValue} onChange={handleHexValue} />
                {hexValue}
            </div>
        </>
    )
}
