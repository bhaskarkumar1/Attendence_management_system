import './App.css';
import Navbar from './components/Navbar';
import Input from './components/Input';
import React,{useState} from 'react';
function App() {
const [rough,setRough]=useState("")

console.log(rough);
  return (
    <div className="App">
      <Navbar setRough={setRough} />
      
      <Input search={rough}  />
    </div>
  );
}

export default App;
