import React from 'react';
import PostForm from './post-form';
import { getPosts } from '@/_actions/post-action';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Label } from '@/components/ui/label';

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
        <ScrollArea className='h-[60vh] border mx-3 rounded-xl p-5'>
          <Label className='text-3xl text-center'>Saved Data</Label>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 mx-4'>
            {posts.map((post, index) => (
              <li
                className='flex justify-start items-center space-x-2 border rounded-xl p-3'
                key={post.id}
              >
                <p>{index + 1}</p>
                <div className='flex flex-col'>
                  <h2>{post.title}</h2>
                  <p>{post.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </ScrollArea>

        <PostForm />
      </div>
    </main>
  );
}

export default HomePage;
