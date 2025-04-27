import {useNavigate, useLocation} from "react-router-dom";
import {Box, Container
    , Typography,Button, ButtonGroup
} from "@mui/material";
import process from './jsonProcesser';


const TaskMade = () => {

    const navigate = useNavigate();

    const toAddBounty = (event) => {
        event.preventDefault(); // add check for if they have credit card
        
        
        
        if (processer.getCredit == 'no'){
            navigate("/enter_credit", { state: {
                name: state.name,
                points: state.points,
                priority: state.priority,
                date: state.date,
                details: state.details
            }})
        }else{
            navigate("/Add_Bounty", {state: {
                name: state.name,
                points: state.points,
                priority: state.priority,
                date: state.date,
                details: state.details
            }});
        }
        
    }
    const toDashboard = (event) => {
        event.preventDefault();
        const obj = state;
        obj.bounty = 0;
        
        processer.setTasks = obj;
        const eventObj = {
            title: obj.name,
            allDay: true,
            start: obj.date,
            end: obj.date
        }
        processer.setEvents = eventObj;
        console.log(obj);
        navigate('/dashboard');
    }

    const {state} = useLocation();
    const processer = new process();

    return (
        <Container sx={{height:"40%", width:"50%", backgroundColor:'#e8f1ff', mt:15,
            justifyContent:"center", flexGrow: 1, boxShadow: 10, borderRadius: 7, padding: 5, paddingBottom: 5}}>
            <Container fixed sx={{flexGrow: 1, width: "100%", justifyContent:"center", alignItems: 'center'}}>
                <Typography variant="h4" textAlign={'center'} paddingTop={'5vh'}>
                    Task Created!
                </Typography>
                <Typography variant = 'h4' textAlign={'center'} paddingTop={'1vh'}>
                   Add a Bounty?
                </Typography>
                {/* i don't wanna make boxes, stolen from matt */}
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', paddingTop:'10vh'}}>
                    <ButtonGroup variant='contained' size = 'large' fullWidth='true' sx = {{width: '20rem', height: '10rem'}}> 
                        <Button sx={{width:'50%', height:'100%', fontSize: '3rem'}} onClick={toAddBounty}>Yes</Button>
                        <Button sx={{width:'50%', height:'100%', fontSize: '3rem'}} onClick={toDashboard}>No</Button>
                    </ButtonGroup>
                </Box>
                
            </Container>
        </Container>
    );
}

export default TaskMade;