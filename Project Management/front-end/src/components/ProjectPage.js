import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, CardContent} from '@mui/material';
import { Typography } from '@mui/material';


function ProjectPage() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const res = await axios.get('http://localhost:5000/projects');
            setProjects(res.data);
        };

        fetchProjects();
    }, []);

    return (
        <div>
            {projects.map((project) => (
                <Card key={project.id} sx={{ marginBottom: 2 }}>
                <CardContent>
                    <Typography variant="h6">{  "No name available" }</Typography>
                    <Typography>{ "No description available" }</Typography>
                    <Button variant="contained" color="primary">
                        View Details
                    </Button>
                </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default ProjectPage;