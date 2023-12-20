const express = require("express")
const path = require("path")
const PORT = 4000

const app = express()

app.get("/",(req,res)=>{

    res.sendFile(path.join(__dirname,"index.html"))
})

app.listen(PORT,()=>{
    console.log(`Server is listne on http://localhost:${PORT}`);
})