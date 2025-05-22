
const Button = ({ children, className, ...props }) => {
    return (
        <button
            className={`px-4 py-2 font-medium rounded-lg shadow-md transition-transform transform hover:scale-105 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button