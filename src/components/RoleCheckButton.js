import React from 'react'
import {Button, styled, Dialog} from "@mui/material";

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

function RoleCheckButton(){
    const [msg, setMsg] = React.useState("");
    const [openMsg, setOpenMsg] = React.useState(false);

    const handleClick = async () => {
        try {
            let response = await fetch(`http://localhost:8000/role`, {
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
            }
        } catch (err) {
            setMsg(err.message);
        } finally {
            setOpenMsg(true)
        }
    }

    const handleClose = (value) => {
        setOpenMsg(false);
    };

    return (
        <div>
            <StyledButton variant="contained" onClick={handleClick}>Check Your Role</StyledButton>
            <MessageDialog
                open={openMsg}
                value={msg}
                onClose={handleClose}
            />
        </div>
    )
}

export default RoleCheckButton