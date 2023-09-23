import mongoose from 'mongoose';


// TODO: To add validations in email & phone fields.

const EmployeeModel: mongoose.Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    default: '',
    maxLength: 55,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
    maxLength: 55,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
    maxLength: 10,
  }
}, { timestamps: true });

export default EmployeeModel;

