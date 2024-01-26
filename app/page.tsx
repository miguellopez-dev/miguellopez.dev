import { HiOutlineDocumentText } from 'react-icons/hi2';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function HomePage() {
    return (
        <div className='flex min-h-screen flex-col items-center space-y-20 p-24'>
            <div className='flex flex-col items-center  space-y-6'>
                <h1 className='text-7xl'>Hi, I'm Miguel Lopez</h1>
                <h2 className='text-5xl'>Full Stack Developer</h2>
            </div>
            <div className='w-100 lg:w-1/2'>
                <p className='text-justify text-xl'>
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
                <HiOutlineDocumentText className='text-2xl transition-colors hover:text-teal-400 duration-300' />
                <SlSocialLinkedin className='text-2xl transition-colors hover:text-teal-400 duration-300' />
                <FiGithub className='text-2xl transition-colors hover:text-teal-400 duration-300' />
                <MdAlternateEmail className='text-2xl transition-colors hover:text-teal-400 duration-300' />
            </div>
            <div>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300'>
                    Send me a message
                </button>
            </div>
        </div>
    );
}
