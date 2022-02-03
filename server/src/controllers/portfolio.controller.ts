import express from 'express';
import ProjectModel from '@/models/project.model';
import UserModel from '@/models/users.model';

// New Project creation Handler

export const NewProjectHandler = async (req: express.Request, res: express.Response) => {
  try {
    const { title, description, imagesURL, email } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) throw 'user not registered , please register to proceed';
    const uuid = user._id;
    const newProject = await ProjectModel.create({ title: title, description: description, imagesURL: imagesURL, user_id: uuid });
    res.status(200).json(newProject);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Get Unique User Projects Handler

export const GetUserProjectsHandler = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const UserProjects = await ProjectModel.find({ user_id: id });
    if (!UserProjects) throw 'no projects found';
    res.status(200).json(UserProjects);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get unique Project Handler

export const GetUniqueProjectHandler = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const UserProject = await ProjectModel.findById(id);
    if (!UserProject || UserProject.length === 0) throw 'no project found';
    res.status(200).json(UserProject);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update Unique Project Handler

export const UpdateUniqueProjectHandler = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    const { title, description, imagesURL } = req.body;
    await ProjectModel.findOneAndUpdate({ _id: id }, { title, description, imagesURL });
    res.status(200).send('project updated successfully');
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete Unique Project Handler
export const DeleteUniqueProjectHandler = async (req: express.Request, res: express.Response) => {
  try {
    const id = req.params.id;
    await ProjectModel.findOneAndDelete({ _id: id });
    res.status(200).send('project deleted successfully');
  } catch (error) {
    res.status(400).send(error);
  }
};
