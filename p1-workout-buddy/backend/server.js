require('dotenv').config()

const express = require ('express');
const app = express();

//routes
app.get('/', (req,res) => {
    res.json({msg : 'welcome to app'})
})

//listening on port
app.listen(process.env.PORT, ()=>{
    console.log("listening on port 4000");
})

