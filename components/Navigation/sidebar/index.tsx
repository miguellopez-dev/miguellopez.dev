import Link from 'next/link';

const Sidebar = ({
    isOpen,
    toggle,
}: {
    isOpen: boolean;
    toggle: () => void;
}): JSX.Element => {
    return (
        <>
            <div
                className='sidebar-container fixed w-full h-full overflow-hidden justify-center bg-altBlue-700 grid pt-[120px] left-0 z-10 transition-all duration-500'
                style={{
                    opacity: `${isOpen ? '1' : '0'}`,
                    top: `${isOpen ? '0' : '-100vh'}`,
                }}
            >
                <button className='absolute right-0 p-5 px-20' onClick={toggle}>
                    {/* Close icon */}
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='48'
                        height='48'
                        viewBox='0 0 24 24'
                    >
                        <path
                            fill='currentColor'
                            d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z'
                        />
                    </svg>
                </button>
                <div className='text-4xl space-y-6'>
                    <Link
                        href='/'
                        className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
                    >
                        Home
                    </Link>
                    <Link
                        href='/projects'
                        className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
                    >
                        Projects
                    </Link>
                    <Link
                        href='/technology'
                        className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4'
                    >
                        Technology
                    </Link>
                    <Link
                        href='/contact'
                        className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white'
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Sidebar;