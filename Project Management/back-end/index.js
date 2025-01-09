import express from "express";
import cors from "cors";
import mysql from "mysql2";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());

app.use(cors({
  origin: 'http://localhost:5173', // Pakeiskite į savo frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Leisti konkrečius metodus
  allowedHeaders: ['Content-Type', 'Authorization'], // Leisti konkrečias antraštes
}));



// routai

// Registracija

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) throw err;
      db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword],
        (err, result) => {
          if (err) throw err;
          res.status(201).send({ message: 'User created successfully' });
        }
      );
    });
  });
  
  // Prisijungimas
  app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) throw err;
      if (results.length === 0) return res.status(400).send('User not found');
  
      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (!isMatch) return res.status(400).send('Invalid credentials');
        const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });
        res.json({ token });
      });
    });
  });
  
  // Projektų kūrimas
  app.post('/projects', (req, res) => {
    const { name, description, userId } = req.body;
    db.query(
      'INSERT INTO projects (name, description, user_id) VALUES (?, ?, ?)',
      [name, description, userId],
      (err, result) => {
        if (err) throw err;
        res.status(201).send({ message: 'Project created successfully' });
      }
    );
  });


  
  
  // Milestone kūrimas
  app.post('/milestones', (req, res) => {
    const { projectId, title, deadline } = req.body;
    db.query(
      'INSERT INTO milestones (project_id, title, deadline) VALUES (?, ?, ?)',
      [projectId, title, deadline],
      (err, result) => {
        if (err) throw err;
        res.status(201).send({ message: 'Milestone created successfully' });
      }
    );
  });
  
  // Užduočių kūrimas
  app.post('/tasks', (req, res) => {
    const { milestoneId, title, priority } = req.body;
    db.query(
      'INSERT INTO tasks (milestone_id, title, priority) VALUES (?, ?, ?)',
      [milestoneId, title, priority],
      (err, result) => {
        if (err) throw err;
        res.status(201).send({ message: 'Task created successfully' });
      }
    );
  });
  
  // Užduoties atnaujinimas
  app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, priority } = req.body;
    db.query(
      'UPDATE tasks SET title = ?, priority = ? WHERE id = ?',
      [title, priority, id],
      (err, result) => {
        if (err) throw err;
        res.status(200).send({ message: 'Task updated successfully' });
      }
    );
  });
  
  // Užduoties statuso atnaujinimas (done)
  app.put('/tasks/done/:id', (req, res) => {
    const { id } = req.params;
    db.query(
      'UPDATE tasks SET status = "done" WHERE id = ?',
      [id],
      (err, result) => {
        if (err) throw err;
        res.status(200).send({ message: 'Task marked as done' });
      }
    );
  });
  
  // Užduoties pašalinimas
  app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id = ?', [id], (err, result) => {
      if (err) throw err;
      res.status(200).send({ message: 'Task deleted successfully' });
    });
  });








app.listen(3000, () => {
    console.log("Serveris vaziuoja ant 5000 porto");
});
