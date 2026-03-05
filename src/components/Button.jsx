const Button = ({ children, className, disabled, onClick }) => {
    // now, as this is a prop, it is a regular property on a regular button
    return (
        <button
          className={className}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      );
}
 
export default Button;