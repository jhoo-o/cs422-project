import { useNavigate } from "react-router-dom"
import {ListItemButton, ListItemText, Divider} from "@mui/material";
const SetNavigate = ({text, destination}) => {
    const navigate = useNavigate();
    return(
        <>
        <ListItemButton onClick={e => {
            e.preventDefault();
            navigate(destination);
        }}>
            <ListItemText>{text}</ListItemText>
        </ListItemButton>
        <Divider />
        </>
    )
}

export default SetNavigate;