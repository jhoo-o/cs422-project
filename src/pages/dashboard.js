import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {AppBar, Box, List, ListItemText, ListItemButton, 
    Divider, Toolbar, IconButton, Icon, SvgIcon, ListItem, 
    ListItemAvatar, Avatar, Stack, Typography, Fab} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';
import AddIcon from '@mui/icons-material/Add';
import picture from './added_assets/circle.png';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from "./tasks_for_dashboard/events";
import today from "./added_assets/today_diamond.png";
import one_day from "./added_assets/1_day_diamond.png";
import two_day from "./added_assets/2_day_diamond.png";
import three_day from "./added_assets/3_day_diamond.png";
import four_day from "./added_assets/4_day_diamond.png";
import five_day from "./added_assets/5_day_diamond.png";
import MediaQuery from 'react-responsive';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import streak from "./added_assets/streak.png";


const localizer = momentLocalizer(moment)

const Dashboard = () => {

    const navigate = useNavigate();

    const toSettings = (event) => {
        event.preventDefault();
        navigate("/Settings");
    }
    
    const [eventsData, setEventsData] = useState(events);

    return (
        <div>
            {/* Mobile */}
            <MediaQuery maxWidth={1200}>
                {/*WHY ARE COMMENTS LIKE THIS, anyways stole this box from matthew, store settings bar*/}
                <Box sx={{flexGrow: 1, height: '4vh', justifyContent: 'space-between'}}>
                    <AppBar position="static">
                        <Toolbar sx={{justifyContent: 'space-between'}}>
                            <Box sx={{}}>
                                <img src = {picture} height={32} width={32}></img>
                                {/*change later to logo once we have it kind just meant 
                                to make the center look center*/}
                            </Box>
                            <Box width='4vh' height = '4vw'>
                                <img src={streak} alt = 'streak' style ={{width: '100%', height:'100%', objectFit: 'contain'}}/>
                            </Box>
                            <IconButton size = "large" onClick={toSettings} sx={{}}>
                                <Settings />
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
                        events = {eventsData}

                    />
                </Box>
                {/* Stores user task list*/}
                <Box sx={{flexGrow: 1, width: 1, height: 'auto'}}>
                    <List sx ={{flexGrow: 1, background: '#F8F9FA', overflowY: 'scroll', maxHeight: '44vh', overflow: 'auto'}}>
                        <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height:'15vh'}}>
                            {/* <ListItemAvatar>
                                <Avatar alt ="Espurr" src = {picture}/>
                            </ListItemAvatar> */}
                            <Box width = '8vw' height = '8vh' >
                                <img src = {today} alt = 'today' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                            </Box>

                            <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                    <Typography variant='body2' sx = {{fontSize: '2.75vw'}}>
                                        DO LAUNDRY
                                    </Typography>
                                    <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                        <Typography variant = 'body2' sx = {{fontSize: '2vw', p:1.5}}>
                                            4pts
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                    <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vw'}} >
                                        SEPERATE COLOR AND WHITES AND USE VINEGAR
                                    </Typography>
                                
                                    <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vw'}}>
                                    </Typography>
                                    
                                </Box>
                            </Stack>
                        </ListItem>
                        <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height: '15vh'}}>
                            {/* <ListItemAvatar>
                                <Avatar alt ="Espurr" src = {picture}/>
                            </ListItemAvatar> */}
                            <Box width = '8vw' height = '8vh' >
                                <img src = {one_day} alt = 'one_day' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                            </Box>

                            <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                    <Typography variant='body2' sx = {{fontSize: '2.75vw'}}>
                                        Pay rent
                                    </Typography>
                                    <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                        <Typography variant = 'body2' sx = {{fontSize: '2vw', p:1.5}}>
                                            1pt
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                    <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vw'}} >
                                        Route to proper bank account this time
                                    </Typography>
                                
                                    <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vw'}}>
                                        $4.00
                                    </Typography>
                                    
                                </Box>
                            </Stack>
                        </ListItem>
                        <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height: '15vh'}}>
                            <Box width = '8vw' height = '8vh' >
                                <img src = {one_day} alt = 'one_day' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                            </Box>

                            <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                    <Typography variant='body2' sx = {{fontSize: '2.75vw'}}>
                                        Finish Math 330 Hw
                                    </Typography>
                                    <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                        <Typography variant = 'body2' sx = {{fontSize: '2vw', p:1.5}}>
                                            5pts
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                    <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vw'}} >
                                        1, 4, 5a, 5b, 7, Pg. 301, Isomorphism and rings
                                    </Typography>
                                
                                    <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vw'}}>
                                    </Typography>
                                    
                                </Box>
                            </Stack>
                        </ListItem>
                        <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height: '15vh'}}>
                            {/* <ListItemAvatar>
                                <Avatar alt ="Espurr" src = {picture}/>
                            </ListItemAvatar> */}
                            <Box width = '8vw' height = '8vh' >
                                <img src = {two_day} alt = 'two_day' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                            </Box>

                            <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                    <Typography variant='body2' sx = {{fontSize: '2.75vw'}}>
                                        Audio Recording
                                    </Typography>
                                    <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                        <Typography variant = 'body2' sx = {{fontSize: '2vw', p:1.5}}>
                                            6pts
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                    <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vw'}} >
                                        Record lines from script and send to Manager
                                    </Typography>
                                
                                    <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vw'}}>
                                        $6.00
                                    </Typography>
                                    
                                </Box>
                            </Stack>
                        </ListItem>
                        <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height: '15vh'}}>
                            {/* <ListItemAvatar>
                                <Avatar alt ="Espurr" src = {picture}/>
                            </ListItemAvatar> */}
                            <Box width = '8vw' height = '8vh' >
                                <img src = {three_day} alt = 'three_day' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                            </Box>

                            <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                    <Typography variant='body2' sx = {{fontSize: '2.75vw'}}>
                                        Create Graphic for Game
                                    </Typography>
                                    <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                        <Typography variant = 'body2' sx = {{fontSize: '2vw', p:1.5}}>
                                            10pts
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                    <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vh'}} >
                                        Create tileset for basic environment for game, see reference photos
                                    </Typography>
                                
                                    <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vh'}}>
                                    </Typography>
                                    
                                </Box>
                            </Stack>
                        </ListItem>
                        <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height: '15vh'}}>
                            {/* <ListItemAvatar>
                                <Avatar alt ="Espurr" src = {picture}/>
                            </ListItemAvatar> */}
                            <Box width = '8vw' height = '8vh' >
                                <img src = {five_day} alt = 'five_day' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                            </Box>

                            <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                    <Typography variant='body2' sx = {{fontSize: '2.75vw'}}>
                                        Do the thing
                                    </Typography>
                                    <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                        <Typography variant = 'body2' sx = {{fontSize: '2vw', p:1.5}}>
                                            2pts
                                        </Typography>
                                    </Box>
                                </Box>
                                
                                <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                    <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vw'}} >
                                        It's the thing mentioned before
                                    </Typography>
                                
                                    <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vw'}}>
                                        $100.00
                                    </Typography>
                                    
                                </Box>
                            </Stack>
                        </ListItem>
                    </List>
                </Box>
                <Fab color = 'primary' aria-label='add' style ={{position: 'fixed', right: '5vw', top: '80vh', height: '12vh', width: '12vh'}}>
                    <AddIcon/>
                </Fab>
            </MediaQuery>
            <MediaQuery minWidth={1201}>
                <Box sx={{flexGrow: 1, height: '8vh'}}>
                    <AppBar position="static" height='4vh'>
                        <Toolbar sx={{justifyContent: 'space-between'}}>
                            <Box sx={{}}>
                                <img src = {picture} height={32} width={32}></img>
                                {/*change later to logo once we have it kind just meant 
                                to make the center look center*/}
                            </Box>
                            <Box width='5vh' height = '5vh'>
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
                            <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height:'15vh'}}>
                                <Box width = '8vw' height = '8vh' >
                                    <img src = {today} alt = 'today' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                                </Box>

                                <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                        <Typography variant='body2' sx = {{fontSize: '2.75vh'}}>
                                            DO LAUNDRY
                                        </Typography>
                                        <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                            <Typography variant = 'body2' sx = {{fontSize: '2vh', p:1.5}}>
                                                4pts
                                            </Typography>
                                        </Box>
                                    </Box>
                                    
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                        <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vh'}} >
                                            SEPERATE COLOR AND WHITES AND USE VINEGAR
                                        </Typography>
                                    
                                        <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vh'}}>
                                        </Typography>
                                        
                                    </Box>
                                </Stack>
                            </ListItem>
                            <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height:'15vh'}}>
                                <Box width = '8vw' height = '8vh' >
                                    <img src = {one_day} alt = 'one_day' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                                </Box>

                                <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                        <Typography variant='body2' sx = {{fontSize: '2.75vh'}}>
                                            Pay rent
                                        </Typography>
                                        <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                            <Typography variant = 'body2' sx = {{fontSize: '2vh', p:1.5}}>
                                                1pt
                                            </Typography>
                                        </Box>
                                    </Box>
                                    
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                        <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vh'}} >
                                            Route to proper banka account this time
                                        </Typography>
                                    
                                        <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vh'}}>
                                            $4.00
                                        </Typography>
                                        
                                    </Box>
                                </Stack>
                            </ListItem>
                            <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height:'15vh'}}>
                                <Box width = '8vw' height = '8vh' >
                                    <img src = {one_day} alt = 'one_day' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                                </Box>

                                <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                        <Typography variant='body2' sx = {{fontSize: '2.75vh'}}>
                                            Finish Math 330 Hw
                                        </Typography>
                                        <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                            <Typography variant = 'body2' sx = {{fontSize: '2vh', p:1.5}}>
                                                5pts
                                            </Typography>
                                        </Box>
                                    </Box>
                                    
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                        <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vh'}} >
                                            1, 4, 5a, 5b, 7, Pg. 301, Isomorphism and rings
                                        </Typography>
                                    
                                        <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vh'}}>
                                        </Typography>
                                        
                                    </Box>
                                </Stack>
                            </ListItem>
                            <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height:'15vh'}}>
                                {/* <ListItemAvatar>
                                    <Avatar alt ="Espurr" src = {picture}/>
                                </ListItemAvatar> */}
                                <Box width = '8vw' height = '8vh' >
                                    <img src = {two_day} alt = 'two_day' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                                </Box>

                                <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                        <Typography variant='body2' sx = {{fontSize: '2.75vh'}}>
                                            Audio Recording
                                        </Typography>
                                        <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                            <Typography variant = 'body2' sx = {{fontSize: '2vh', p:1.5}}>
                                                6pts
                                            </Typography>
                                        </Box>
                                    </Box>
                                    
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                        <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vh'}} >
                                            Record lines from script and send to Manager
                                        </Typography>
                                    
                                        <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vh'}}>
                                            $6.00
                                        </Typography>
                                        
                                    </Box>
                                </Stack>
                            </ListItem>
                            <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height:'15vh'}}>
                                <Box width = '8vw' height = '8vh' >
                                    <img src = {three_day} alt = 'three_day' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                                </Box>

                                <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                        <Typography variant='body2' sx = {{fontSize: '2.75vh'}}>
                                            Create Graphic for Game
                                        </Typography>
                                        <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                            <Typography variant = 'body2' sx = {{fontSize: '2vh', p:1.5}}>
                                                10pts
                                            </Typography>
                                        </Box>
                                    </Box>
                                    
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                        <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vh'}} >
                                            Create tileset for basic environment for game, see reference photos
                                        </Typography>
                                    
                                        <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vh'}}>
                                        </Typography>
                                        
                                    </Box>
                                </Stack>
                            </ListItem>
                            <ListItem sx = {{borderColor:'#000000', border: '1px solid black', flexGrow: 1, height:'15vh'}}>
                                <Box width = '8vw' height = '8vh' >
                                    <img src = {five_day} alt = 'five_day' style = {{width: '100%', height:'100%', objectFit: 'contain'}}/>
                                </Box>

                                <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1, p:1}}>
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1, fontSize: '0.8rem'}}>
                                        <Typography variant='body2' sx = {{fontSize: '2.75vh'}}>
                                            Do the thing
                                        </Typography>
                                        <Box sx={{display:'flex', justifyContent:'center', background: '#D3D3D3', width: '4em', height: '4em', borderRadius: '1em'}}>
                                            <Typography variant = 'body2' sx = {{fontSize: '2vh', p:1.5}}>
                                                2pts
                                            </Typography>
                                        </Box>
                                    </Box>
                                    
                                    <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                        <Typography variant='body2' sx={{color: '#d3d3d3', fontSize: '2vh'}} >
                                            It's the thing mentioned before
                                        </Typography>
                                    
                                        <Typography variant = 'body2' align = 'center' sx={{fontSize: '2vh'}}>
                                            $100.00
                                        </Typography>
                                        
                                    </Box>
                                </Stack>
                            </ListItem>
                            
                        </List>
                    </Box>
                </Stack>
                <Fab color = "primary" aria-label='add' style={{position: 'fixed', right: '5vw', top: '80vh', height: '12vh', width: '12vh'}}>
                    <AddIcon/>
                </Fab>
            </MediaQuery>
        </div>
    );
}

export default Dashboard;