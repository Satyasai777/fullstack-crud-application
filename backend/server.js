const express = require('express')
const mysql = require('mysql')
const cors = require('cors')

const app = express()

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'student'
})

app.get('/',(req,res)=>{
    const sql = 'select * from studdetails';

    db.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.post('/create',(req,res)=>{
    const sql = 'insert into studdetails(name,email) values (?,?)';

    db.query(sql,[req.body.name,req.body.email],(err,result)=>{
        if(err){
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.put('/update/:id',(req,res)=>{
    const sql = 'update studdetails set `name`=?,`email`=? where id=?';

    db.query(sql,[req.body.name,req.body.email,req.params.id],(err,result)=>{
        if(err){
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.delete('/student/:id',(req,res)=>{
    const sql = 'delete from studdetails where id=?';

    db.query(sql,[req.params.id],(err,result)=>{
        if(err){
            console.log(err)
        } else {
            res.json(result)
        }
    })
})

app.listen(8081,()=>{
    console.log("Your server is running on port 8081")
})
