import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imagesURL: [
      {
        type: String,
      },
    ],
    user_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const ProjectModel = mongoose.model('Project', projectSchema);

export default ProjectModel;
