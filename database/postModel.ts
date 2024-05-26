import { Schema, model, models, Document, Model } from 'mongoose';

export interface IPost extends Document {
  title: string;
  description: string;
}

interface IPostMethods {
  getPosts(): Promise<IPost[]>;
  createPost(post: IPost): Promise<IPost>;
}

interface IPostStatics {
  getPosts(): Promise<IPost[]>;
}

export interface IPostDocument extends IPost, IPostMethods {}
interface IPostModel extends IPostStatics, Model<IPostDocument> {}

const postSchema: Schema = new Schema<IPostDocument>(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = models.Post || model<IPost>('Post', postSchema);
export default PostModel;
