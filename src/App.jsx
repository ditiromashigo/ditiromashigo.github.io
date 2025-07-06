import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="layout">
      <div>
        <h1>Ditiro Mashigo</h1>
       
      </div>
      <p className="read-the-docs">Website coming soon</p>
      <div className="card">
  <a href="mailto:ditiro23.dm@gmail.com">
    <button>Get in touch</button>
  </a>
</div>
    </div>
  );
}

export default App;
