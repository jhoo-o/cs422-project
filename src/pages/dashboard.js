import React from 'react';
import {useNavigate} from "react-router-dom";
import {AppBar, Box, List, ListItemText, ListItemButton, Divider, Toolbar, 
    IconButton, Icon, SvgIcon, ListItem, ListItemAvatar, Avatar, Stack, Typography} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';
import picture from './added_assets/circle.png';
import { Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment)

const Dashboard = () => {
    function HomeIcon(props) {
        return (
          <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          </SvgIcon>
        );
    }

    const navigate = useNavigate();

    const toSettings = (event) => {
        event.preventDefault();
        navigate("/Settings");
    }
    

    return (
        <div>
            {/*WHY ARE COMMENTS LIKE THIS, anyways stole this box from matthew*/}
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Box sx={{}}>
                            <img src = {picture} height={32} width={32}></img>
                            {/*change later to logo once we have it kind just meant 
                            to make the center look center*/}
                        </Box>
                        <Icon size="large" sx={{ flexGrow: 1}}>
                            <HomeIcon />
                            {/*repace with streak icon later*/}
                        </Icon>
                        <IconButton size = "large" onClick={toSettings} sx={{}}>
                            <Settings />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{flexGrow: 1}}>
                <Calendar
                views = {['day', 'month']}
                    localizer = {localizer}
                    selectable
                    defaultDate = {new Date()}
                    defaultView = 'month'
                    style = {{height:'50vh', width : '100vw'}}
                    startAccessor="start"
                    endAccessor="end"
                />
            </Box>
            <Box sx={{flexGrow: 1, width: 1}}>
                <List sx ={{flexGrow: 1}}>
                    <ListItem sx = {{borderColor:'#000000'}}>
                        <ListItemAvatar>
                            <Avatar alt ="Espurr" src = {picture}/>
                        </ListItemAvatar>
                        <Stack spacing = {1} divider = {<Divider variant='middle'/>} sx={{width: 1}}>
                            <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                <Typography variant='body2'>
                                    DO LAUNDRY
                                </Typography>
                                <Avatar alt = "Espurr again" src = {picture}/>
                            </Box>
                            
                            <Box sx={{display:'flex', justifyContent:'space-between', width: 1}}>
                                <Typography variant='body2' color = '#d3d3d3'>
                                    Use vinegar or sumn, idk
                                </Typography>
                                <Avatar alt = "Espurr again" src = {picture}/>
                            </Box>
                        </Stack>
                    </ListItem>
                </List>
            </Box>
            
        </div>
    );
}

export default Dashboard;