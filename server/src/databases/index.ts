import dotenv from 'dotenv';
dotenv.config();

export const dbConnection = {
  url: `mongodb+srv://${process.env.user}:${process.env.password}@cluster0.tuscg.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
};
