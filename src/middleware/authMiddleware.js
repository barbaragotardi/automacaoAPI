const userService = require('../services/userService');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token não fornecido' });

  const user = userService.verifyToken(token);
  if (!user) return res.status(403).json({ error: 'Token inválido' });

  req.user = user;
  next();
}

module.exports = authenticateToken;