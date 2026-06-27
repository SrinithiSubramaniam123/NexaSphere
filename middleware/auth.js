import jwt from 'jsonwebtoken';

// Indha middleware dhan protected routes ah secure pannum.
// Frontend, "Authorization: Bearer <token>" header anupanum,
// adha verify pannitu req.userId la set pannum.
const protect = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Not authorized, token illa' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token invalid or expired, please login again' });
  }
};

export default protect;
