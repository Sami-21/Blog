import express from 'express';
import ArticleModel from '@/models/article.model';

// New Post Creation Handler
export const CreateNewPostHandler = async (req: express.Request, res: express.Response) => {
  const { title, body, author } = req.body;
  try {
    await ArticleModel.create({ title, body, author });
    res.status(200).send('post created with success');
  } catch (error) {
    console.error(error.message);
  }
};
// Getting all post of a certain user Handler
export const GetAllPostsHandler = async (req: express.Request, res: express.Response) => {
  const { author } = req.body;
  try {
    const UserPosts = await ArticleModel.find({ author });
    if (UserPosts.length !== 0) {
      res.status(200).json(UserPosts);
    } else throw 'You did not publish any posts';
  } catch (error) {
    res.status(400).send(error);
  }
};
// Getting a unique post Handler
export const GetUniquePostHandler = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const post = await ArticleModel.findById(id);
    if (post) res.status(200).json(post);
    else throw 'post not found';
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
// Modify unique post Handler
export const UpdateUniquePostHandler = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const { title, body } = req.body;
    const post = await ArticleModel.findOneAndUpdate({ _id: id }, { title: title, body: body }, { new: true });
    if (post) res.status(200).json(post);
    else throw 'post not found';
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
// delete unique post Handler
export const DeleteUniquePostHandler = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const PostExist = await ArticleModel.findById(id);
    if (PostExist) PostExist.delete();
    else throw 'post not found';
    res.status(200).send('post deleted with success');
  } catch (error) {
    res.status(400).send(error);
  }
};
