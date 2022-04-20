process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import AuthRoute from './routes/Auth.route';
import BlogRoute from './routes/blog.route';
import PortfolioRoute from './routes/porfolio.route';
// import Grid from 'gridfs-stream';
import { dbConnection } from './databases/index';
import bodyParser from 'body-parser';

//Server initialized

const app: express.Application = express();

//getting environment variables

dotenv.config();

//middlewares

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.raw());

app.use(cors());

//Connection to DataBase + using Gridfs
export let gfs;
mongoose
  .connect(dbConnection.url, dbConnection.options)
  .then(() => {
    console.log('connection successful');
  })
  .catch(err => console.log(err));

// const conn = mongoose.connection;

// conn.once('open', () => {
//   gfs = Grid(conn, mongoose.mongo);
//   gfs.collection('projects');
// });

// AuthRoutes ('/login'  , '/signup')

app.use(AuthRoute);

// BlogRoute ( '/blog')

app.use(BlogRoute);

// PortfolioRoute ( '/blog')

app.use(PortfolioRoute);

//main route or whatever

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('sent to the client');
  console.log('logged in the console');
});

app.listen(process.env.PORT, () => {
  console.log(`server is up and running on port ${process.env.PORT}`);
});
