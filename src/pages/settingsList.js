import {AppBar, Box, List, ListItemText, ListItemButton, Toolbar, IconButton} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';
import SetNavigate from "../components/SetNavigate";

const SettingsList = () => {
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
                <SetNavigate text = {"Profile"} destination={"/Profile"}/>
                <SetNavigate text = {"Credit Card Information"} destination={"/CardSetup"}/>
                <SetNavigate text = {"Terminate Account"} destination={"/"}/>
            </List>
        </>
    );
}

export default SettingsList;