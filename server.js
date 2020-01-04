const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Database 
mongoose.connect('mongodb://127.0.0.1:27017/user-manager', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to database ...'))
    .catch(e => console.error(e))

// Middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// controllers
const UserControl = require('./controllers/userControl');

// Routers
app.post('/api/user/create', UserControl.create);
app.post('/api/user/update', UserControl.update);
app.get('/api/user/retrieve', UserControl.retrieve);
app.delete('/api/user/delete', UserControl.delete);

// Start server
app.listen(4444, () => console.log('Server has started on port 4444') )