import { HiOutlineDocumentText } from 'react-icons/hi2';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { IconContext } from 'react-icons';

export default function HomePage() {
    return (
        <div className='flex min-h-screen flex-col items-center space-y-20 p-24'>
            <div className='flex flex-col items-center  space-y-6'>
                <h1 className='text-6xl'>Hi, I'm Miguel Lopez</h1>
                <h2 className='text-4xl'>Full Stack Developer</h2>
            </div>
            <div className='mx-72'>
                <p className='text-justify'>
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
            <div className='flex space-x-4 text-3xl'>
                <HiOutlineDocumentText />

                <SlSocialLinkedin />
                <FiGithub />
                <MdAlternateEmail />
            </div>
            <div>
                <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
                    Send me a message
                </button>
            </div>
        </div>
    );
}
