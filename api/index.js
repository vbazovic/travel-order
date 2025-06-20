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

//-------------------------Vehicle routes

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

//-------------------------------Employee routes

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

// ---------------------------------Organisation routes

// GET all organisations
app.get('/organisation', authenticate, (req, res) => {
  db.query('SELECT * FROM organisation', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// GET one organisation by ID
app.get('/organisation/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM organisation WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ error: 'Organisation not found' });
    }
    res.json(results[0]);
  });
});

// POST add organisation
app.post('/organisation', authenticate, (req, res) => {
  const jsonData = req.body;  
  db.query('INSERT INTO travel_order.organisation (resp_person, seal, name, address, issuer) VALUES(?, ?, ?, ?, ?)', [jsonData.respPerson, jsonData.seal, jsonData.name, jsonData.address, jsonData.issuer], (err) => {
    if (err) throw err;
    res.json({ message: 'Organisation added' });
  });
});

// PUT update organisation
app.put('/organisation/:id', authenticate, (req, res) => {
  const jsonData = req.body;
  const { id }= req.params;
  db.query('UPDATE organisation SET resp_person = ?, seal = ?, name = ?, address = ?, issuer = ? WHERE id = ?', [jsonData.respPerson, jsonData.seal, jsonData.name, jsonData.address, jsonData.issuer, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Organisation updated' });
  });
});

// DELETE organisation
app.delete('/organisation/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM organisation WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Organisation deleted' });
  });
});

// ---------------------------------travel_expence routes

// GET all travel expences
app.get('/travel_expence', authenticate, (req, res) => {
  db.query('SELECT * FROM travel_expence', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// GET one travel expence by ID
app.get('/travel_expence/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM travel_expence WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ error: 'Travel expence not found' });
    }
    res.json(results[0]);
  });
});

// POST add travel expence
app.post('/travel_expence', authenticate, (req, res) => {
  const jsonData = req.body;  
  db.query('INSERT INTO travel_order.travel_expence (expence_type, start_location, end_location, distance, receipt, price) VALUES(?, ?, ?, ?, ?, ?)', [jsonData.expenceType, jsonData.startLocation, jsonData.endLocation, jsonData.distance, jsonData.receipt, jsonData.price], (err) => {
    if (err) throw err;
    res.json({ message: 'Travel expence added' });
  });
});

// PUT update travel expence
app.put('/travel_expence/:id', authenticate, (req, res) => {
  const jsonData = req.body;
  const { id }= req.params;
  db.query('UPDATE travel_expence SET expence_type = ?, start_location = ?, end_location = ?, distance = ?, receipt = ?, price = ? WHERE id = ?', [jsonData.expenceType, jsonData.startLocation, jsonData.endLocation, jsonData.distance, jsonData.receipt, jsonData.price, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Travel expence updated' });
  });
});

// DELETE travel expence
app.delete('/travel_expence/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM travel_expence WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Travel expence deleted' });
  });
});

// ---------------------------------travel_order routes

// GET all travel orders
app.get('/travel_order', authenticate, (req, res) => {
  db.query('SELECT * FROM travel_order', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// GET one travel order by ID
app.get('/travel_order/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM travel_order WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ error: 'Travel order not found' });
    }
    res.json(results[0]);
  });
});

// POST add travel order
app.post('/travel_order', authenticate, (req, res) => {
  const jsonData = req.body;  
  db.query('INSERT INTO travel_order.travel_order (start_date, end_date, task, location, per_diem, report, state, adv_payment, fk_vehicle, fk_organisation) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [jsonData.startDate, jsonData.endDate, jsonData.task, jsonData.location, jsonData.perDiem, jsonData.report, jsonData.state, jsonData.advPayment, jsonData.fkVehicle, jsonData.fkOrganisation], (err) => {
    if (err) throw err;
    res.json({ message: 'Travel order added' });
  });
});

// PUT update travel order
app.put('/travel_order/:id', authenticate, (req, res) => {
  const jsonData = req.body;
  const { id }= req.params;
  db.query('UPDATE travel_order SET start_date = ?, end_date = ?, task = ?, location = ?, per_diem = ?, report = ?, state = ?, adv_payment = ?, fk_vehicle = ?, fk_organisation = ?  WHERE id = ?', [jsonData.startDate, jsonData.endDate, jsonData.task, jsonData.location, jsonData.perDiem, jsonData.report, jsonData.state, jsonData.advPayment, jsonData.fkVehicle, jsonData.fkOrganisation, id], (err) => {
    if (err) throw err;
    res.json({ message: 'Travel order updated' });
  });
});

// DELETE travel order
app.delete('/travel_order/:id', authenticate, (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM travel_order WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.json({ message: 'Travel order deleted' });
  });
});

// ---------------------------------order employee routes

// GET all order employees
app.get('/order_employee', authenticate, (req, res) => {
  db.query('SELECT * FROM order_employee', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// GET one order employee by ID
app.get('/order_employee/:fkOrder/:fkEmployee', authenticate, (req, res) => {
  const { fkEmployee } = req.params;
  const { fkOrder } = req.params;
  db.query('SELECT * FROM order_employee WHERE fk_order = ? AND fk_employee = ?', [fkOrder, fkEmployee], (err, results) => {
    if (err) throw err;
    if (results.length === 0) {
      return res.status(404).json({ error: 'Order employee not found' });
    }
    res.json(results[0]);
  });
});

// POST add order employee
app.post('/order_employee', authenticate, (req, res) => {
  const jsonData = req.body;  
  db.query('INSERT INTO travel_order.order_employee (fk_order, fk_employee) VALUES(?, ?)', [jsonData.fkOrder, jsonData.fkEmployee], (err) => {
    if (err) throw err;
    res.json({ message: 'Order employee added' });
  });
});

// PUT update order employee
// Update order employee - doesn't make sense

// DELETE order employee
app.delete('/order_employee/:fkOrder/:fkEmployee', authenticate, (req, res) => {
  const { fkOrder } = req.params;
  const { fkEmployee } = req.params;
  db.query('DELETE FROM order_employee WHERE fk_order = ? AND fk_employee = ?', [fkOrder, fkEmployee], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Order employee deleted' });
    if (results.length === 0) {
      return res.status(404).json({ error: 'Order employee not found' });
    }
    res.json(results[0]);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://${appHost}:${port}`);
});