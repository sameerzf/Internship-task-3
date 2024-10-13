const express = require('express');
const app = express();
const {connect} = require('mongoose')
const cors  = require('cors');
const AllRoutes = require('./routes/AllRoutes')
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
app.use(cors({credentials:true,origin:"http://localhost:5173"}));
app.use('/api',AllRoutes);





connect(mongoURI
).then(
app.listen(5000,()=>{
    console.log("app is running on port 5000")
}))
