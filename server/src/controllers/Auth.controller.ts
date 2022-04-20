import express from 'express';
import UserModel from '@/models/users.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const Signup_Controller = async (req: express.Request, res: express.Response) => {
  // sent data from front-end
  const { FullName, email, password } = req.body;

  try {
    // verifying if the user exists
    const UserExist = await UserModel.findOne({ email: email });

    // Throw Error if yes
    if (UserExist) throw `this email ${email} is already registered`;

    // Hashing the password
    const HashedPassword: string = await bcrypt.hash(password, 10);

    // New user created
    const newUser = await UserModel.create({ FullName: FullName, email: email, password: HashedPassword });
    const data = {
      date: Date(),
      userId: newUser._id,
    };
    const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
    res.cookie('token', token, { maxAge: 9000, httpOnly: true });

    // Response sent status 200
    res.send(`new user created ,welcome ${newUser.FullName} your token is ${req.cookies}`);
  } catch (error) {
    // Catching Errors
    res.send(error);
  }
};
export const Login_Controller = async (req: express.Request, res: express.Response) => {
  // sent data from front-end
  const { email, password } = req.body;

  try {
    // verifying if the user exists
    const UserExist = await UserModel.findOne({ email: email });
    // If yes verify password
    if (UserExist) {
      const check = await bcrypt.compare(password, UserExist.password);
      //If password correct send Response status 200
      if (check) {
        const data = {
          date: Date(),
          userId: UserExist._id,
        };
        const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
        res.cookie('token', token, { maxAge: 9000, httpOnly: true });
        res.status(200).send(`welcome ${UserExist.FullName}`);
        // Throw Error if no
      } else throw 'incorrect password';
      // Throw Error if no
    } else throw 'this email is not registered yet';
  } catch (error) {
    res.send(error);
  }
};
