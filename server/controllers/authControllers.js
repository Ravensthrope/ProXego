import User from '../models/User.models.js';
import jwt from 'jsonwebtoken';

// Age of the cookie in seconds (3 days)
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, 'werqlabsSecret', {
    expiresIn: maxAge,
  });
};

const errHandler = (err) => {
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'Email not found') {
    errors.email = 'Email is not registered';
    return errors;
  }

  // incorrect password
  if (err.message === 'Incorrect password') {
    errors.password = 'Incorrect password';
    return errors;
  }

  // if email already exists
  if (err.code === 11000) {
    errors.email = 'Email already exists';
    return errors;
  }

  // setting error message
  if (err.message.includes('User validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

export async function signup_post(req, res) {
  const { username, email, password } = req.body;

  try {
    const newUser = await User.create({ username, email, password });
    const token = createToken(newUser._id);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
      sameSite: 'Lax',
    });
    res.status(201).json({ newUser: newUser._id, username: newUser.username });
  } catch (err) {
    const errors = errHandler(err);
    res.status(400).json({ errors });
  }
}

export async function login_post(req, res) {
  const { email, password } = req.body;
  console.log('Request Body:', req.body);

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
      sameSite: 'Lax',
    });
    res.status(200).json({ user: user._id, username: user.username });
  } catch (error) {
    console.log('Error:', error.message);
    const errors = errHandler(error);
    res.status(400).json({ errors });
  }
}
