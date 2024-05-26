'use server';

import connectDB from '@/database/client';
import PostModel, { IPost } from '@/database/postModel';
import { title } from 'process';

export async function getPosts() {
  try {
    await connectDB();
    const data = await PostModel.find();
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
