'use strict';

const express = require('express');
const app = express();
app.use(express.json());

let categories = ['funnyJoke', 'lameJoke'];

let funnyJoke = [
  {
    'joke': 'Dlaczego komputer poszedł do lekarza?',
    'response': 'Bo złapał wirusa!'
  },
  {
    'joke': 'Dlaczego komputer nie może być głodny?',
    'response': 'Bo ma pełen dysk!'
  },
  {
    'joke': 'Co mówi jeden bit do drugiego?',
    'response': '„Trzymaj się, zaraz się przestawiamy!”'
  }
];
let lameJoke = [
  {
    'joke': 'Dlaczego programiści preferują noc?',
    'response': 'Bo w nocy jest mniej bugów do łapania!'
  },
  {
    'joke': 'Jak nazywa się bardzo szybki programista?',
    'response': 'Błyskawiczny kompilator!'
  }
];

function determineCategory(categoryString){
  let category;
  categoryString = categoryString.toLowerCase();
  if(categoryString == 'funnyjoke'){
    category = funnyJoke;
  } else{
    category = lameJoke;
  }
  return category
}

app.get('/jokebook/categories', (req, res) => {

  return res.json(categories);

});

app.get('/jokebook/joke/:category', (req,res) => {

  const categoryString = req.params.category.toLowerCase();
  
  
  if(categoryString != 'funnyjoke' && categoryString != "lamejoke"){
    return res.status(401).json({error: `No joke for category ${categoryString}`});
  }

  let categoryLength;
  let category;

  if(categoryString == 'funnyjoke'){
    categoryLength = funnyJoke.length;
    category = funnyJoke;
  } else
  if(categoryString == 'lamejoke'){
    categoryLength = lameJoke.length;
    category = lameJoke;
  }


  const randomJokeIndex = Math.floor(Math.random() * categoryLength);

  const joke = category[randomJokeIndex];

  return res.json({joke});

});

app.post('/jokebook/joke/:category', (req, res) =>{
  const categoryString = req.params.category.toLowerCase();
  const body = req.body;

  if(categoryString != 'funnyjoke' && categoryString != "lamejoke"){
    return res.status(401).json({error: `No joke for category ${categoryString}`});
  }
  
  
  if(categoryString == 'funnyjoke'){
    funnyJoke.push(body);
  } else{
    lameJoke.push(body);
  }
  const category = determineCategory(categoryString);
  console.log(categoryString);

  return res.json(category);
});

// endpoint do sprawdzania czy post dziaua
app.get('/:category', (req, res) => {
  const categoryString = req.params.category;
  const category = determineCategory(categoryString);
  return res.json(category);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});