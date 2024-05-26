import connectDB from '@/database/client';
import PostModel from '@/database/postModel';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectDB();
  try {
    const data = await PostModel.find().sort({
      updatedAt: -1,
    });
    return NextResponse.json({
      data,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      data: 'error',
    });
  }
}
