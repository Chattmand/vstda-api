const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const app = express();

app.set('json spaces', 2);

app.use(bodyParser.json());

let newData = [

    {
        todoItemId: 0,
        name: 'an item',
        priority: 3,
        completed: false
    },
    {
        todoItemId: 1,
        name: 'another item',
        priority: 2,
        completed: false
    },
    {
        todoItemId: 2,
        name: 'a done item',
        priority: 1,
        completed: true
    }
];
// console.log(newData[0].name)
// console.log(newData[0]['todoItemId'])
app.get('/', (req, res) => {    
   
    // add your code here   
 res.status(200).json({ status: 'ok' })
});

app.get('/api/ToDoItems', (req,res) => {
    res.status(200).json(newData)
    // add your code here
});

app.get('/api/ToDoItems/:number', (req,res) => {
    // add your code here
    for(let i = 0; i < newData.length; i++){
        if(newData[i]['todoItemId'] == req.params.number){
            res.send(newData[i]);
        }
    }
    
});

app.post('/api/TodoItems', (req,res) => {
    //res.send(req.body);
       for(let i = 0; i < newData.length; i++){
        if(newData[i]['todoItemId'] == req.body['todoItemId']){
            newData.splice(i, 1, req.body);
            res.status(201).json(req.body);
        }
    }
    newData.push(req.body);
    res.status(201).json(req.body);
});

app.delete('/api/ToDoItems/:number', (req,res) => {
    // add your code here
    for(let i = 0; i < newData.length; i++){
        if(newData[i]['todoItemId'] == req.params.number){
            let removed = newData.splice(i, 1);
            console.log(removed[0])
            res.status(200).json(removed[0]);
        }
    
    }

});

module.exports = app;
