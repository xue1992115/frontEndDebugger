import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from 'react';

function App() {
  const [name, setName ] = useState('han');
  useEffect(() => {
    setTimeout(() => {
      setName('xiao')
    }, 1000);
  }, [name])
  return (
    <div className="App">
      {name}
    </div>
  );
}

export default App;
