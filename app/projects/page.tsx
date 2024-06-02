'use client';
import React, { useEffect, useState } from 'react';
import Card from '@/components/Card';
import { motion } from 'framer-motion';
import {
    pageVariants,
    pageTransition,
} from '@/components/animations/pageAnimations';

type Project = {
    ProjectId: number;
    Title: string;
    Description: string;
    ImageUrl: string;
    VideoUrl?: string;
    LiveUrl?: string;
    GithubUrl?: string;
};

export default function ProjectsPage() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('api/projects')
            .then((response) => response.json())
            .then((data) => setProjects(data))
            .catch((error) => console.error('Error fetching projects:', error));
    }, []);

    return (
        <motion.div
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
        >
            <main className='w-3/4 m-auto my-4 flex min-h-screen flex-col items-center space-y-10  py-10 relative '>
                <h1 className='text-center text-4xl'>Projects</h1>
                <div className='my-4 p-4 gap-6 flex flex-wrap  align-center justify-center lg:grid md:grid-cols-2 xl:grid-cols-3 lg:gap-16'>
                    {projects.map((project, index) => (
                        <Card
                            key={project.ProjectId}
                            title={project.Title}
                            description={project.Description}
                            imageUrl={'/images/' + project.ImageUrl + '.png'}
                            liveUrl={project.LiveUrl}
                            githubUrl={project.GithubUrl}
                            className={`mt-${index * 10}`}
                            style={{ marginTop: `${index * 40}px` }}
                        />
                    ))}
                </div>
            </main>
        </motion.div>
    );
}
