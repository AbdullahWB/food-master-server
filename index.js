const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;



app.use(cors());

app.get('/', (req, res) => { 
    res.send('food pagla')
})


app.listen(port, () => {
    console.log(`food pagla is running on port ${port}`);
})