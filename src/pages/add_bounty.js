import React, { useState } from 'react';
import {useNavigate, useLocation} from "react-router-dom";
import {AppBar, Box, List, ListItemText, ListItemButton, Divider, Toolbar, IconButton, Container
    , Typography, Stack, TextField, Button, Link, FormControlLabel, FormControl, Radio, RadioGroup,
    FormLabel
} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';
import process from './jsonProcesser';

const AddBounty = () => {

    const navigate = useNavigate();


    const handleBack = (event) =>{
        event.preventDefault();
        navigate("/Task_Made", {state: {
            name: state.name,
            points: state.points,
            priority: state.priority,
            date: state.date,
            details: state.details
        }})
    }

    const toDashboard = (event) => {
        event.preventDefault();
        state.bounty = bountyVal;
        
        processer.setTasks = state;
        const eventObj = {
            title: state.name,
            allDay: true,
            start: state.date,
            end: state.date
        }
        processer.setEvents=eventObj
        navigate("/dashboard");
    }

    const processer = new process();

    const {state} = useLocation();

    const [bountyVal, setBountyVal] = useState(0);

    return (
        <div>
            <Box sx={{flexGrow: 1, justifyContent: 'space-between'}} >
                <AppBar position="static" >
                    <Toolbar sx={{justifyContent: 'space-between'}}>
                        <IconButton size="large" edge="start" onClick={handleBack} sx = {{marginLeft: 2}}>
                            < ArrowBack />
                        </IconButton>
                        
                    </Toolbar>
                </AppBar>
            </Box>
            <Container sx={{height:"40%", width:"50%", backgroundColor:'#e8f1ff', mt:15,
                justifyContent:"center", flexGrow: 1, boxShadow: 10, borderRadius: 7, padding: 5, paddingBottom: 5}}>
                <Container fixed sx={{flexGrow: 1, width: "100%", justifyContent:"center"}}>
                    <Typography variant="h5">
                            Add a Bounty
                    </Typography>
                    <Stack sx={{display: "flex", flexGrow: 1, justifyContent:"left"}}>
                        <TextField type='number' variant="standard" label = "$" value = {bountyVal} onChange={(e) => setBountyVal(e.target.value)}/>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Pick a Charity</FormLabel>
                            <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Charity 1"
                            >
                                <FormControlLabel value="Charity 1" control={<Radio />} label="Charity 1" />
                                <FormControlLabel value="Charity 2" control={<Radio />} label="Charity 2" />
                                <FormControlLabel value="Charity 3" control={<Radio />} label="Charity 3" />
                            </RadioGroup>
                        </FormControl>
                        <Button variant="outlined" sx={{marginTop: 3, fontWeight:"bold", 
                            backgroundColor: "#67f5a0", color:"white", fontSize:17}} onClick={toDashboard}>Submit</Button>
                    </Stack>
                </Container>
            </Container>
        </div>
        
    );
}

export default AddBounty;