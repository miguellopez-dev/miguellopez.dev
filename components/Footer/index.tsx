import Socials from '../Socials';

const Footer = () => {
    return (
        <footer>
            <div className='mx-auto w-1/2 flex flex-col items-center p-4 space-y-4'>
                <h3 className='uppercase'>Send A Message</h3>
                <a
                    href={`mailto: 'hello@miguellopez.dev'`}
                    className='text-ctaGreen hover:text-mediumPurple'
                >
                    hello@miguellopez.dev
                </a>
                <Socials />
                <p>copyright @ 2024 miguellopez.dev</p>
            </div>
        </footer>
    );
};

export default Footer;
