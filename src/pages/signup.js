import {useNavigate} from "react-router-dom";
import {AppBar, Box, List, ListItemText, ListItemButton, Divider, Toolbar, IconButton} from "@mui/material";
import {ArrowBack, Settings} from '@mui/icons-material';

const Signup = () => {

    const navigate = useNavigate();

    const testClick = (event) => {
        event.preventDefault();
        navigate("/test");
    }

    return (
        <div>
        </div>
    );
}

export default Signup;