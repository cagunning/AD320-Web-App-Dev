const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send('Okay i think i got this express thing??')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})