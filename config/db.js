import mongoose from 'mongoose';

// Idhu MongoDB Compass / local MongoDB ku connect aagum.
// Compass la pakkanumna, same MONGODB_URI (.env file la irukku) Compass la
// "New Connection" -> paste pannitu "Connect" click pannunga.
const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/nexasphere';

    await mongoose.connect(uri);

    console.log('✅ MongoDB connected successfully');
    console.log(`   Database: ${mongoose.connection.name}`);
    console.log(`   Host: ${mongoose.connection.host}:${mongoose.connection.port}`);
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
