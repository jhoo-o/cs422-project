import {Button, Typography, Container, Grid} from "@mui/material"
import SettingsBar from "../../components/settingsTopBar";

const TerminateAccount = () => {
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
                    <Button variant="outlined" sx={{flewGrow: 1, color: "white", fontWeight: "bold",
                        backgroundColor: "red", padding: 1, paddingLeft: 8, paddingRight: 8, display: "flex"}}>Delete My Account</Button>
                </Container>
            </Container>
        </>
    );
}

export default TerminateAccount;