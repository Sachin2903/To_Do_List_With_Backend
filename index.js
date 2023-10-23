const dbConnect=require("./mongodb");
const express=require("express");
const app=express();

app.use(express.json());

app.get("/",async(req,res)=>{
    let data=await dbConnect();
    data=await data.find({}).toArray()
    res.send(data)
})
app.post("/insertone",async(req,res)=>{
    let coll=await dbConnect();
    console.log(req.body);
    let result =await coll.insertOne(req.body)
    res.status(200).send(result)
})
app.patch("/updatestatus",async(req,res)=>{
    let coll=await dbConnect();
    let result =await coll.updateOne({"_id":req.body.taskId},{$set:{taskStatus:req.body.taskStatus}})
    res.status(200).send(result)
})
app.delete("/deleteone",async(req,res)=>{
    let coll=await dbConnect();
    let result =await coll.deleteOne({"_id":req.body.taskId})
    res.status(200).send(result)
})

app.listen(5100)