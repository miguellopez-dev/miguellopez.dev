'use client';
import Card from '@/components/Card';
import { motion } from 'framer-motion';
import {
    pageVariants,
    pageTransition,
} from '@/components/animations/pageAnimations';

export default function ProjectsPage() {
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
                <div className='my-4 p-4 gap-6 flex flex-wrap  align-center justify-center lg:grid lg:grid-flow-col lg:gap-10'>
                    <Card title='Project 1' description='A project i made' />
                    <Card
                        className='lg:mt-6'
                        title='Project 2'
                        description='Second Project?'
                    />
                    <Card
                        className='lg:mt-14'
                        title='Project 3'
                        description='third Project?'
                    />
                </div>
            </main>
        </motion.div>
    );
}
