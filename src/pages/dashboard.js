import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Stack, Typography, Fab, Popover, Button, List } from "@mui/material";
import { ArrowBack, Settings, Add, Person } from '@mui/icons-material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from "./user_data/events";
import picture from './added_assets/circle.png';
import streak from "./added_assets/streak.png";
import MediaQuery from 'react-responsive';
import process from './jsonProcesser';
import TaskList from '../components/taskList.jsx';
import SvgIcon from '@mui/material/SvgIcon';

const localizer = momentLocalizer(moment);

const Dashboard = () => {
//     localStorage.clear();
// window.location.reload();
    const navigate = useNavigate();
    const processer = new process();
    const taskArray = processer.getTasks;
    const eventArray = processer.getEvents;

    const [anchorEl, setAnchorEl] = useState(null);
    const [eventsData, setEventsData] = useState(events);
    const [selectedDate, setSelectedDate] = useState(null); // NEW

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    };
    const handleClose = () => {
        setAnchorEl(null);
    }
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const toSettings = (event) => {
        event.preventDefault();
        navigate("/Settings");
    };

    const toTaskCreate = (event) => {
        event.preventDefault();
        navigate('/Task_Create');
    };

    const toSignin = (event) => {
        event.preventDefault();
        navigate('/Signin');
    };

    const TaskListing = ({ display, selectedDate }) => {
        let filteredTasks = taskArray;
        if (selectedDate) {
            filteredTasks = taskArray.filter(task => {
                const taskDate = moment(task.date).startOf('day');
                const selected = moment(selectedDate).startOf('day');
                return taskDate.isSame(selected);
            });
        }

        const tasks = filteredTasks.map((task, idx) => <TaskList key={idx} task={task} display={display} />);

        if (display === 'desktop') {
            return (
                <List sx={{ flexGrow: 1, background: '#F8F9FA', overflowY: 'scroll', maxHeight: '90vh', overflow: 'auto', width: '50vw' }}>
                    {tasks}
                </List>
            );
        } else {
            return (
                <List sx={{ flexGrow: 1, background: '#F8F9FA', overflowY: 'scroll', maxHeight: '44vh', overflow: 'auto' }}>
                    {tasks}
                </List>
            );
        }
    };

    const handleSelectDate = (slotInfo) => {
        if (selectedDate && moment(selectedDate).isSame(moment(slotInfo.start), 'day')) {
            setSelectedDate(null); // If clicking the same day, deselect
        } else {
            setSelectedDate(slotInfo.start);
        }
    };
    const toTaskDetail = (event) => {
        console.log(taskArray)
        const index = taskArray.findIndex(task => task.name == event.title)
        var foundTask = null;
        if (index != -1){
            foundTask = taskArray[index];
        } else {
            foundTask = null
            console.log(event);
        }

        navigate("/Task_Detail", {state: {
            name: foundTask.name,
            points: foundTask.points,
            priority: foundTask.priority,
            date: foundTask.date,
            details: foundTask.details,
            bounty: foundTask.bounty
        }})
    }
    return (
        <div>
            {/* Mobile */}
            <MediaQuery maxWidth={1081}>
                {/*WHY ARE COMMENTS LIKE THIS, anyways stole this box from matthew, store settings bar*/}
                <Box sx={{ flexGrow: 1, height: '4vh', justifyContent: 'space-between' }}>
                    <AppBar position="static">
                        <Toolbar sx={{ justifyContent: 'space-between' }}>
                            <Box>
                                <IconButton aria-label="person" size="large" onClick={handleClick}>
                                    <Person sx={{ width: '2.75vh', height: '2.75vh' }} />
                                </IconButton>
                                <Popover
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                >
                                    <Stack spacing={1} divider={<div />} sx={{ width: 1, p: 1, alignContent: 'center' }}>
                                        <Button
                                            variant="outlined"
                                            onClick={toSignin}
                                            sx={{ flexGrow: 1, color: 'white', backgroundColor: 'red', fontWeight: 'bold', p: 1, width: 0.85 }}
                                        >
                                            Sign Out
                                        </Button>
                                    </Stack>
                                </Popover>
                            </Box>
                            <Box width="3vh" height="3vh">
                                <img src={streak} alt="streak" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                            <IconButton size="large" onClick={toSettings}>
                                <Settings sx={{ width: '2.75vh', height: '2.75vh' }} />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>

                {/* Calendar */}
                <Box sx={{ flexGrow: 1, background: '#F9F9FA' }}>
                    <Calendar
                        views={['week', 'month']}
                        localizer={localizer}
                        selectable
                        defaultDate={new Date(2025, 4, 16)}
                        defaultView="month"
                        style={{ height: '50vh', width: '100vw' }}
                        startAccessor="start"
                        endAccessor="end"
                        events={eventArray}
                        onSelectSlot={handleSelectDate}
                        onSelectEvent = {(event) => toTaskDetail(event)}
                    />
                </Box>

                {/* Tasks */}
                <Box sx={{ flexGrow: 1, width: 1, height: 'auto' }}>
                    <TaskListing display="mobile" selectedDate={selectedDate} />
                </Box>

                <Fab color="primary" aria-label="add" onClick={toTaskCreate}
                    style={{ position: 'fixed', right: '5vw', top: '80vh', height: '12vh', width: '12vh' }}>
                    <SvgIcon sx={{ height: '5vh', width: '5vh' }}>
                        <Add />
                    </SvgIcon>
                </Fab>
            </MediaQuery>

            {/* Desktop */}
            <MediaQuery minWidth={1082}>
                <Box sx={{ flexGrow: 1, height: '8vh' }}>
                    <AppBar position="static">
                        <Toolbar sx={{ justifyContent: 'space-between' }}>
                            <Box>
                                <img src={picture} height={32} width={32} alt="logo" />
                            </Box>
                            <Box width="5vw" height="4vh">
                                <img src={streak} alt="streak" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                            </Box>
                            <IconButton size="large" onClick={toSettings}>
                                <Settings />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </Box>

                <Stack direction="row">
                    <Box sx={{ flexGrow: 1, background: '#F9F9FA' }}>
                        <Calendar
                            views={['week', 'month']}
                            localizer={localizer}
                            selectable
                            defaultDate={new Date(2025, 4, 16)}
                            defaultView="month"
                            style={{ height: '90vh', width: '50vw' }}
                            startAccessor="start"
                            endAccessor="end"
                            events={eventArray}
                            onSelectSlot={handleSelectDate}
                            onSelectEvent={(event) => toTaskDetail(event)}
                        />
                    </Box>

                    <Box sx={{ flexGrow: 1, width: 'auto' }}>
                        <TaskListing display="desktop" selectedDate={selectedDate} />
                    </Box>
                </Stack>

                <Fab color="primary" aria-label="add" onClick={toTaskCreate}
                    style={{ position: 'fixed', right: '5vw', top: '75vh', height: '10vw', width: '10vw' }}>
                    <SvgIcon sx={{ height: '5vw', width: '5vw' }}>
                        <Add />
                    </SvgIcon>
                </Fab>
            </MediaQuery>
        </div>
    );
};

export default Dashboard;

