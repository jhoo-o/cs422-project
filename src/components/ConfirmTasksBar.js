import { useNavigate } from "react-router-dom";
import {ArrowBack, Check} from '@mui/icons-material';
import {AppBar, Box, Toolbar, IconButton, Typography} from '@mui/material';

const ConfirmTasksBar = ({previousDest, TextLabel, nextDest}) => {
    const navigate = useNavigate();
    const handleBack = (event) => {
        event.preventDefault();
        navigate(previousDest);
    }

    const handleNext = (event) => {
        event.preventDefault();
        navigate(nextDest);
    }

    return (
        <Box sx={{flexGrow: 1, justifyContent: 'space-between'}} >
            <AppBar position="static" >
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <IconButton size="large" edge="start" onClick={handleBack} sx = {{marginLeft: 2}}>
                        < ArrowBack />
                    </IconButton>
                    <div sx = {{flexGrow: 1}}>
                        <Typography variant = 'h4'>
                            {TextLabel}
                        </Typography>
                    </div>
                    <IconButton edge = 'end' size = 'large' onClick={handleNext} sx = {{marginRight: 2, color: 'white'}}>
                        <Check/>
                    </IconButton>
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default ConfirmTasksBar;