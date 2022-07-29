import mongoose from 'mongoose';

const AccountModel: mongoose.Schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    minLength: 5,
    maxLength: 15,
  },
  hashedPassword: {
    type: String,
    required: true,
    trim: true,
  },
}, { timestamps: true });

export default AccountModel;
