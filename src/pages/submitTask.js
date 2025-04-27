import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {AppBar, Box, Container, Toolbar, 
    IconButton, Typography,TextField,
    Button} from "@mui/material";
import {ArrowBack} from '@mui/icons-material';
import { useNavigate } from "react-router-dom";
import process from './jsonProcesser';

const SubmitTask = () => {
    const navigate = useNavigate();
    const handleBack = (event) => {
        event.preventDefault();
        navigate("/task_details", { state: {
            name: state.name,
            points: state.points,
            priority: state.priority,
            date: state.date,
            details: state.details,
            bounty: state.bounty
        }})
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        processer.deleteTaskEvent(state);
        navigate("/dashboard")
    }

    const processer = new process();
    const { state } = useLocation();

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" onClick={handleBack}>
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
                        <Button onClick={handleSubmit} variant="text" sx={{fontWeight:"bold", color:"white", backgroundColor: "#67f5a0", paddingRight: 7,
                            paddingLeft: 7, paddingTop: 1, paddingBottom:1, mt:3, flexGrow:1}}>Submit</Button>
                    </Container>
                </form>
            </Container>
        </>
    );
}

export default SubmitTask;