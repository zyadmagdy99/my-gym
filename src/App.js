import './App.css';
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material"
import Navbar from "./components/Navbar"
import Footer from './components/Footer';
import Home from './pages/Home';
import Exercise from './pages/Exercise';
function App() {
  return (
    <Box >
      <Box width="400px" m="auto" sx={{width:{xl:"1488px"}}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<Exercise />} /> 
        </Routes>

      </Box>
        <Footer/>
    </Box>
  );
}

export default App;
