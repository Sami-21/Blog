import {
  CreateNewPostHandler,
  DeleteUniquePostHandler,
  GetAllPostsHandler,
  GetUniquePostHandler,
  UpdateUniquePostHandler,
} from '@/controllers/blog.controller';
import express from 'express';

const BlogRoute: express.Router = express.Router();

BlogRoute.post('/blog', CreateNewPostHandler);

BlogRoute.get('/blog', GetAllPostsHandler);

BlogRoute.get('/blog/:id', GetUniquePostHandler);

BlogRoute.patch('/blog/:id', UpdateUniquePostHandler);

BlogRoute.delete('/blog/:id', DeleteUniquePostHandler);

export default BlogRoute;
