 
const mongoose=require("mongoose");

const DB="mongodb+srv://Uttam1437:Uttam1437@cluster0.q1rz03l.mongodb.net/ecom?retryWrites=true&w=majority";
mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("DataBase Connected ")).catch((errr)=>{
    console.log(errr)
})                