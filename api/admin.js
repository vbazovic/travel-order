const cors = require('cors')
const express = require('express');
const mysql = require('mysql2');

const settings = require('./settings.json');

const app = express();
const appHost = settings.app_host;
const port = settings.admin_port;

app.use(cors())
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

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const dbQuery = 'SELECT username, password FROM `user` WHERE username = ? AND password = ?';

  db.query(dbQuery, [username, password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Ako je korisnik pronađen
    res.json({ token: AUTH_TOKEN });
  });
});

// Middleware to check token
function authenticate(req, res, next) {
  const auth = req.headers['authorization'];
  if (auth !== `Bearer ${AUTH_TOKEN}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
}

// GET all users
app.get('/user', authenticate, (req, res) => {
  const sqlQuery = "SELECT * FROM `user` ORDER BY id DESC;"
  db.query(sqlQuery, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// GET one user by ID
app.get('/user/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM `user` WHERE id = ?;", [id], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(results[0]);
  });
});

// POST add user
app.post('/user', authenticate, (req, res) => {
  const jsonData = req.body;
  db.query("INSERT INTO `user` (username, password, admin,  fk_organisation) VALUES(?, ?, ?, ?)", [
    jsonData.username,
    jsonData.password,
    jsonData.admin,
    jsonData.fkOrganisation], (err) => {
      if (err)
        res.json({ message: 'Cannot create user' });
      else
        res.json({ message: 'User created!' });
    });
});

// PUT update user
app.put('/user/:id', authenticate, (req, res) => {
  const jsonData = req.body;
  const { id } = req.params;
  db.query("UPDATE `user` SET username = ?, password = ?, admin = ?, fk_organisation = ? WHERE id = ?", [
    jsonData.username,
    jsonData.password,
    jsonData.admin,
    jsonData.fkOrganisation, id], (err) => {
      if (err) {
        res.json({ message: 'User not updated!' });
      }
      else
        res.json({ message: 'User updated!' });

    });
});

// DELETE user
app.delete('/user/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM `user` WHERE id = ? AND admin = 0", [id], (err) => {
    if (err)
      res.json({ message: 'Cannot delete user!' });
    else
      res.json({ message: 'User deleted' });
  });
});

app.listen(port, () => {
  console.log(`Server running at http://${appHost}:${port}`);
});