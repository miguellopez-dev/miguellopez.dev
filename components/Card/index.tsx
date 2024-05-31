interface Props {
    title: string;
    description: string;
    imageUrl?: string;
    className?: string;
    style?: React.CSSProperties;
}

const Card = ({ title, description, imageUrl, className, style }: Props) => {
    return (
        <div
            className={`bg-white shadow-md border border-gray-200 rounded-lg max-w-sm lg:h-min w-96 shadow-mediumPurple hover:shadow-lg hover:shadow-mediumPurple ${className}`}
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
                <div className='font-bold text-xl mb-2'>{title}</div>
                <p className='text-gray-700 text-base'>{description}</p>
            </div>
            <div className='px-6 pt-4 pb-2'>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                    React
                </span>
            </div>
        </div>
    );
};

export default Card;
