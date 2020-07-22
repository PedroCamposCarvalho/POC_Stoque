const express = require('express');

const app = express();
app.use(express.json())
const propostas = [];
let i = 0;

app.get('/poc', (request, response) => {
  return response.json(propostas)
})

app.put('/poc', (request, response) => {
  const {numeroProposta} = request.query;
  propostas.push({id: i+1, proposta: numeroProposta})
  i+=1;
  console.log(propostas)
  return response.json({ok: true})
})

app.listen(8080);