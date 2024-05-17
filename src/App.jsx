import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [exist, setexist] = useState(false);

  function isexist() {
    setexist(!exist);
  }

  return (
    <>
      <div>
        <ol className="navbar">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>save</li>
        </ol>
        <button className="btn" onClick={() => isexist()}>
          =
        </button>
        {exist &&
        
        <ul>
            <li>
              a
            </li>


        </ul>
        
        
        }
      
      
      
      </div>
    </>
  );
}

export default App;
