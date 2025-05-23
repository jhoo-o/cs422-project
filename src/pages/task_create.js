import ConfirmBar from '../components/ConfirmTasksBar';
import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {Box, Icon, Typography, Popover, TextField,
    AppBar, Toolbar, IconButton} from "@mui/material";
import {
    Unstable_NumberInput as BaseNumberInput,
} from '@mui/base/Unstable_NumberInput';

import {Help, Check, ArrowBack} from '@mui/icons-material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import NumberField from './numberField.tsx';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import MediaQuery from 'react-responsive';
import dayjs from 'dayjs';


const Task_Create = () => {
    const navigate = useNavigate();
    const [errorName, setErrorName] = useState(false);
    const handleBack = (event) => {
        event.preventDefault();
        navigate('/dashboard');
    }
    const handleNext = (event) => {
        event.preventDefault();
        if (inputValueName.trim() === '') {
            setErrorName(true);
        } else {
            setErrorName(false);
            navigate('/task_made', { state: {
                name: inputValueName,
                points: inputValuePoints,
                priority: inputValuePriority,
                date: inputValueDate.toDate(),
                details: inputValueDetail
            }});
        }
    }    
    
    const [anchorEl0, setAnchorEl0] = React.useState(null);

    const handlePopoverHoverOpen = (event) => {
        setAnchorEl0(event.currentTarget);
    };
    const handlePopoverHoverClose = () => {
        setAnchorEl0(null);
    };
    
    const open0 = Boolean(anchorEl0);

    const boxStyle = {flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 10};
    const boxStyle2 = {flexGrow: 1, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4};

    const [inputValueName, setInputValueName] = useState('');
    const [inputValuePoints, setInputValuePoints] = useState(0);
    const [inputValuePriority, setInputValuePriority] = useState(0);
    const [inputValueDate, setInputValueDate] = useState(dayjs(new Date()));
    const [inputValueDetail, setInputValueDetail] = useState('');

    return (
        <div>
            {/* mobile / tablet */}
            <MediaQuery maxWidth={1080}>
            <Box sx={{flexGrow: 1, justifyContent: 'space-between'}} >
                <AppBar position="static" >
                    <Toolbar sx={{justifyContent: 'space-between'}}>
                        <IconButton size="large" edge="start" onClick={handleBack} sx = {{marginLeft: 2}}>
                            < ArrowBack />
                        </IconButton>
                        <div sx = {{flexGrow: 1}}>
                            <Typography variant = 'h4'>
                                New Task
                            </Typography>
                        </div>
                        <IconButton edge = 'end' size = 'large' onClick={handleNext} sx = {{marginRight: 2, color: 'white'}}>
                            <Check/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx = {{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>
                <Box sx = {boxStyle2}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Task Name:
                    </Typography>
                    <TextField  label="Name here..." variant="filled" value = {inputValueName} onChange={(e) => setInputValueName(e.target.value)} error={errorName && inputValueName.trim() === ''}
    helperText={errorName && inputValueName.trim() === '' ? "Task name is required" : ''}/>
                </Box>
                <Box sx = {boxStyle2}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Points:
                    </Typography>
                    <NumberField value = {inputValuePoints} onChange = {(e, v) => setInputValuePoints(v)} min = {0}/>
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
                <Box sx = {boxStyle2}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                       Priority Level:
                    </Typography>
                    <NumberField value = {inputValuePriority} onChange = {(e, v) => setInputValuePriority(v)} min = {0}/>
                </Box>
                <Box sx = {boxStyle2}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Due Date:
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['MobileDatePicker']}>
                            <MobileDatePicker value = {inputValueDate}
                                onChange = {(e) => setInputValueDate(e)}/>
                        </DemoContainer>
                    </LocalizationProvider>
                </Box>
                <Box sx = {boxStyle2}>
                    <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                        Details:
                    </Typography>
                    <TextField  label="Name here..." variant="filled" size = 'medium' rows={4} 
                    multiline = {true} sx={{width: "70%"}} value = {inputValueDetail}
                    onChange = {(e) => setInputValueDetail(e.target.value)}/>
                </Box>
            </Box>
            </MediaQuery>

            {/* Desktop */}
            <MediaQuery minWidth={1081}>
            <Box sx={{flexGrow: 1, justifyContent: 'space-between'}} >
                <AppBar position="static" >
                    <Toolbar sx={{justifyContent: 'space-between'}}>
                        <IconButton size="large" edge="start" onClick={handleBack} sx = {{marginLeft: 2}}>
                            < ArrowBack />
                        </IconButton>
                        <div sx = {{flexGrow: 1}}>
                            <Typography variant = 'h4'>
                                NewTask
                            </Typography>
                        </div>
                        <IconButton edge = 'end' size = 'large' onClick={handleNext} sx = {{marginRight: 2, color: 'white'}}>
                            <Check/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
                <Box sx = {{flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Task Name:
                        </Typography>
                        <TextField  label="Name here..." variant="filled" value = {inputValueName}
                            onChange={(e)=>setInputValueName(e.target.value)} error={errorName && inputValueName.trim() === ''}
                            helperText={errorName && inputValueName.trim() === '' ? "Task name is required" : ''}/>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Points:
                        </Typography>
                        <NumberField value = {inputValuePoints} onChange = {(e, v) => setInputValuePoints(v)} min = {0}/>
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
                        <NumberField value = {inputValuePriority} onChange = {(e, v) => setInputValuePriority(v)} min = {0}/>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Due Date:
                        </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DesktopDatePicker']}>
                                <DesktopDatePicker value = {inputValueDate}
                                onChange = {(e) => setInputValueDate(e)}/>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>
                    <Box sx = {boxStyle}>
                        <Typography variant = 'h3' sx = {{paddingRight: 5}}>
                            Details:
                        </Typography>
                        <TextField  label="Name here.." variant="filled" size = 'small' rows={3} 
                        multiline = {true} sx={{flexGrow: 1}} value = {inputValueDetail}
                        onChange={(e) => setInputValueDetail(e.target.value)} />
                    </Box>
                </Box>
            </MediaQuery>
        </div>
        
    )
}

export default Task_Create;

const NumberField = React.forwardRef(function CustomNumberInput(props, ref) {
    return (
      <BaseNumberInput
        slots={{
          root: StyledInputRoot,
          input: StyledInput,
          incrementButton: StyledButton,
          decrementButton: StyledButton,
        }}
        slotProps={{
          incrementButton: {
            children: <AddIcon fontSize="large" />,
            className: 'increment',
          },
          decrementButton: {
            children: <RemoveIcon fontSize="large" />,
          },
        }}
        {...props}
        ref={ref}
      />
    );
  });

  const blue = {
    100: '#daecff',
    200: '#b6daff',
    300: '#66b2ff',
    400: '#3399ff',
    500: '#007fff',
    600: '#0072e5',
    700: '#0059B2',
    800: '#004c99',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };
  
  const StyledInputRoot = styled('div')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
  `,
  );
  
  const StyledInput = styled('input')(
    ({ theme }) => `
    font-size: 2rem;
    font-family: inherit;
    font-weight: 400;
    line-height: 1.375;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
    border-radius: 8px;
    margin: 0 8px;
    padding: 10px 12px;
    outline: 0;
    min-width: 0;
    width: 9rem;
    text-align: center;
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  `,
  );
  
  const StyledButton = styled('button')(
    ({ theme }) => `
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    line-height: 1.5;
    border: 1px solid;
    border-radius: 999px;
    border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
    width: 64px;
    height: 64px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 120ms;
  
    &:hover {
      cursor: pointer;
      background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
      border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
      color: ${grey[50]};
    }
  
    &:focus-visible {
      outline: 0;
    }
  
    &.increment {
      order: 1;
    }
  `,
  );