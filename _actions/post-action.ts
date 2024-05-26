'use server';

import connectDB from '@/database/client';
import PostModel, { IPost } from '@/database/postModel';

export async function getPosts() {
  await connectDB();
  try {
    const data = await PostModel.find().sort({
      updatedAt: -1,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createPost(title: string, description: string) {
  await connectDB();
  try {
    const data = await PostModel.create({
      title,
      description,
    });
    console.log('data', data);
    return JSON.stringify(data);
  } catch (error) {
    console.log(error);
  }
}
