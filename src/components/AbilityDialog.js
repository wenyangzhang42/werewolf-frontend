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
    const [target, setTarget] = React.useState('0');
    const [target2, setTarget2] = React.useState('0');

    let numbers = [];
    for(let i=1; i<props.nbrPlayers+1; i++){
        numbers.push(i)
    }

    const handleSubmit = () => {
        let s = target
        if(props.role == 'cupid'){
            s+= ','+target2
        }
        props.onSubmit(s)
    }

    const handleSetTarget = (event) => {
        setTarget(event.target.value)
    }

    const handleSetTarget2 = (event) => {
        setTarget2(event.target.value);
    };

    return(
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Use Ability</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please select your target(s)
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
                        value={target}
                        onChange={handleSetTarget}
                        helperText="Select your target"
                    >
                        {numbers.map((option => (
                            <MenuItem key={option} value={option.toString()}>
                                {option}
                            </MenuItem>
                        )))}
                    </TextField>
                    <TextField
                        required={props.role=="cupid"}
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={target2}
                        onChange={handleSetTarget2}
                        helperText="Second target, only select if you are Cupid."
                    >
                        {numbers.map((option => (
                            <MenuItem key={option} value={option.toString()}>
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