import {useNavigate} from "react-router-dom";
import {AppBar, Box, List, ListItemText, ListItemButton, Divider, Toolbar, IconButton, Container
    , Typography, Stack, TextField, Button, Link
} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';
import { useState } from "react";

const Signin = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const toDashboard = (event) => {
        event.preventDefault();
        if (username.trim() === '' || password.trim() === '') {
            setError(true);
        } else {
            setError(false);
            navigate("/dashboard");
        }
    }

    const toAccount = (event) => {
        event.preventDefault();
        navigate('/signup');
    }

    return (
        <Container sx={{height:"40%", width:"50%", backgroundColor:'#e8f1ff', mt:15,
            justifyContent:"center", flexGrow: 1, boxShadow: 10, borderRadius: 7, padding: 5, paddingBottom: 5}}>
            <Container fixed sx={{flexGrow: 1, width: "100%", justifyContent:"center"}}>
                <Typography variant="h5">
                    Sign in
                </Typography>
                <Stack sx={{display: "flex", flexGrow: 1, justifyContent:"left"}} spacing={1}>
                    <TextField
                        variant="standard"
                        label="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        error={error && username.trim() === ''}
                        helperText={error && username.trim() === '' ? "Username is required" : ''}
                    />
                    <TextField
                        variant="standard"
                        label="Password"
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        error={error && password.trim() === ''}
                        helperText={error && password.trim() === '' ? "Password is required" : ''}
                    />
                    <Button variant="outlined" sx={{marginTop: 3, fontWeight:"bold", 
                        backgroundColor: "#67f5a0", color:"white", fontSize:17}} onClick={toDashboard}>
                        Submit
                    </Button>
                    <Link underline='hover' color='blue' align='center' variant="body2" onClick={toAccount}>
                        Create Account
                    </Link>
                </Stack>
            </Container>
        </Container>
    );
}

export default Signin;
