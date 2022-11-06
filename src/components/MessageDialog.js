import Dialog from '@mui/material/Dialog';
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
import {DialogContentText} from "@mui/material";

function MessageDialog(props){

    const handleClose = () => {
        props.onClose();
    };

    return(
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>Message:</DialogTitle>
            <DialogContentText>{props.value}</DialogContentText>
        </Dialog>
    )
}

export default MessageDialog