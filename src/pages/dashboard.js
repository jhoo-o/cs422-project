import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {AppBar, Box, List, 
    Divider, Toolbar, IconButton, SvgIcon, Stack, 
    Fab, Popover, Button} from "@mui/material";
import {Settings, Add, Person} from '@mui/icons-material';
import picture from './added_assets/circle.png';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from "./user_data/events";
import MediaQuery from 'react-responsive';
import streak from "./added_assets/streak.png";
import process from './jsonProcesser';
import TaskList from '../components/taskList.jsx';

const localizer = momentLocalizer(moment)

const Dashboard = () => {

    const navigate = useNavigate();
    const processer = new process();
    const taskArray = processer.getTasks;
    const eventArray = processer.getEvents;

    console.log(taskArray);


    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const TaskListing = (display) =>{
        const tasks = taskArray.map(task => <TaskList task={task} display = {display.display}/>);

        if (display.display=='desktop'){
            return (
                <List sx = {{flexGrow: 1, background: '#F8F9FA', overflowY: 'scroll', maxHeight: '90vh', overflow: 'auto', width: '50vw'}}>
                    {tasks}
                </List>
            )
        }else{
            return (
                <List sx ={{flexGrow: 1, background: '#F8F9FA', overflowY: 'scroll', maxHeight: '44vh', overflow: 'auto'}}>
                    {tasks}
                </List>
            )
        }
        
    }


    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const toSettings = (event) => {
        event.preventDefault();
        navigate("/Settings");
    }

    const toTaskCreate = (event) => {
        event.preventDefault();
        navigate('/Task_Create');
    }

    const toSignin = (event) => {
        event.preventDefault();
        navigate('/Signin');
    }

    const toDetails = (event) => {
        navigate('/Task_Detail');
    }

    
    const [eventsData, setEventsData] = useState(events);

    return (
        <div>
            {/* Mobile */}
            <MediaQuery maxWidth={1081}>
                {/*WHY ARE COMMENTS LIKE THIS, anyways stole this box from matthew, store settings bar*/}
                <Box sx={{flexGrow: 1, height: '4vh', justifyContent: 'space-between'}}>
                    <AppBar position="static">
                        <Toolbar sx={{justifyContent: 'space-between'}}>
                            <Box sx={{}}>
                                <IconButton aria-label='person' size = 'large' onClick={handleClick}>
                                    <Person sx={{width: '2.75vh', height: '2.75vh'}}/>
                                </IconButton>
                                <Popover id = {id} open = {open} anchorEl={anchorEl} onClose = {handleClose}
                                anchorOrigin = {{vertical: 'bottom', horizontal: 'left'}}>
                                    <Stack spacing = {1} divider ={<Divider variane = 'middle'/>} 
                                    sx = {{width: 1, p: 1, alignContent: 'center'}}>
                                        <Button variant = 'outlined' onClick = {toSignin} 
                                            sx={{flexGrow: 1, color: 'white', backgroundColor: 'red', 
                                                fontWeight: 'bold', p:1, width: 0.85 
                                            }}
                                            // button looks even, kinda fine, also how tf did i make a comment like this
                                        >
                                            Sign Out
                                        </Button>
                                    </Stack>
                                </Popover>
                            </Box>
                            <Box width='3vh' height = '3vh'>
                                <img src={streak} alt = 'streak' style ={{width: '100%', height:'100%', objectFit: 'contain'}}/>
                            </Box>
                            <IconButton size = "large" onClick={toSettings} >
                                <Settings sx={{width: '2.75vh', height: '2.75vh'}}/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
                {/* Calendar box*/}
                <Box sx={{flexGrow: 1, background: '#F9F9FA'}}>
                    <Calendar
                        views = {['week', 'month']}
                        localizer = {localizer}
                        selectable
                        defaultDate = {new Date(2025, 4, 16)}
                        defaultView = 'month'
                        style = {{height:'50vh', width : '100vw'}}
                        startAccessor="start"
                        endAccessor="end"
                        events = {eventArray}
                    />
                </Box>
                {/* Stores user task list*/}
                <Box sx={{flexGrow: 1, width: 1, height: 'auto'}}>
                    <TaskListing processObj = {processer} display = 'mobile'/>
                </Box>
                <Fab color = 'primary' aria-label='add' onClick={toTaskCreate}
                style ={{position: 'fixed', right: '5vw', top: '80vh', height: '12vh', width: '12vh'}}>
                    <SvgIcon sx={{height: '5vh', width: '5vh'}}>
                        <Add />
                    </SvgIcon>
                    
                </Fab>
            </MediaQuery>
            <MediaQuery minWidth={1082}>
                <Box sx={{flexGrow: 1, height: '8vh'}}>
                    <AppBar position="static" height='4vh'>
                        <Toolbar sx={{justifyContent: 'space-between'}}>
                            <Box sx={{}}>
                                <img src = {picture} height={32} width={32}></img>
                                {/*change later to logo once we have it kind just meant 
                                to make the center look center*/}
                            </Box>
                            <Box width='5vw' height = '4vh'>
                                    <img src={streak} alt = 'streak' style ={{width: '100%', height:'100%', objectFit: 'contain'}}/>
                            </Box>
                            <IconButton size = "large" onClick={toSettings} sx={{}}>
                                <Settings />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>
                {/* for calendar and task list */}
                <Stack direction = "row">
                    <Box sx={{flexGrow: 1, background: '#F9F9FA'}}>
                        <Calendar
                            views = {['week', 'month']}
                            localizer = {localizer}
                            selectable
                            defaultDate = {new Date(2025, 4, 16)}
                            defaultView = 'month'
                            style = {{height:'90vh', width : '50vw'}}
                            startAccessor="start"
                            endAccessor="end"
                            events = {eventsData}
                        />
                    </Box>
                    {/* task list */}
                    <Box sx={{flexGrow:1, width:1, width: 'auto'}}>
                        <List sx = {{flexGrow: 1, background: '#F8F9FA', overflowY: 'scroll', maxHeight: '90vh', overflow: 'auto', width: '50vw'}}>
                            <TaskListing processObj = {processer} display = 'desktop'/>
                        </List>
                    </Box>
                </Stack>
                <Fab color = "primary" aria-label='add' onClick={toTaskCreate}
                    style={{position: 'fixed', right: '5vw', top: '75vh', height: '10vw', width: '10vw'}}>
                    <SvgIcon sx={{height:'5vw', width: '5vw'}}>
                        <Add />
                    </SvgIcon>
                    
                </Fab>
            </MediaQuery>
        </div>
    );
}

export default Dashboard;