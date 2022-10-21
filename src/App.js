import './App.css';
import Weathers from './components/Weather/Weathers';
import Pollution from './components/Pollution/Pollution';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
	    <Routes>
	      <Route path="/" element={<Weathers />} />
	      <Route path="pollution" element={<Pollution />} /> 
	    </Routes>    
    </>
  );
};

export default App;