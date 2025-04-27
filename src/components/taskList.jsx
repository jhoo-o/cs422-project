import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {ArrowBack, Settings} from '@mui/icons-material';
import {AppBar, Box, Toolbar, IconButton, Typography, Stack, ListItem,
    Divider
} from "@mui/material";
import MediaQuery from "react-responsive";
import redDia from "../pages/added_assets/red_diamond.png";
import oraDia from "../pages/added_assets/orange_diamond.png";
import greDia from "../pages/added_assets/green_diamond.png";

const TaskList = (task, display) => {
    const navigate = useNavigate();
    const toTaskDetail = (event) => {
        event.preventDefault();
        navigate("/Task_Detail", {state: {
            name: task.task.name,
            points: task.task.points,
            priority: task.task.priority,
            date: task.task.date,
            details: task.task.details,
            bounty: task.task.bounty
        }})
    }
    console.log({display});
    const TimeDiamond = (date) =>{
        
        let startingDate = new Date();        
        // let startingDate = new Date('04/30/2025'); // hard coding start date just for example

        let utc1 = Date.UTC(startingDate.getFullYear(), startingDate.getMonth(), startingDate.getDate());

        //i can't believe the atrocities i have allowed to transpire
        let utc2 = Date.UTC(date.date.getFullYear(), date.date.getMonth(), date.date.getDate());

        let timeDiff = Math.abs(utc2-utc1);
        let dayDifference = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));



        //console.log(date.date)
        if (dayDifference == 0){
            return (
                <Box width = '8vw' height = '8vh' sx = {{position: 'relative', justifyContent:'center', alignItems:'center', display: 'flex'}}>
                    <img src = {redDia} alt = 'today' style = {{width: '100%', height:'100%', objectFit: 'contain', position: 'absolute'}}/>
                    <Typography sx = {{position: 'absolute',  flexGrow:1, fontSize:'2vh'}} align='center'>
                        TODAY
                    </Typography>
                </Box>
            )
        } else if (dayDifference>=1 && dayDifference <=3){
            return (
                <Box width = '8vw' height = '8vh' sx = {{position: 'relative', justifyContent:'center', alignItems:'center', display: 'flex'}}>
                    <img src = {oraDia} alt = '1-3 days' style = {{width: '100%', height:'100%', objectFit: 'contain', position: 'absolute'}}/>
                    <Typography sx = {{position: 'absolute',  flexGrow:1, fontSize:'2vh'}} align='center'>
                        {dayDifference} days
                    </Typography>
                </Box>
            )
        } else {
            return (
                <Box width = '8vw' height = '8vh' sx = {{position: 'relative', justifyContent:'center', alignItems:'center', display: 'flex'}}>
                    <img src = {greDia} alt = '4+ days' style = {{width: '100%', height:'100%', objectFit: 'contain', position: 'absolute'}}/>
                    <Typography sx = {{position: 'absolute',  flexGrow:1, fontSize:'2vh'}} align='center'>
                        {dayDifference} days
                    </Typography>
                </Box>
            )
        }
    }

    console.log(display);
    return (
        <div>
            <MediaQuery minWidth = {1082}>
                <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height:'15vh'}} onClick = {toTaskDetail}>
                    {/* don't ask me about the task.task thing idk what happened either */}
                    <TimeDiamond date={task.task.date}/> 

                    <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                        <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                            <Typography variant='body2' sx = {{fontSize: '2.75vh'}}>
                                {task.task.name}
                            </Typography>
                            <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                <Typography variant = 'body2' sx = {{fontSize: '2vh', p:1.5}}>
                                {task.task.points==1 ? task.task.points+'pt' :task.task.points+'pts'}
                                </Typography>
                            </Box>
                        </Box>
                        
                        <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                            <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vh'}} >
                                {task.task.details}
                            </Typography>
                        
                            <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vh'}}>
                            {task.task.bounty == 0 || undefined ? '':'$'+task.task.bounty}
                            </Typography>
                        </Box>
                    </Stack>
                </ListItem>
            </MediaQuery>
            {/* Mobile */}
            <MediaQuery maxWidth={1081}>
                <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height:'15vh'}} onClick = {toTaskDetail}>
                    <TimeDiamond date={task.task.date}/>
                    <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                        <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                            <Typography variant='body2' sx = {{fontSize: '2.75vw'}}>
                                {task.task.name}
                            </Typography>
                            <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                <Typography variant = 'body2' sx = {{fontSize: '2vw', p:1.5}}>
                                    {task.task.points==1 ? task.task.points+'pt' : task.task.points+'pts'}
                                </Typography>
                            </Box>
                        </Box>
                        
                        <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                            <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vw'}} >
                                {task.task.details}
                            </Typography>
                        
                            <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vw'}}>
                                {task.task.bounty != 0 ? '$'+task.task.bounty:''}
                            </Typography>
                        </Box>
                    </Stack>
                </ListItem>
            </MediaQuery>
        </div>
    )
        
        
    
}

export default TaskList;