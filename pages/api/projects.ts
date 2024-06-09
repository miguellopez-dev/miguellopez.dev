import type { NextApiRequest, NextApiResponse } from 'next';
import pool from './db';
import { RowDataPacket } from 'mysql2';

// Define a type for the project structure expected in the response
interface Project extends RowDataPacket {
    ProjectID: number;
    Title: string;
    Description: string;
    ImageUrl: string;
    VideoUrl?: string;
    LiveUrl?: string;
    GithubUrl?: string;
    Technologies: string; // Assume this is a concatenated string
}

interface ErrorResponse {
    message: string;
    error?: string;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Project> | ErrorResponse>
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
            const [results] = await pool.query<RowDataPacket[]>(query);
            const projects = results as Project[]; // Cast the results to Project[]
            res.status(200).json(projects);
        } catch (error: any) {
            console.error('Failed to fetch projects:', error);
            res.status(500).json({
                message: 'Internal Server Error',
                error: error?.message || 'Unknown error',
            });
        }
    } else {
        res.status(405).json({ message: 'HTTP Method Not Supported' });
    }
}
