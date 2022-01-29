import express from 'express';
import UserModel from '@/models/users.model';
import bcrypt from 'bcrypt';

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
    await UserModel.create({ FullName: FullName, email: email, password: HashedPassword });
    // Response sent status 200
    res.status(200).send('user saved with success');
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
        res.status(200).send(`welcome ${UserExist.FullName}`);
        // Throw Error if no
      } else throw 'incorrect password';
      // Throw Error if no
    } else throw 'this email is not registered yet';
  } catch (error) {
    res.send(error);
  }
};
