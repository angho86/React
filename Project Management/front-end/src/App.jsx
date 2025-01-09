import { useState } from 'react'
import { Container, Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ProjectPage from './components/ProjectPage';
import LoginPage from './components/LoginPage.jsx';
// import RegisterPage from './components/RegisterPage';
// import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Container>
        <Typography variant="h3">Collab Project Management</Typography>
        <LoginPage />
        <Routes>
          
          {/* <Route path="/register" component={RegisterPage} /> */}
          {/* <Route path="/projects" component={ProjectPage} /> */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App
