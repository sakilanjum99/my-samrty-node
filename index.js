const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello from my own Smarty Smarty Pant!')
});

app.get('/users', (req, res) => {
  res.send({id:1, name: 'Abdul Alim', job:'kahi shudu halim'})
});

app.listen(port, () => {
  console.log('listening to port ',port)
});