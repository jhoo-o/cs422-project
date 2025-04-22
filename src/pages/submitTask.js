import React, { useState } from 'react';
import {AppBar, Box, Container, List, ListItemText, ListItemButton, Divider, Toolbar, 
    IconButton, Icon, SvgIcon, ListItem, ListItemAvatar, Avatar, Stack, Typography,
    FormGroup,
    FormControlLabel, TextField,
    Button} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";

const SubmitTask = () => {
    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        navigate("/dashboard")
    }

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" onClick={handleClick}>
                            < ArrowBack />
                        </IconButton>
                        <Container sx={{width:"100%"}}>
                            <Typography variant="h5" sx={{flexGrow:1, textAlign:"center"}}>Confirm Submit Task</Typography>
                        </Container>   
                    </Toolbar>
                </AppBar>
            </Box>
            <Container sx={{flexGrow:1, width:"75%", justifyContent:"center", mt:3}}>
                <form>
                    <TextField fullWidth type='file' inputProps={{accept: "image/*, video/*"}} />
                    <Container sx={{alignContent:"center", display:"flex"}}>
                        <Button onClick={handleClick} variant="text" sx={{fontWeight:"bold", color:"white", backgroundColor: "#67f5a0", paddingRight: 7,
                            paddingLeft: 7, paddingTop: 1, paddingBottom:1, mt:3, flexGrow:1}}>Submit</Button>
                    </Container>
                </form>
            </Container>
        </>
    );
}

export default SubmitTask;