import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Navbar = ({ toggle }: { toggle: () => void }) => {
    const pathname = usePathname();

    const baseClasses: string =
        'block mt-4 lg:inline-block lg:mt-0  hover:text-mediumPurple mr-4 transition-all duration-300';

    const active: string = 'text-mediumPurple border-b border-mediumPurple';
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
                        className={`${baseClasses} ${
                            pathname === '/' ? active : ''
                        }`}
                    >
                        Home
                    </Link>
                    <Link
                        href='/projects'
                        className={`${baseClasses} ${
                            pathname === '/projects' ? active : ''
                        }`}
                    >
                        Projects
                    </Link>
                    <Link
                        href='/technology'
                        className={`${baseClasses} ${
                            pathname === '/technology' ? active : ''
                        }`}
                    >
                        Technology
                    </Link>
                    <Link
                        href='/contact'
                        className={`${baseClasses} ${
                            pathname === '/contact' ? active : ''
                        }`}
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
