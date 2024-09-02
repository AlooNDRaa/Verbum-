import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;


interface DecodedToken {
  userId: number;
  email: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, secretKey as string, (err, user) => {
    if (err || !user) return res.sendStatus(403);
    (req as any).user = user as DecodedToken;
    next();
  });
};
