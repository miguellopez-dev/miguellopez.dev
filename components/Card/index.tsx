interface Props {
    title: string;
    description: string;
    imageUrl?: string;
    className?: string;
}

const Card = ({ title, description, imageUrl, className }: Props) => {
    return (
        <div
            className={`max-w-xs lg:h-96 border border-gray-700 rounded-lg overflow-hidden shadow shadow-mediumPurple hover:shadow-lg hover:shadow-mediumPurple bg-white ${className}`}
        >
            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{title}</div>
                <p className='text-gray-700 text-base'>{description}</p>
            </div>
            <div className='px-6 pt-4 pb-2'>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    React
                </span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    TailwindCSS
                </span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    Next.js
                </span>
            </div>
        </div>
    );
};

export default Card;
