import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SetupDialog(props) {
    const [nbrVillagers, setNbrVillagers] = React.useState(3);
    const [nbrWerewolves, setNbrWerewolves] = React.useState(3);
    const [gods, setGods] = React.useState("seer,witch,hunter");
    const [specials, setSpecials] = React.useState("");

    const numbers = [1,2,3,4,5,6]

    const handleVillagerSelection = (event) => {
        setNbrVillagers(event.target.value);
    };
    const handleWerewolfSelection = (event) => {
        setNbrWerewolves(event.target.value);
    };
    const handleGodsSelection = (event) => {
        setGods(event.target.value);
    };
    const handleSpecialsSelection = (event) => {
        setSpecials(event.target.value);
    };

    const handleSubmit = () => {
        let roles = gods+","+specials
        for(let i=0; i<nbrVillagers; i++){
            roles += ","+"villager";
        }
        for(let i=0; i<nbrWerewolves; i++){
            roles += ","+"werewolf";
        }
        props.onSubmit(roles);
    }

    return (
        <Dialog open={props.open} onClose={props.onClose}>
            <DialogTitle>Game Settings</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter the roles of this game.
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
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={nbrVillagers}
                        onChange={handleVillagerSelection}
                        helperText="Select number of villagers"
                    >
                        {numbers.map((option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        )))}
                    </TextField>
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={nbrWerewolves}
                        onChange={handleWerewolfSelection}
                        helperText="Select number of werewolves"
                    >
                        {numbers.map((option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        )))}
                    </TextField>
                </Box>
                <TextField
                    autoFocus
                    margin="dense"
                    id="Gods"
                    label = "Gods, separate by comma. e.g. seer,witch,hunter"
                    type = "string"
                    value= {gods}
                    onChange={handleGodsSelection}
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    margin="dense"
                    id="Special"
                    label = "Special Characters, separate by comma. e.g. wolfking,whitewolf,cupid"
                    value= {specials}
                    onChange={handleSpecialsSelection}
                    type = "string"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
            </DialogActions>
        </Dialog>
    );
}
