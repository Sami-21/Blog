import { CreateNewPost, DeleteUniquePost, GetAllPosts, GetUniquePost, ModifyUniquePost } from '@/controllers/blog.controller';
import express from 'express';

const blogRoute: express.Router = express.Router();

blogRoute.post('/blog', CreateNewPost);

blogRoute.get('/blog', GetAllPosts);

blogRoute.get('/blog/:id', GetUniquePost);

blogRoute.patch('/blog/:id', ModifyUniquePost);

blogRoute.delete('/blog/:id', DeleteUniquePost);

export default blogRoute;
