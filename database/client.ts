import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected.');
    return true;
  }

  try {
    await mongoose.connect(
      'mongodb+srv://threads-admin-273:ZqYTWpIJaIBV1JAL@docker-kube.oird7w5.mongodb.net/?retryWrites=true&w=majority&appName=docker-kube'
    );
    console.log('Connected to MongoDB.');
    return true;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    return false;
  }
};

export default connectDB;
