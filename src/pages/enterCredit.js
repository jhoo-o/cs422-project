import { useNavigate, useLocation } from "react-router-dom";
import { AppBar, Box, List, ListItemText, ListItemButton, Divider, Toolbar, IconButton, Container,
    Typography, Stack, TextField, Button, Link } from "@mui/material";
import { ArrowBack, Settings } from '@mui/icons-material';
import process from './jsonProcesser';
import { useState } from "react";

const EnterCredit = () => {
    const navigate = useNavigate();
    const processer = new process();
    const { state } = useLocation();

    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cvv, setCvv] = useState('');
    const [error, setError] = useState(false);

    const handleBack = (event) => {
        event.preventDefault();
        navigate("/Task_Made", { state: {
            name: state.name,
            points: state.points,
            priority: state.priority,
            date: state.date,
            details: state.details
        }});
    };

    const toAddBounty = (event) => {
        event.preventDefault();
        if (name.trim() === '' || cardNumber.trim() === '' || cvv.trim() === '') {
            setError(true);
        } else {
            setError(false);
            processer.setCredit = 'yes';
            navigate("/Add_Bounty", { state: {
                name: state.name,
                points: state.points,
                priority: state.priority,
                date: state.date,
                details: state.details
            }});
        }
    };

    return (
        <div>
            <Box sx={{ flexGrow: 1, justifyContent: 'space-between' }} >
                <AppBar position="static">
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <IconButton size="large" edge="start" onClick={handleBack} sx={{ marginLeft: 2 }}>
                            <ArrowBack />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            <Container sx={{ height: "40%", width: "50%", backgroundColor: '#e8f1ff', mt: 15,
                justifyContent: "center", flexGrow: 1, boxShadow: 10, borderRadius: 7, padding: 5, paddingBottom: 5 }}>
                <Container fixed sx={{ flexGrow: 1, width: "100%", justifyContent: "center" }}>
                    <Typography variant="h5">
                        Enter Card Info
                    </Typography>
                    <Stack sx={{ display: "flex", flexGrow: 1, justifyContent: "left" }} spacing={2}>
                        <TextField
                            variant="standard"
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            error={error && name.trim() === ''}
                            helperText={error && name.trim() === '' ? 'Required' : ''}
                        />
                        <TextField
                            variant="standard"
                            label="Credit Card #"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            error={error && cardNumber.trim() === ''}
                            helperText={error && cardNumber.trim() === '' ? 'Required' : ''}
                        />
                        <TextField
                            variant="standard"
                            label="CVV"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                            error={error && cvv.trim() === ''}
                            helperText={error && cvv.trim() === '' ? 'Required' : ''}
                        />
                        <Button
                            variant="outlined"
                            sx={{ marginTop: 3, fontWeight: "bold", backgroundColor: "#67f5a0", color: "white", fontSize: 17 }}
                            onClick={toAddBounty}
                        >
                            Submit
                        </Button>
                    </Stack>
                </Container>
            </Container>
        </div>
    );
}

export default EnterCredit;
