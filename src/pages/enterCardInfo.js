import SettingsBar from "../../components/settingsTopBar";
import {Typography, Container, Button, TextField, Stack} from "@mui/material";

const EnterCardInfo = () => {
    return (
        <>
            <SettingsBar previousDest={"/Task_Submission"}/>
            <Container sx={{height:"40%", width:"90%", backgroundColor:'#e8f1ff', mt:15,
                justifyContent:"center", flexGrow: 1, boxShadow: 10, borderRadius: 7, padding: 5, paddingBottom: 5}}>
                <Container fixed sx={{flexGrow: 1, width: "100%", justifyContent:"center"}}>
                    <Typography variant="h5">
                        Enter Card Info
                    </Typography>
                    <Stack sx={{display: "flex", flexGrow: 1, justifyContent:"left"}}>
                        <TextField variant="standard" label = "Name"/>
                        <TextField variant="standard" label = "Credit Card #"/>
                        <TextField variant="standard" label = "CVV"/>
                        <Button variant="outlined" sx={{marginTop: 3, fontWeight:"bold", 
                            backgroundColor: "#67f5a0", color:"white", fontSize:17}}>Submit</Button>
                    </Stack>
                </Container>
            </Container>
        </>
    );
}

export default EnterCardInfo;