import {AppBar, Box, Container, List, ListItemText, ListItemButton, Divider, Toolbar, 
    IconButton, Icon, SvgIcon, ListItem, ListItemAvatar, Avatar, Stack, Typography} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';

const SubmitTask = () => {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton size="large" edge="start" >
                            < ArrowBack />
                        </IconButton>
                        <Typography variant="h5" sx={{flexGrow:1}}>Confirm Submit Task</Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            <Container sx={{flexGrow:1}}>
                
            </Container>
        </>
    );
}

export default SubmitTask;