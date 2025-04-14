import { useNavigate } from "react-router-dom";
import {ArrowBack, Settings} from '@mui/icons-material';
import {AppBar, Box, Toolbar, IconButton} from "@mui/material";

const NormalBar = ({previousDest}) => {
    const navigate = useNavigate();
    const handleClick = (event) => {
        event.preventDefault();
        navigate(previousDest);
    }
    return (
        <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" onClick={handleClick}>
                            < ArrowBack />
                        </IconButton>
                        <Settings size="large" sx={{flexGrow: 1}}/>
                    </Toolbar>
                </AppBar>
        </Box>
    )
}

export default NormalBar;