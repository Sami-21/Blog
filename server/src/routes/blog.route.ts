import { CreateNewPost, DeleteUniquePost, GetAllPosts, GetUniquePost, ModifyUniquePost } from '@/controllers/blog.controller';
import express from 'express';

const BlogRoute: express.Router = express.Router();

BlogRoute.post('/blog', CreateNewPost);

BlogRoute.get('/blog', GetAllPosts);

BlogRoute.get('/blog/:id', GetUniquePost);

BlogRoute.patch('/blog/:id', ModifyUniquePost);

BlogRoute.delete('/blog/:id', DeleteUniquePost);

export default BlogRoute;
