import SettingsBar from "../../components/settingsTopBar";
import {Typography, Container} from "@mui/material";

const CreditCardInfo = () => {
    return (
        <>
            <SettingsBar previousDest={"/Settings"}/>
            <Container sx={{flexGrow: 1}}>
                <Typography variant="h3" sx={{flexGrow: 1, color:"blue"}}>
                    Set Credit Card Information
                </Typography>
            </Container>
        </>
    );
}

export default CreditCardInfo;