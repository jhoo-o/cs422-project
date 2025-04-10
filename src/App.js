import {Routes, Route} from "react-router-dom";

//Imported Components (pages)
import SettingsList from "./pages/settingsList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SettingsList/>}/>
        <Route exact path="/test" element={<SettingsList/>}/>
      </Routes>
    </div>
  );
}

export default App;
