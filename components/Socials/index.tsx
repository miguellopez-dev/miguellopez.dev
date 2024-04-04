import { HiOutlineDocumentText } from 'react-icons/hi2';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';

const Socials = () => {
    return (
        <div className='flex space-x-4  text-2xl'>
            <HiOutlineDocumentText className='transistion-colors duration-300 hover:text-ctaGreen ' />
            <SlSocialLinkedin className='transistion-colors duration-300  hover:text-ctaGreen ' />
            <FiGithub className='transistion-colors duration-300 hover:text-ctaGreen ' />
            <MdAlternateEmail className='transistion-colors duration-300 hover:text-ctaGreen ' />
        </div>
    );
};

export default Socials;
