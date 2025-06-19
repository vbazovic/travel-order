const express = require('express');
const mysql = require('mysql2');

const settings = require('./settings.json');

const app = express();
const appHost = settings.app_host;
const port = settings.app_port;

app.use(express.json());

const AUTH_TOKEN = settings.app_token;

const db = mysql.createConnection({
  host: settings.db_host,
  user: settings.db_user,
  password: settings.db_passwd,
  database: settings.db_name
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === settings.app_user && password === settings.app_passwd) {
    res.json({ token: AUTH_TOKEN });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Middleware to check token
function authenticate(req, res, next) {
  const auth = req.headers['authorization'];
  if (auth !== `Bearer ${AUTH_TOKEN}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// Vehicle routes

// GET all vehicles
app.get('/vehicle', authenticate, (req, res) => {
  db.query('SELECT * FROM vehicle', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// GET one vehicle by ID
app.get('/vehicle/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM vehicle WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ error: 'Vehicle not found' });
    }
    res.json(results[0]);
  });
});

// POST create vehicle
app.post('/vehicle', authenticate, (req, res) => {
  const jsonData = req.body;  
  db.query('INSERT INTO travel_order.vehicle (name, avg_consumption) VALUES(?, ?)', [jsonData.name, jsonData.avgConsumption], (err) => {
    if (err) throw err;
    res.json({ message: 'Vehicle created' });
  });
});

// PUT update vehicle
app.put('/vehicle/:id', authenticate, (req, res) => {
  const jsonData = req.body;
  const { id }= req.params;
  db.query('UPDATE vehicle SET name = ?, avg_consumption = ? WHERE id = ?', [jsonData.name, jsonData.avgConsumption, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Vehicle updated' });
  });
});

// DELETE vehicle
app.delete('/vehicle/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM vehicle WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Vehicle deleted' });
  });
});

// Employee routes

// GET all employees
app.get('/employee', authenticate, (req, res) => {
  db.query('SELECT * FROM employee', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// GET one employee by ID
app.get('/employee/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM employee WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(results[0]);
  });
});

// POST add employee
app.post('/employee', authenticate, (req, res) => {
  const jsonData = req.body;  
  db.query('INSERT INTO travel_order.employee (name, surname, position, card_id_num) VALUES(?, ?, ?, ?)', [jsonData.name, jsonData.surname, jsonData.position, jsonData.cardIdNum], (err) => {
    if (err) throw err;
    res.json({ message: 'Employee added' });
  });
});

// PUT update employee
app.put('/employee/:id', authenticate, (req, res) => {
  const jsonData = req.body;
  const { id }= req.params;
  db.query('UPDATE employee SET name = ?, surname = ?, position = ?, card_id_num = ? WHERE id = ?', [jsonData.name, jsonData.surname, jsonData.position, jsonData.cardIdNum, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Employee updated' });
  });
});

// DELETE employee
app.delete('/employee/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM employee WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Employee deleted' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://${appHost}:${port}`);
});