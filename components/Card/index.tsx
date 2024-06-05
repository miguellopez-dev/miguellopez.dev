import { SlGlobe } from 'react-icons/sl';
import { TbBrandGit } from 'react-icons/tb';

interface Props {
    title: string;
    description: string;
    imageUrl?: string;
    liveUrl?: string;
    githubUrl?: string;
    className?: string;
    technologies: string;
    style?: React.CSSProperties;
}

const Card = ({
    title,
    description,
    imageUrl,
    liveUrl,
    githubUrl,
    className,
    technologies,
    style,
}: Props) => {
    return (
        <div
            className={`divide-y divide-altBlue bg-white shadow-md border border-gray-200 rounded-lg max-w-sm lg:h-min w-96 shadow-mediumPurple hover:shadow-lg hover:shadow-mediumPurple ${className}`}
            style={style}
        >
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt={title}
                    className='w-full rounded-t-lg h-48 lg:h-52'
                />
            )}
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2 text-altBlue'>
                    {title}
                </div>
                <p className='text-gray-700 text-base'>{description}</p>
                <div className='flex text-altBlue text-3xl mt-2 space-x-4'>
                    {githubUrl ? (
                        <a
                            href={githubUrl}
                            target='_blank'
                            className='hover:text-mediumPurple'
                        >
                            <TbBrandGit />
                        </a>
                    ) : (
                        <></>
                    )}
                    <a
                        href={liveUrl}
                        target='_blank'
                        className='hover:text-mediumPurple'
                    >
                        <SlGlobe />
                    </a>
                </div>
            </div>
            <div className='px-6 py-2'>
                {technologies && (
                    <div className='flex flex-wrap mt-2'>
                        {technologies.split(', ').map((tech, index) => (
                            <span
                                key={index}
                                className='bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
