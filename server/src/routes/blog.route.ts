import ArticleModel from '@/models/article.model';
import express from 'express';

const blogRoute: express.Router = express.Router();

blogRoute.post('/blog', async (req: express.Request, res: express.Response) => {
  const { title, body, author } = req.body;
  try {
    await ArticleModel.create({ title, body, author });
    res.status(200).send('post created with success');
  } catch (error) {
    console.error(error.message);
  }
});

export default blogRoute;
