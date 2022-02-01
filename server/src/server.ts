process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import AuthRoute from './routes/Auth.route';
import blogRoute from './routes/blog.route';
import { dbConnection } from './databases/index';

//Server initialized

const app: express.Application = express();

//getting environment variables

dotenv.config();

//middlewares

app.use(express.json());
app.use(cookieParser());

//Connection to DataBase

mongoose
  .connect(dbConnection.url, dbConnection.options)
  .then(() => console.log('connection successful'))
  .catch(err => console.log(err));

// AuthRoutes ('/login'  , '/signup')

app.use(AuthRoute);

// BlogRoute ( '/blog')

app.use(blogRoute);

//main route or whatever

app.get('/', (req: express.Request, res: express.Response) => {
  res.cookie('test', 21212121, { maxAge: 999999, httpOnly: true });
  res.send('madafakin');
  console.log('madafak');
});

app.listen(process.env.PORT, () => {
  console.log(`server is up and running on port ${process.env.PORT}`);
});
