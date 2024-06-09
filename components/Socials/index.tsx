import { HiOutlineDocumentText } from 'react-icons/hi2';
import { SlSocialLinkedin } from 'react-icons/sl';
import { FiGithub } from 'react-icons/fi';
import { MdAlternateEmail } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';

const Socials = () => {
    return (
        <div className='flex space-x-4  text-2xl'>
            <HiOutlineDocumentText className='transistion-colors duration-300 hover:text-ctaGreen ' />
            <a href='linkedin.com/in/miguel-lopez-tech/' target='_blank'>
                <SlSocialLinkedin className='transistion-colors duration-300  hover:text-ctaGreen ' />
            </a>
            <a href='https://github.com/miguellopez-dev' target='_blank'>
                <FiGithub className='transistion-colors duration-300 hover:text-ctaGreen ' />
            </a>
            <a href='mailto:hello@miguellopez.dev'>
                <MdAlternateEmail className='transistion-colors duration-300 hover:text-ctaGreen ' />
            </a>
        </div>
    );
};

export default Socials;
