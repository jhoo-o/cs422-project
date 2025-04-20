import {useNavigate} from "react-router-dom";
import {AppBar, Box, List, ListItemText, ListItemButton, Divider, Toolbar, IconButton, Container
    , Typography, Stack, TextField, Button, Link
} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';


const Signup = () => {

    const navigate = useNavigate();

    const toDashboard = (event) => {
        event.preventDefault();
        navigate("/dashboard");
    }

    return (
        <Container sx={{height:"50%", width:"50%", backgroundColor:'#e8f1ff', mt:15,
            justifyContent:"center", flexGrow: 1, boxShadow: 10, borderRadius: 7, padding: 5, paddingBottom: 5}}>
            <Container fixed sx={{flexGrow: 1, width: "100%", justifyContent:"center"}}>
                <Typography variant="h5">
                    Sign up
                </Typography>
                {/* i don't wanna make boxes, stolen from matt */}
                <Stack sx={{display: "flex", flexGrow: 1, justifyContent:"left"}} spacing={1}>
                    <TextField variant="standard" label = "Email"/>
                    <TextField variant="standard" label = "Username"/>
                    <TextField variant="standard" label = "Password"/>
                    <TextField variant='standard' label = 'Confirm Password'/>
                    <Button variant="outlined" sx={{marginTop: 3, fontWeight:"bold", 
                        backgroundColor: "#67f5a0", color:"white", fontSize:17}} onClick = {toDashboard}>
                            Create Account
                    </Button>
                </Stack>
            </Container>
        </Container>
    );
}

export default Signup;