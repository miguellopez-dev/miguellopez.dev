import type { NextApiRequest, NextApiResponse } from 'next';
import pool from './db';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const [projects] = await pool.query('SELECT * FROM Projects');
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ message: 'Methos Not Allowed' });
        }
    }
}
