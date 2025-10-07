const express=require('express');
const cors=require('cors');
const app=express();

app.use(cprs());
app.use(express.json());

app.get('/', (req, res)=>{
    res.send('API Sistema de Gym');
});

app.listen(3001,()=>{
    console.log('Servidor en http://localhost:3001');
});