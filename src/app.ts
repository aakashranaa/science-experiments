import express from 'express';
import "reflect-metadata";
import { dataSource } from './database/data-source';
import experimentsRouter from './routes/experiments.routers';
import bodyParser from 'body-parser';
import userRouter from './routes/user.router';

dataSource.initialize().then(() => {console.log('connection successful with database')})
                       .catch((err) => {console.log('error in initialising database', err)})

const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/experiments', experimentsRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  return console.log(`The 🚀 express server is listening at http://localhost:${port}`);
});
