//main server file
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const { hash } = require('bcrypt');
app.use(express.json());

// const posts =[
//   {
//       username:"coder",
//       title:"Post 1"
//   },
//   {
//     username:"tech2",
//     title:"Post 2"
// }
// ];

const users = []; //for authentitcation

app.get('/posts',(req,res)=>{
  res.json(users);
});

app.post('/login',async (req,res)=>{
    try{
        const salt = await bcrypt.genSalt();
        const  hashedPassword = await bcrypt.hash(req.body.password,salt);
        console.log(salt);
        console.log(hashedPassword);
        const user = {name: req.body.name, password: hashedPassword}
        users.push(user);
        res.status(201).send();
    }catch{
        res.status(505).send();
    }
})

app.listen(8000);