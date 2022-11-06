import React from 'react'
import {Button, styled} from "@mui/material";

import SetupDialog from "./SetupDialog";
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

function SetupButton(props){
    const [msg, setMsg] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [openMsg, setOpenMsg] = React.useState(false);

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (value) => {
        setOpen(false);
        setOpenMsg(false);
    };

    const handleSubmit = async (value) => {
        setOpen(false);
        try {
            let response = await fetch(`http://44.203.137.157/setup?roles=${value}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Accept: 'application/json',
                }
            })
            let res = await response.json()
            if(res.status_code != 200){
                setMsg(res.error)
            }else {
                setMsg(res.result.message)
                props.setNbrPlayers(res.result.count)
            }
        } catch (err) {
            setMsg(err.message);
        } finally {
            setOpenMsg(true)
        }
    };

    return (
        <div>
            {/*<StyledButton variant="contained" onClick={handleClickOpen}>Use Ability</StyledButton>*/}
            <StyledButton variant="contained" onClick={handleClick}>Setup Game</StyledButton>
            <SetupDialog
                open={open}
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

export default SetupButton