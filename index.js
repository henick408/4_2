'use strict';

const express = require('express');
const { isUndefined } = require('util');
const app = express();

let categories = ['funnyJoke', 'lameJoke'];

// let funnyJoke = [
//   {
//     'joke': 'Dlaczego komputer poszedł do lekarza?',
//     'response': 'Bo złapał wirusa!'
//   },
//   {
//     'joke': 'Dlaczego komputer nie może być głodny?',
//     'response': 'Bo ma pełen dysk!'
//   },
//   {
//     'joke': 'Co mówi jeden bit do drugiego?',
//     'response': '„Trzymaj się, zaraz się przestawiamy!”'
//   }
// ];
// let lameJoke = [
//   {
//     'joke': 'Dlaczego programiści preferują noc?',
//     'response': 'Bo w nocy jest mniej bugów do łapania!'
//   },
//   {
//     'joke': 'Jak nazywa się bardzo szybki programista?',
//     'response': 'Błyskawiczny kompilator!'
//   }
// ];

// app.get('/', (req, res) => {
//   return res.status(200).json(funnyJoke);
// })


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});