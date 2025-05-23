
const CardContent = ({ children, className, ...props }) => {
    return (
        <div className={`p-4 ${className}`} {...props} data-aos="fade-up">
            {children}
        </div>
    );
};

export default CardContent