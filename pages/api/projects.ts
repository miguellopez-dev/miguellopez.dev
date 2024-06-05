import type { NextApiRequest, NextApiResponse } from 'next';
import pool from './db';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'GET') {
        try {
            const query = `
            SELECT
                p.ProjectID,
                p.Title,
                p.Description,
                p.ImageUrl,
                p.VideoUrl,
                p.LiveUrl,
                p.GithubUrl,
                GROUP_CONCAT(t.Name ORDER BY t.Name SEPARATOR ', ') AS Technologies
            FROM
                Projects p
            LEFT JOIN
                ProjectTechnologies pt ON p.ProjectID = pt.ProjectID
            LEFT JOIN
                Technologies t ON pt.TechnologyID = t.TechnologyID
            GROUP BY
                p.ProjectID
        `;
            const [projects] = await pool.query(query);
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ message: 'Methos Not Allowed' });
        }
    }
}
