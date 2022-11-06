import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import {DialogContentText} from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

function AbilityDialog(props){
    const [seat, setSeat] = React.useState('0');

    let numbers = [];
    for(let i=1; i<props.nbrPlayers+1; i++){
        numbers.push(i)
    }

    const handleSubmit = () => {
        props.onSubmit(seat)
    }

    const handleSetSeat = (event) => {
        setSeat(event.target.value)
    }

    return(
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Pick a Seat</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please Pick Your Seat
                </DialogContentText>
                <br/>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        required={true}
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={seat}
                        onChange={handleSetSeat}
                        helperText="Select your target"
                    >
                        {numbers.map((option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        )))}
                    </TextField>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default AbilityDialog