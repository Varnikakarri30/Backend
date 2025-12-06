import express from 'express';
// import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
// app.use(bodyParser());

app.get('/get-user',(req,res)=>{
    res.send("api 👌🏻");
})

app.post('/add-user',(req,res) => {
    let data = req.body;
    console.log(data); 
    //logic to add data into database after adding send success response and then error handling
    res.send("data added");
}) //path

app.put('/edit-user',(req,res)=> {
    let data = req.body;
    console.log(data);
    res.send("edited");
})

app.delete('/delete-user',(req,res)=> {
    let data = req.body;
    console.log(data);
    res.send("deleted");
})

app.listen(8004, ()=> {
    console.log("server runing at port 8004");
})

