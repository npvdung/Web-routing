const express = require('express');
const path = require('path');
const app = express();

const port =3000;

app.use(express.static(__dirname));
app.set('view engine','ejs');

app.get('/students/:slug',(req,res,next)=> {
    res.render('get');
})

app.put('/students/:slug',(req,res,next)=> {
    res.render('update');
})
app.get('/students',(req,res,next)=> {
    res.json(req.query);
})

app.get('/',(req,res,next) => {
    res.render('update');
})




app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  })