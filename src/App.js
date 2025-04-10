import {Routes, Route} from "react-router-dom";

//Imported Components (pages)
import SettingsList from "./pages/settingsList";
import Dashboard  from "./pages/dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/test" element={<Dashboard/>}/>
        <Route exact path="/" element={<SettingsList/>}/>
      </Routes>
    </div>
  );
}

export default App;
