process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import express, { Request, Response } from 'express';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import { User } from './interfaces/users.interface';

validateEnv();

// const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);
const app = express();
const port = 5000;
const dummy_user: User = {
  _id: 'é56414',
  fullname: 'samimaachi',
  email: 'samovitch@gmail.com',
  password: 'password****',
};

app.post('/login', (req: Request, res: Response) => {
  console.log('why the fuck');
  res.status(200).send('fuck');
});

app.listen(port, () => {
  console.log(`I CAN'T BELIEVE WHAT I AM DOING!. MAAAAAAAAAAN THIS THING IS REALLY MESSED UP ${port}`);
});
