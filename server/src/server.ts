process.env['NODE_CONFIG_DIR'] = __dirname + '/configs';

import 'dotenv/config';
import express from 'express';
import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

// const app = new App([new IndexRoute(), new UsersRoute(), new AuthRoute()]);
const app = express();
const port = 5000;

app.listen(port, () => {
  console.log(`I CAN'T BELIEVE WHAT I AM DOING!. MAAAAAAAAAAN THIS THING IS REALLY MESSED UP ${port}`);
});
