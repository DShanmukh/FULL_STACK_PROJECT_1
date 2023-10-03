import express from "express";
import mongoose from "mongoose";
const app = express();
mongoose.connect('mongodb+srv://Shanmukh:Sha9fOMnpU5fAcFm@cluster0.vmo857f.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(() => app.listen(5000))
.then(() =>
console.log("Shanmukh 1")
)
.catch((err) => console.log(err));

app.use("/",(req,res,next) => {
  res.send("HI.....!")
}) 
app.listen(4444)
//backend/api
//localhost:4444/api
