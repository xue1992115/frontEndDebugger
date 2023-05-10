import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from 'react';

function App() {
  // const [name, setName ] = useState('han');
  // useEffect(() => {
  //   setTimeout(() => {
  //     setName('xiao')
  //   }, 1000);
  // }, [name])
  return (
    <div className="App">
      {/* {name} */}
      <div onClick={(e) =>  console.log(12) }> click </div>
    </div>
  );
}

export default App;
