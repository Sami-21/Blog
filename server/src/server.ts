process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

// import 'dotenv/config';
// import App from '@/app';
// import AuthRoute from '@routes/auth.route';
// import IndexRoute from '@routes/index.route';
// import UsersRoute from '@routes/users.route';
// import validateEnv from '@utils/validateEnv';

// validateEnv();

// const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import AuthRoute from './routes/Auth.route';
import blogRoute from './routes/blog.route';
import { dbConnection } from './databases/index';

//Server initialized

const app: express.Application = express();

//getting environment variables

dotenv.config();

//middlewares

app.use(express.json());

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
  res.send('WTF IS THIS SHITTY SERVER');
});

app.listen(process.env.PORT, () => {
  console.log(`server is up and running on port ${process.env.PORT}`);
});
