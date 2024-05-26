import express from "express";
import bodyParser from "body-parser";


const app= express();
const port = 3000;
const masterKey = "sjchisljkzdcz.scnj";

app.use(bodyParser.urlencoded({extended:true}));

app.get("/task", (req,res) =>{
    res.json(todoTask);
});

app.get("/task/:id", (req,res) =>{
    const id= parseInt(req.params.id);
    const foundTask  = todoTask.find((item) => item.id === id);
    res.json(foundTask);
});



app.post("/task", (req,res)=>{
    const newTask={
        id:todoTask.length+1,
        task:req.body.task,
    };
    todoTask.push(newTask);
    console.log(todoTask.slice(-1));
    res.json(newTask);
});

app.put("/task/:id", (req,res) =>{
    const id= parseInt(req.params.id);
    const replacementTask ={
        id:id,
        task:req.body.task,
    };

    const searchIndex = todoTask.findIndex((item) => item.id === id);
    todoTask[searchIndex] = replacementTask;
    res.json(replacementTask);
});

app.delete("/task/:id", (req,res) =>{
    const id=parseInt(req.params.id);
    const searchIndex= todoTask.findIndex((item) => item.id === id);
    if(searchIndex>-1){
        todoTask.splice(searchIndex,1);
        res.sendStatus(200);
    }else {
        res.status(404).json({error:`task with id: ${id} not found`})
    }
});

app.listen(port, () =>{
    console.log("Api is running on port 3000")
})


var todoTask = [
  {
    id: 1,
    task: "make food",
  },
  {
    id: 2,
    task: "eat food",
  },
  {
    id: 3,
    task: "buy milk",
  },
  {
    id: 4,
    task: "go for shopping",
  },
  {
    id: 5,
    task: "study",
  },
  {
    id: 6,
    task: "take rest",
  },
];