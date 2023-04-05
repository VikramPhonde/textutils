import Alert from "./Alert";
import Home from "./Home";
import NavBar from "./NavBar";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const togglemode = () => {
    if(mode=='light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      setAlert({msg : "Dark mode enabled" , type : "success"});
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlert({msg : "Dark mode disabled" , type : "success"});
      setTimeout(() => {
        setAlert(null);
      }, 1000);
    }
  }

  const showALert = (message,type) => {
    setAlert({msg : message , type : type});
     setTimeout(() => {
       setAlert(null);
     }, 1000);
  }

  return (

    <div>
      <NavBar mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <Home mode={mode} showALert= {showALert}/>
    </div>
  );
}

export default App;
