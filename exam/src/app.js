import  express from "express";
import morgan  from "morgan";



import citeRoutes from "./routes/task";

const cors = require('cors');


const app = express();


app.use(cors());

app.use(morgan('dev'));

app.use(express.json())

app.use(citeRoutes);




export default app;