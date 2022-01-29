import { Schema, model, Document } from 'mongoose';
import { article } from '@interfaces/article.interface';

const ArticleSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const ArticleModel = model<article & Document>('Article', ArticleSchema);

export default ArticleModel;
