
const Card = ({ children, className, ...props }) => {
    return (
        <div
            className={`bg-white rounded-lg shadow-lg overflow-hidden ${className}`} data-aos="fade-up"
            {...props}
        >
            {children}
        </div>
    );
};

export default Card