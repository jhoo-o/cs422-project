import ConfirmBar from '../components/ConfirmTasksBar';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import {useNavigate} from "react-router-dom";
import {Box, List, ListItemText, ListItemButton, Slider,
    Icon, ListItem, Typography, Popover, TextField} from "@mui/material";
import {Help} from '@mui/icons-material';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NumberField from './numberField.tsx'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MediaQuery from 'react-responsive';


const Task_Detail = (taskId) => {
    const id = React.useId();
    const navigate = useNavigate();

    

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
            <ConfirmBar previousDest={'/dashboard'} TextLabel={'Build the Table'} nextDest={'/dashboard'}/>
            <Box sx = {{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Points:
                    </Typography>
                    <NumberField value = {4}/>
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
                    <NumberField defaultValue = {3}/>
                </Box>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Due Date:
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['MobileDatePicker']}>
                            <MobileDatePicker defaultValue={dayjs('05-01-2025')}/>
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                       Sub-tasks: 
                    </Typography>
                    <List sx={{border: 1, borderRadius: '5px'}}>
                        <ListItem disablePadding>
                            <ListItemButton onClick>
                                <ListItemText primary = 'UNBOX FURNITURE' />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Details:
                    </Typography>
                    <TextField variant="filled" size = 'medium' rows={8} multiline = {true} sx={{width: '30rem'}} defaultValue = "Don't break it"/>
                </Box>
                <Box sx = {boxStyle}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Progress:
                    </Typography>
                    <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" />
                </Box>
            </Box>
            </MediaQuery>
            <MediaQuery minWidth={1081}>
                <ConfirmBar previousDest={'/dashboard'} TextLabel={'Build the Table'} nextDest={'/dashboard'}/>
                <Box sx = {{flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Points:
                        </Typography>
                        <NumberField defaultValue = {4}/>
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
                        <NumberField defaultValue = {2}/>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Due Date:
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DesktopDatePicker']}>
                                <DesktopDatePicker defaultValue={dayjs('05-01-2025')}/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Sub-tasks: 
                        </Typography>
                        <List sx={{border: 1, borderRadius: '5px'}}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary = 'UNBOX THE FURNITURE'/>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Details:
                        </Typography>
                        <TextField variant="filled" size = 'medium' rows={8} multiline = {true} sx={{width: '30rem'}} defaultValue = "Don't break it"/>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Progress:
                        </Typography>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
                    </Box>
                </Box>
            </MediaQuery>
        </div>
        
    )
}

export default Task_Detail;