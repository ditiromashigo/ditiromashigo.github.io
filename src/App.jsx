import { useState } from "react";
import P5Wrapper from "./P5wrapper";
import InteractiveText from "./InteractiveText";
import AnimatedName from "./AnimatedName";

import "./App.css";

function App() {


  return (
    <div className="layout">
      <div>
      <AnimatedName name="Ditiro Mashigo" />
       
      </div>
      <p className="read-the-docs">Website coming soon</p>
      <div className="card">
  <a href="mailto:ditiro23.dm@gmail.com">
    <button>Get in touch</button>
  </a>
</div>
<div>


    </div>
    </div>
  );
}

export default App;
