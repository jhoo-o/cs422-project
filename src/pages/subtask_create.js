import ConfirmBar from '../components/ConfirmTasksBar';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Box, List, ListItemText, ListItemButton, 
    Icon, ListItem, Typography, Popover, TextField} from "@mui/material";
import {Help} from '@mui/icons-material';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NumberField from './numberField.tsx'
import { DemoContainer} from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MediaQuery from 'react-responsive';


const Subtask_Create = () => {
    const navigate = useNavigate();
    const toSubtask = (event) => {
        event.preventDefault();
        navigate('/Create_Subtask');
    }

    const [anchorEl0, setAnchorEl0] = React.useState(null);

    const handlePopoverHoverOpen = (event) => {
        setAnchorEl0(event.currentTarget);
    };
    const handlePopoverHoverClose = () => {
        setAnchorEl0(null);
    };
    
    const open0 = Boolean(anchorEl0);

    const boxStyle = {flexGrow: 1, p: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 10};


    return (
        <div>
            {/* mobile / tablet */}
            <MediaQuery maxWidth={1080}>
            <ConfirmBar previousDest={'/task_create'} TextLabel={'New Subtask'}/>
            <Box sx = {{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Task Name:
                    </Typography>
                    <TextField  label="Name here..." variant="filled"/>
                </Box>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Points:
                    </Typography>
                    <NumberField/>
                    <Icon sx = {{width: '2rem', height: '2rem', marginLeft: 2}} 
                    onMouseEnter = {handlePopoverHoverOpen} onMouseLeave = {handlePopoverHoverClose} aria-haspopup='true'>
                        <Help sx = {{width: '2rem', height: '2rem'}}/>
                    </Icon>
                    <Popover id='mouse-over-popover' sx={{pointerEvents: 'none'}} open = {open0} 
                    anchorEl={anchorEl0} anchorOrigin={{vertical: 'bottom', horizontal:'left'}}
                    transformOrigin={{vertical: 'top', horizontal:'left'}} onClose={handlePopoverHoverClose}>
                        <Typography sx={{p:1}}>Allocate as many arbitrary 'points' that you expect the task to take</Typography>
                    </Popover>
                </Box>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                       Priority Level:
                    </Typography>
                    <NumberField/>
                </Box>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Due Date:
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['MobileDatePicker']}>
                            <MobileDatePicker/>
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                       Sub-tasks: 
                    </Typography>
                    <List sx={{border: 1, borderRadius: '5px'}}>
                        <ListItem disablePadding>
                            <ListItemButton onClick = {toSubtask}>
                                <ListItemText primary = '+ New Sub-Task' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Details:
                    </Typography>
                    <TextField  label="Name here..." variant="filled" size = 'medium' rows={8} multiline = {true} sx={{width: '30rem'}}/>
                </Box>
            </Box>
            </MediaQuery>
            <MediaQuery minWidth={1081}>
                <ConfirmBar previousDest={'/dashboard'} TextLabel={'New Task'}/>
                <Box sx = {{flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Task Name:
                        </Typography>
                        <TextField  label="Name here..." variant="filled"/>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Points:
                        </Typography>
                        <NumberField/>
                        <Icon sx = {boxStyle} 
                        onMouseEnter = {handlePopoverHoverOpen} onMouseLeave = {handlePopoverHoverClose} aria-haspopup='true'>
                            <Help sx = {{width: '2rem', height: '2rem'}}/>
                        </Icon>
                        <Popover id='mouse-over-popover' sx={{pointerEvents: 'none'}} open = {open0} 
                        anchorEl={anchorEl0} anchorOrigin={{vertical: 'bottom', horizontal:'left'}}
                        transformOrigin={{vertical: 'top', horizontal:'left'}} onClose={handlePopoverHoverClose}>
                            <Typography sx={{p:1}}>Allocate as many arbitrary 'points' that you expect the task to take</Typography>
                        </Popover>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Priority Level:
                        </Typography>
                        <NumberField/>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Due Date:
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DesktopDatePicker']}>
                                <DesktopDatePicker/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Sub-tasks: 
                        </Typography>
                        <List sx={{border: 1, borderRadius: '5px'}}>
                            <ListItem disablePadding>
                                <ListItemButton onClick = {toSubtask}>
                                    <ListItemText primary = '+ New Sub-Task'/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Details:
                        </Typography>
                        <TextField  label="Name here..." variant="filled" size = 'medium' rows={8} multiline = {true} sx={{width: '30rem'}}/>
                    </Box>
                </Box>
            </MediaQuery>
        </div>
        
    )
}

export default Subtask_Create;