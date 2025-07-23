import { useState, useEffect } from 'react'
import './App.css'

function App() {
  let [password, setPassword] = useState("");
  let [len, setLength] = useState(8);
  let [number, setNumber] = useState(false);
  let [special, setSpecial] = useState(false);

  function generatepasswor() {
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if (number)
      str += "123456789"
    if (special)
      str += "@#$%&"
    let pass = ""
    for (let i = 0; i < len; i++) {
      pass += str[Math.floor(Math.random() * (str.length - 0)) + 0];
    }
    setPassword(pass);
  }
  useEffect(() => {
    generatepasswor()
  }, [len, number, special])
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw", backgroundColor: "#242424" }}>
        <h2 style={{ color: "#242424", width: "50%", backgroundColor: "azure", textAlign: "center", borderColor: "black", borderWidth: "5px", borderStyle: "solid", borderRadius: "5px" }}>Password :- {password}</h2>
        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
          <input type="range" id="bar" min={4} max={16} value={len} onChange={(e) => setLength(e.target.value)}></input>
          <span style={{ color: "azure", fontSize: "large" }}>Length :- {len}</span>
          <span style={{ color: "azure", fontSize: "large" }}>Number  :- </span><input type="checkbox" name="tick" defaultChecked={number} onChange={() => setNumber(!number)}></input>
          <span style={{ color: "azure", fontSize: "large" }}>Special Character :-  </span><input type="checkbox" name="ticked" defaultChecked={special} onChange={() => setSpecial(!special)}></input>
        </div>
        <button id="btn" style={{ backgroundColor: "black", color: "azure", width: "100px", height: "30px", borderColor: "azure", borderRadius: "5px" }} onClick={() => generatepasswor()}>Genetrate</button>
        <div style={{ position: "fixed", bottom: "10px", left: "10px" }}>
          <h4 style={{ color: "azure", margin: 0 }}>@AtifAhmed</h4>
        </div>
      </div>

    </>
  )
}

export default App
