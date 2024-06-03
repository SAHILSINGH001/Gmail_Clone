import express from 'express';
import Connection from './database/db.js';
import routes from './routes/route.js';
//cors ka main kam hota ha data ko different server ma share karna jasa front end sa backend ma data share karna ha vo sab.
import cors from 'cors';
const app=express();

app.use(cors());
//api ki body ko handle karna ha 
app.use(express.urlencoded({extended:true}));
app.use(express.json({extended:true}));
//routes ko express ka andar initialize karna padega
app.use('/',routes);

const PORT=8000;
Connection()

app.listen(PORT,()=>console.log(`server is started at port no:${PORT}`));
