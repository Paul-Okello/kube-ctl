import React from 'react';
import PostForm from './post-form';
import { getPosts } from '@/_actions/post-action';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';
import Posts from './Posts';

type Props = {};

type DbPost = {
  id: string;
  title: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
};

async function HomePage({}: Props) {
  const posts = (await getPosts()) as DbPost[];
  console.log('posts', posts);

  return (
    <main className='container'>
      <h1 className='text-center text-3xl'>Docker + Kubernates + MongoDb</h1>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Posts />
        <PostForm />
      </div>
    </main>
  );
}

export default HomePage;
