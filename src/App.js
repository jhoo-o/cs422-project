import {Routes, Route} from "react-router-dom";

//Imported Components (pages)
import SettingsList from "./pages/settingsList";
import Dashboard  from "./pages/dashboard";
import CreditCardInfo from "./pages/settingsPages/creditCardInfo";
import Profile from "./pages/settingsPages/profile"
import Signin from "./pages/signin";
import TerminateAccount from "./pages/settingsPages/terminateAccount";
import Task_Create from "./pages/task_create";
import SubmitTask from "./pages/submitTask";

function App() {
  return (
    <div className="App">
      {/*Routes to each JS file*/}
      <Routes>
        <Route exact path = "/" element={<Signin/>}/>
        <Route exact path = "/Settings" element={<SettingsList/>}/>
        <Route exact path = "/CardSetup" element={<CreditCardInfo/>}/>
        <Route exact path = "/Profile" element={<Profile />}/>
        <Route exact path = "/Terminate" element={<TerminateAccount/>}/>
        <Route exact path = "/Dashboard" element = {<Dashboard/>}/>
        <Route exact path = "/Task-Create" element = {<Task_Create/>}/>
        <Route exact path = "/SubmitTask" element = {<SubmitTask/>}/>
      </Routes>
    </div>
  );
}

export default App;
