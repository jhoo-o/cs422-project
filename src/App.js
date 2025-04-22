import {Routes, Route} from "react-router-dom";

//Imported Components (pages)
import SettingsList from "./pages/settingsList";
import Dashboard  from "./pages/dashboard";
import CreditCardInfo from "./pages/settingsPages/creditCardInfo";
import Profile from "./pages/settingsPages/profile"
import Signin from "./pages/signin";
import TerminateAccount from "./pages/settingsPages/terminateAccount";
import Task_Create from "./pages/task_create";
import Signup from './pages/signup';
import Subtask_Create from './pages/subtask_create';
import Task_Detail from './pages/task_detail';
import SubmitTask from "./pages/submitTask";
import Task_Made from './pages/task_made';

function App() {
  return (
    <div className="App">
      {/*Routes to each JS file*/}
      <Routes>
        <Route exact path = "/" element={<Signin/>}/>
        <Route exact path = '/Signup' element = {<Signup/>}/>
        <Route exact path = "/Settings" element={<SettingsList/>}/>
        <Route exact path = "/CardSetup" element={<CreditCardInfo/>}/>
        <Route exact path = "/Profile" element={<Profile />}/>
        <Route exact path = "/Terminate" element={<TerminateAccount/>}/>
        <Route exact path = "/Dashboard" element = {<Dashboard/>}/>
        <Route exact path = "/Task_Create" element = {<Task_Create/>}/>
        <Route exact path = "/Subtask_Create" element = {<Subtask_Create/>}/>
        <Route exact path = "/Task_Detail" element = {<Task_Detail/>}/>
        <Route exact path = "/Task-Create" element = {<Task_Create/>}/>
        <Route exact path = "/SubmitTask" element = {<SubmitTask/>}/>
        <Route exact path = "/Task_Made" element = {<Task_Made/>}/>
      </Routes>
    </div>
  );
}

export default App;
