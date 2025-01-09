import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost/server/login', 
                { email, password });

            localStorage.setItem('token', res.data.token);
            // history.push('/projects');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        
        <form onSubmit={handleSubmit}>
            <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Password" value={password} onChange={(e)=> setPassword(e.target.value)} />
            <Button type="submit">Login</Button>
        </form>
        
    );
}

export default LoginPage;