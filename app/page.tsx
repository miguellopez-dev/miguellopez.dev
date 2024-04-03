import { HiOutlineDocumentText } from 'react-icons/hi2';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';
import Image from 'next/image';

export default function HomePage() {
    return (
        <div className='flex min-h-screen flex-col items-center space-y-10  py-10 relative'>
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
                <h1 className='text-4xl lg:text-7xl'>Hi, I'm Miguel Lopez</h1>
                <h2 className='text-2xl lg:text-5xl'>Full Stack Developer</h2>
            </div>
            <div className='w-10/12 md:w-2/3 lg:w-3/5 xl:w-1/2'>
                <p className='text-justify text-l lg:text-2xl'>
                    As a proficient developer with expertise in React, Python,
                    and WordPress, I bring a blend of aesthetic design and
                    technical skill to every project. My passion for crafting
                    seamless user experiences and robust applications is evident
                    in my work, ranging from dynamic appointment scheduling apps
                    to engaging administrative dashboards. Let's build something
                    amazing together. Explore my portfolio to see how I turn
                    ideas into digital realities.
                </p>
            </div>

            <div className='flex space-x-4'>
                <HiOutlineDocumentText className='text-2xl transition-colors hover:text-ctaGreen duration-300' />
                <SlSocialLinkedin className='text-2xl transition-colors hover:text-ctaGreen duration-300' />
                <FiGithub className='text-2xl transition-colors hover:text-ctaGreen duration-300' />
                <MdAlternateEmail className='text-2xl transition-colors hover:text-ctaGreen duration-300' />
            </div>
            <div>
                <button className='bg-ctaGreen text-darkBlue flex items-center text-xl justify-center font-bold py-4 px-5 rounded hover:bg-darkBlue hover:text-mediumPurple hover:border hover:border-mediumPurple transition-colors duration-300'>
                    <SiMinutemailer className='text-2xl mr-2' />
                    Send me a message
                </button>
            </div>
        </div>
    );
}
