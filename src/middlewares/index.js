import { NextApiRequest, NextApiResponse } from 'next';
import { verifyJwt } from './verifyJwt';

export const authenticated = (fn) => async (req, res) => {
  try {
    const token = req.headers.authorization ;
    if (!token) {
      throw new Error();
    }
    const decoded = await verifyJwt(token);
    req.user = decoded;
    return await fn(req, res);
  } catch (error) {
    res.status(401).json({ message: 'Unauthenticated' });
  }
};