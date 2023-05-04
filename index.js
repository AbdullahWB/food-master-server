const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const chefs = require('./data/chef.json')
const teams = require('./data/team.json')
const foods = require('./data/food.json')
const chefFood = require('./data/chefFood.json')

app.use(cors());

app.get('/', (req, res) => { 
    res.send('food pagla')
})

app.get('/chefs', (req, res) => { 
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => { 
    const id = req.params.id;
    const selectedId = chefs.find(c => c.id == id);
    res.send(selectedId)
})

app.get('/teams', (req, res) => { 
    res.send(teams)
})

app.get('/foods', (req, res) => { 
    res.send(foods)
})

app.get('/recipes', (req, res) => { 
    res.send(chefFood)
})

app.get('/categories/category/:id', (req, res) => { 
    const id = req.params.id;
    const selectedFood = chefFood.find(f => f.id == id);
    res.send(selectedFood)
})

app.get('/categories/:id', (req, res) => { 
    const id = req.params.id;
    const selectedType = chefFood.filter(h => h.category_id == id)
    res.send(selectedType)
})

app.listen(port, () => {
    console.log(`food pagla is running on port ${port}`);
})