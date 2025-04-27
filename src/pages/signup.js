import {useNavigate} from "react-router-dom";
import {Container, Typography, Stack, TextField, Button, 
} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';
import { useState } from "react";

const Signup = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(false);

    const toDashboard = (event) => {
        event.preventDefault();
        if (email.trim() === '' || username.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            setError(true);
        } else if (password !== confirmPassword) {
            setError(true);
        } else {
            setError(false);
            navigate("/dashboard");
        }
    }

    return (
        <Container sx={{height:"50%", width:"50%", backgroundColor:'#e8f1ff', mt:15,
            justifyContent:"center", flexGrow: 1, boxShadow: 10, borderRadius: 7, padding: 5, paddingBottom: 5}}>
            <Container fixed sx={{flexGrow: 1, width: "100%", justifyContent:"center"}}>
                <Typography variant="h5">
                    Sign up
                </Typography>
                <Stack sx={{display: "flex", flexGrow: 1, justifyContent:"left"}} spacing={1}>
                    <TextField
                        variant="standard"
                        label="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={error && email.trim() === ''}
                        helperText={error && email.trim() === '' ? "Email is required" : ''}
                    />
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
                    <TextField
                        variant="standard"
                        label="Confirm Password"
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        error={error && (confirmPassword.trim() === '' || password !== confirmPassword)}
                        helperText={error && (confirmPassword.trim() === '' ? "Confirm your password" :
                            password !== confirmPassword ? "Passwords do not match" : '')}
                    />
                    <Button variant="outlined" sx={{marginTop: 3, fontWeight:"bold", 
                        backgroundColor: "#67f5a0", color:"white", fontSize:17}} onClick={toDashboard}>
                        Create Account
                    </Button>
                </Stack>
            </Container>
        </Container>
    );
}

export default Signup;
