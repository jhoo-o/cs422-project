import {useNavigate, useLocation} from "react-router-dom";
import {AppBar, Box, List, ListItemText, ListItemButton, Divider, Toolbar, IconButton, Container
    , Typography, Stack, TextField, Button, Link
} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';
import process from './jsonProcesser';

const EnterCredit = () => {

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

    const toAddBounty = (event) => {
        event.preventDefault();
        processer.setCredit = 'yes';
        navigate("/Add_Bounty", {state: {
            name: state.name,
            points: state.points,
            priority: state.priority,
            date: state.date,
            details: state.details
        }});
    }

    const processer = new process();

    const {state} = useLocation();

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
                            Enter Card Info
                    </Typography>
                    <Stack sx={{display: "flex", flexGrow: 1, justifyContent:"left"}}>
                        <TextField variant="standard" label = "Name"/>
                        <TextField variant="standard" label = "Credit Card #"/>
                        <TextField variant="standard" label = "CVV"/>
                        <Button variant="outlined" sx={{marginTop: 3, fontWeight:"bold", 
                            backgroundColor: "#67f5a0", color:"white", fontSize:17}} onClick={toAddBounty}>Submit</Button>
                    </Stack>
                </Container>
            </Container>
        </div>
        
    );
}

export default EnterCredit;