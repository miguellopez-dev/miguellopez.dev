import Link from 'next/link';
import Logo from './Logo';

const Navbar = ({ toggle }: { toggle: () => void }) => {
    return (
        <nav className='flex items-center justify-between flex-wrap p-6 px-20'>
            <Logo />
            <button
                type='button'
                className='inline-flex items-center lg:hidden'
                onClick={toggle}
            >
                {/* Menu icon */}
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='40'
                    height='40'
                    viewBox='0 0 24 24'
                >
                    <path
                        fill='#fff'
                        d='M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z'
                    />
                </svg>
            </button>
            <div className='w-full block hidden lg:flex lg:items-center lg:w-auto'>
                <div className='text-sm lg:flex-grow text-teal-200'>
                    <Link
                        href='/'
                        className='block mt-4 lg:inline-block lg:mt-0  hover:text-mediumPurple mr-4'
                    >
                        Home
                    </Link>
                    <Link
                        href='/projects'
                        className='block mt-4 lg:inline-block lg:mt-0  hover:text-mediumPurple mr-4'
                    >
                        Projects
                    </Link>
                    <Link
                        href='/technology'
                        className='block mt-4 lg:inline-block lg:mt-0  hover:text-mediumPurple mr-4'
                    >
                        Technology
                    </Link>
                    <Link
                        href='/contact'
                        className='block mt-4 lg:inline-block lg:mt-0  hover:text-mediumPurple'
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
