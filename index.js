const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const chefs = require('./data/chef.json')
const teams = require('./data/team.json')
const foods = require('./data/food.json')

app.use(cors());

app.get('/', (req, res) => { 
    res.send('food pagla')
})

app.get('/chefs', (req, res) => { 
    res.send(chefs)
})

app.get('/teams', (req, res) => { 
    res.send(teams)
})

app.get('/foods', (req, res) => { 
    res.send(foods)
})

app.listen(port, () => {
    console.log(`food pagla is running on port ${port}`);
})