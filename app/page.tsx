'use client';
import { SiMinutemailer } from 'react-icons/si';
import Image from 'next/image';
import Socials from '@/components/Socials';
import { motion } from 'framer-motion';
import {
    pageVariants,
    pageTransition,
} from '@/components/animations/pageAnimations';

export default function HomePage() {
    return (
        <motion.div
            initial='initial'
            animate='in'
            exit='out'
            variants={pageVariants}
            transition={pageTransition}
        >
            <main className='flex min-h-screen flex-col items-center space-y-10  py-10 relative '>
                <div className='absolute right-0 top-0 -z-10'>
                    <Image
                        src='/images/wolf-head-bg-large.png'
                        alt='Wolf Head'
                        width={300}
                        height={400}
                        sizes='(max-width: 1128px) 20vw,'
                    />
                </div>
                <div className='flex flex-col items-center  space-y-6'>
                    <h1 className='text-4xl lg:text-7xl'>
                        Hi, I&apos;m Miguel Lopez
                    </h1>
                    <h2 className='text-2xl lg:text-5xl'>
                        Full Stack Developer
                    </h2>
                </div>
                <div className='w-10/12 md:w-2/3 lg:w-3/5 xl:w-1/2'>
                    <p className='text-justify text-l lg:text-2xl'>
                        As a proficient developer with expertise in React,
                        Python, and WordPress, I bring a blend of aesthetic
                        design and technical skill to every project. My passion
                        for crafting seamless user experiences and robust
                        applications is evident in my work, ranging from dynamic
                        appointment scheduling apps to engaging administrative
                        dashboards. Let&apos;s build something amazing together.
                        Explore my portfolio to see how I turn ideas into
                        digital realities.
                    </p>
                </div>

                <Socials />
                <div>
                    <a
                        className='bg-ctaGreen text-darkBlue flex items-center text-xl justify-center font-bold py-4 px-5 rounded hover:bg-darkBlue hover:text-mediumPurple hover:border hover:border-mediumPurple transition-colors duration-300'
                        href='mailto:hello@miguellopez.dev'
                    >
                        <SiMinutemailer className='text-2xl mr-2' />
                        Send me a message
                    </a>
                </div>
            </main>
        </motion.div>
    );
}
