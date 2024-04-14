'use client';
import { motion } from 'framer-motion';
import {
    pageVariants,
    pageTransition,
} from '@/components/animations/pageAnimations';

import {
    TbBrandTypescript,
    TbBrandReact,
    TbBrandNextjs,
    TbBrandJavascript,
    TbBrandTailwind,
    TbBrandHtml5,
    TbBrandCss3,
    TbBrandWordpress,
    TbBrandMysql,
    TbBrandGit,
} from 'react-icons/tb';

export default function TechonolgyPage() {
    return (
        <motion.div
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
        >
            <main className='flex min-h-screen flex-col items-center space-y-10  py-10 relative w-10/12 m-auto '>
                <h1 className='text-4xl'>Technologies Used</h1>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 text-9xl'>
                    <TbBrandTypescript />
                    <TbBrandJavascript />
                    <TbBrandTailwind />
                    <TbBrandReact />
                    <TbBrandNextjs />
                    <TbBrandHtml5 />
                    <TbBrandCss3 />
                    <TbBrandWordpress />
                    <TbBrandMysql />
                    <TbBrandGit />
                </div>
            </main>
        </motion.div>
    );
}
