import {Button, Typography, Container, DialogContent, DialogTitle, Dialog, DialogContentText, DialogActions} from "@mui/material"
import {useState} from "react";
import SettingsBar from "../../components/settingsTopBar";
import { useNavigate } from "react-router-dom";

const TerminateAccount = () => {

    const [popupCheck, setOpen] = useState(false);
    const navigate = useNavigate();

    //opens dialog
    const popup = (event) => {
        event.preventDefault();
        setOpen(true);
    }

    //we jump to the sing-up section
    const handleTermination = (event) => {
        event.preventDefault();
        navigate("/Signup");
    }

    //this will close popup
    const handleClose = (event) => {
        event.preventDefault();
        setOpen(false);
    }

    return (
        <>
            <SettingsBar previousDest={"/Settings"}/>
            <Container sx={{height:"30%", width:"50%", backgroundColor:'#e8f1ff', mt:15,
                justifyContent:"center", flexGrow: 1, boxShadow: 10, borderRadius: 7, padding: 5, paddingBottom: 5}}>
                <Typography variant="h5" sx={{flexGrow: 1, textAlign: "center", fontWeight: "bold"}}>
                    Delete Account
                </Typography>
                <Typography sx={{flexGrow: 1, marginBottom: 3}}>
                    If you wish to delete your account, you will need to create a new account in order to use the
                    Forfeit app again. Your data will not be saved after you delete your account, as this decision is permanent.
                </Typography>
                <Container fixed sx={{display: "flex", flexGrow: 1, justifyContent: "center", width: "100%"}}>
                    <Button variant="outlined"  onClick={popup} sx={{flewGrow: 1, color: "white", fontWeight: "bold",
                        backgroundColor: "red", padding: 1, paddingLeft: 8, paddingRight: 8, display: "flex"}}>Delete My Account</Button>
                </Container>
                <Dialog open={popupCheck} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
                    <DialogTitle>
                        {"Are you sure you wish to remove your account?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            This decision is permanent and cannot be reversed under any pretenses. You will
                            need to create a new account in order to use the Forfeit app again.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={handleTermination} sx={{ flexGrow: 1,
                            color: "white", backgroundColor:"red", fontWeight:"bold"
                        }}>Delete My Account</Button>
                        <Button variant="outlined" onClick={handleClose} sx={{ flexGrow: 1, fontWeight:"bold",
                        color:"white", backgroundColor:"#334af5"
                        }}> I Changed My Mind</Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </>
    );
}

export default TerminateAccount;