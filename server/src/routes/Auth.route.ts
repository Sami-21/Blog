import express from 'express';
import { Signup_Controller, Login_Controller } from '@/controllers/Auth.controller';

const AuthRoute: express.Router = express.Router();

AuthRoute.post('/login', Login_Controller);

AuthRoute.post('/signup', Signup_Controller);

export default AuthRoute;
