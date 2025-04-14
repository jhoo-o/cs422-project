import {Routes, Route} from "react-router-dom";

//Imported Components (pages)
import SettingsList from "./pages/settingsList";
import Dashboard  from "./pages/dashboard";
import CreditCardInfo from "./pages/settingsPages/creditCardInfo";
import Profile from "./pages/settingsPages/profile"
import Signup from "./pages/signup";
import TerminateAccount from "./pages/settingsPages/terminateAccount";
import SubmitTask from "./pages/submitTask";

function App() {
  return (
    <div className="App">
      {/*Routes to each JS file*/}
      <Routes>
        <Route exact path = "/" element={<Dashboard/>}/>
        <Route exact path = "/Settings" element={<SettingsList/>}/>
        <Route exact path = "/CardSetup" element={<CreditCardInfo/>}/>
        <Route exact path = "/Profile" element={<Profile />}/>
        <Route exact path = "/Terminate" element={<TerminateAccount/>}/>
        <Route exact path = "/Sign-Up" element={<Signup/>}/>
        <Route exact path = "/Submit-Task" element = {<SubmitTask/>}/>
      </Routes>
    </div>
  );
}

export default App;
