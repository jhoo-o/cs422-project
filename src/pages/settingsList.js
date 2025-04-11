import {List} from "@mui/material";
import SetNavigate from "../components/SetNavigate"
import SettingsBar from "../components/settingsTopBar";

const SettingsList = () => {
    
    return (
        <>
            <SettingsBar previousDest={"/"}/>
            <List sx={{backgroundColor: '#e8f1ff', width:'100%', flexGrow: 1}}>
                {/*<SetNavigate text = {"Profile"} destination={"/Profile"}/>*/}
                <SetNavigate text = {"Credit Card Information"} destination={"/CardSetup"}/>
                <SetNavigate text = {"Terminate Account"} destination={"/Terminate"}/>
            </List>
        </>
    );
}

export default SettingsList;