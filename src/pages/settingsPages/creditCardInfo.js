import SettingsBar from "../../components/settingsTopBar";
import {Typography, Container, Button, TextField, Stack} from "@mui/material";

const CreditCardInfo = () => {
    return (
        <>
            <SettingsBar previousDest={"/Settings"}/>
            <Container sx={{height:"40%", width:"50%", backgroundColor:'#e8f1ff', mt:15,
                justifyContent:"center", flexGrow: 1, boxShadow: 10, borderRadius: 7, padding: 5, paddingBottom: 5}}>
                <Container fixed sx={{flexGrow: 1, width: "100%", justifyContent:"center"}}>
                    <Typography variant="h5">
                        Edit Card Information
                    </Typography>
                    <Stack sx={{display: "flex", flexGrow: 1, justifyContent:"left"}}>
                        <TextField variant="standard" label = "Name"/>
                        <TextField variant="standard" label = "Credit Card #"/>
                        <TextField variant="standard" label = "CVV"/>
                        <Button variant="outlined" sx={{marginTop: 3, fontWeight:"bold"}}>Submit</Button>
                    </Stack>
                </Container>
            </Container>
        </>
    );
}

export default CreditCardInfo;