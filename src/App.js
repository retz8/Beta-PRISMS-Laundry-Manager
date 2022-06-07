import './App.css';
import { RealtimeData } from './components/realtimeData';
import { RealtimeDataMobile } from './components/realtimeDataMobile';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserView, MobileView } from 'react-device-detect';
function App() {
  return (
    
    // <div>
    //   <RealtimeData/>
    //   <img className = "logo" alt = "plLogo" src = {require("./components/img/logo.png")}/>
    // </div>
    <div>
      <BrowserView>
        <RealtimeData/> 
        <img className = "logo" alt = "plLogo" src = {require("./components/img/logo.png")}/>
        <img className = "instruction" alt = "instruction" src =  {require("./components/img/instruction.png")}/>
      </BrowserView>
      <MobileView>
        <RealtimeDataMobile/> 
        <img className = "mlogo" alt = "plLogo" src = {require("./components/img/logo.png")}/>
        <img className = "divLine" alt = "line" src = {require("./components/img/line.png")}/>
        <img className = "minstruction" alt = "instruction" src =  {require("./components/img/instruction.png")}/>
      </MobileView>
    </div>
  );
}
export default App; 