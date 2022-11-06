import React from 'react'
import {Button, styled, Dialog} from "@mui/material";

import AbilityDialog from "./AbilityDialog";
import MessageDialog from "./MessageDialog";

const StyledButton = styled(Button)({
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    height: "33px",
    padding: "0 35px",
    boxSizing: "border-box",
    borderRadius: 0,
    background: "#4f25f7",
    color: "#fff",
    transform: "none",
    boxShadow: "6px 6px 0 0 #c7d8ed",
    transition: "background .3s,border-color .3s,color .3s",
    "&:hover": {
        backgroundColor:  "#4f25f7"
    },
    textTransform: 'capitalize',
});

function AbilityButton(){
    const [msg, setMsg] = React.useState("");
    const [role, setRole] = React.useState('unset');
    const [seat, setSeat] = React.useState('unset');
    const [nbrPlayers, setNbrPlayers] = React.useState(9);
    const [stage, setStage] = React.useState('no');
    const [open, setOpen] = React.useState(false);
    const [openMsg, setOpenMsg] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        setOpenMsg(false)
    };

    const preAbilityCheck = async () => {
        try {
            let response = await fetch(`http://localhost:8000/pre_ability`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json',
                }
            })
            let res = await response.json()

            if(res.status_code != 200){
                setMsg(res.error)
                setOpenMsg(true)
            }else {
                setMsg(res.result.message)
                setSeat(res.result.seat)
                setRole(res.result.role)
                setNbrPlayers(res.result.count)
                setOpen(true)
            }

        } catch (err) {
            setMsg(err.message);
            setOpenMsg(true)
        }
    }

    const handleSubmit = async (targets) => {
        setOpen(false)
        try {
            let response = await fetch(`http://localhost:8000/ability/${role}/${seat}?targets=${targets}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json',
                }
            })
            let res = await response.json()
            if(res.status_code != 200){
                setMsg(res.error)
                setOpenMsg(true)
            }else {
                setMsg(res.result.message)
                setStage(res.result.stage)
                setOpenMsg(true)
            }

        } catch (err) {
            setMsg(err.message);
            setOpenMsg(true)
        }
    }

    const temp = () => {
        setOpen(true)
    }

    return (
        <div>
            <StyledButton variant="contained" onClick={preAbilityCheck}>Use Ability</StyledButton>
            <AbilityDialog
                open={open}
                msg={msg}
                role={role}
                nbrPlayers={nbrPlayers}
                onClose={handleClose}
                onSubmit={handleSubmit}
            />
            <MessageDialog
                open={openMsg}
                value={msg}
                onClose={handleClose}
            />
        </div>
    )
}

export default AbilityButton