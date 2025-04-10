import {useNavigate} from "react-router-dom";
import {AppBar, Box, List, ListItemText, ListItemButton, Divider, Toolbar, IconButton} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';

const SettingsList = () => {
    const navigate = useNavigate();

    const testClick = (event) => {
        event.preventDefault();
        navigate("/test");
    }

    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" sx={{}}>
                            < ArrowBack />
                        </IconButton>
                        <IconButton size="large" sx={{}}>
                            <Settings />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
            <List sx={{backgroundColor: '#e8f1ff', width:'100%', flexGrow: 1}}>
                <ListItemButton onClick={testClick}>
                    <ListItemText>Profile</ListItemText>
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemText>Credit Card Information</ListItemText>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                    <ListItemText>Terminate Account</ListItemText>
                </ListItemButton>
            </List>
        </>
    );
}

export default SettingsList;