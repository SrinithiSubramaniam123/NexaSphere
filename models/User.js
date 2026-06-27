import mongoose from 'mongoose';

// Indha schema dhan MongoDB Compass la "users" collection ah create pannum.
// Compass open panni "nexasphere" database -> "users" collection la
// neenga indha documents ah pakka mudiyum.
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
      // password select: false -> default queries la password field varathu,
      // explicit ah .select('+password') pannumbothu mattum varum (login time)
      select: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
