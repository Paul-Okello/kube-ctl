'use client';

import { getPosts } from '@/_actions/post-action';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useEffect, useState } from 'react';

type Props = {};

type DbPost = {
  id: string;
  title: string;
  description: string;
  updatedAt: Date;
  createdAt: Date;
};

function Posts({}: Props) {
  const [myPosts, setmyPosts] = useState<DbPost[]>([]);
  async function posts() {
    const posts = (await getPosts()) as DbPost[];
    setmyPosts(posts);
    console.log('posts', posts);
  }

  useEffect(() => {
    posts();
  }, []);
  return (
    <ScrollArea className='h-[60vh] border mx-3 rounded-xl p-5'>
      <Label className='text-3xl text-center'>Saved Data</Label>
      <ul className='grid grid-cols-1 md:grid-cols-2 gap-3 mx-4'>
        {myPosts.map((post, index) => (
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
  );
}

export default Posts;
