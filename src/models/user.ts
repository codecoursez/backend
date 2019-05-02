import mongoose from 'mongoose';
import Joi from 'joi';

export enum roles {
  ADMIN = "ADMIN",
  PROBLEM_SETTER = "PROBLEM_SETTER",
  USER = "USER"
}

let rolesArr: string[] = [];
for (let role in roles) {
  rolesArr.push(role);
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: roles,
    default: roles.USER
  }
});

export function validateUser(user: any) {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(3).max(50).required().email({ minDomainAtoms: 2 }),
    password: Joi.string().min(6).max(50).required(),
    role: Joi.string().valid(...rolesArr)
  };

  return Joi.validate(user, schema);
}

export const User = mongoose.model("User", userSchema);