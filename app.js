const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors())

app.get("/", cors(),(req, res)=>{

})

//For login
app.post("/", async(req,res)=>{
    const{email,password} = req.body

    try{
        const check= await collection.findOne({email:email})

        if(check){
            res.json("Email exists")
        }
        else {
            res.json("Does not exist")
        }


    }catch(e) {
        res.json("Does not exist")
    }
})

//For register
app.post("/register", async(req,res)=>{
    const{email,password} = req.body

    const data={email:email, password:password}
    try{
        const check= await collection.findOne({email:email})

        if(check){
            res.json("Email exists")
        }
        else {
            res.json("Does not exist")
            await collection.insertMany([data])
        }


    }catch(e) {
        res.json("Does not exist")
    }
})


app.listen(8000, ()=>{
    console.log("Port connected")
})