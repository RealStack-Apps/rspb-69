const fs = require('fs');
const express = require('express');
const app = express();

const getCovid = () => {
  let data = fs.readFileSync('global.json')
  return JSON.parse(data)
}

app.get('/', function (req, res) {
  res.send('Hello RealStack!')
})

const getRank = () => {
  let rankData = fs.readFileSync('rank.json')
  return JSON.parse(rankData)
}


app.get('/global', (req,res) => {
  const globalData = getCovid()
  res.send(globalData)
})

app.get('/rank',(req, res) => {
  const rankings = getRank()
  res.send(rankings)
})

app.listen(8080);
