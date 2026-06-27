import './Button.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  onClick,
  href,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  const classes = `btn btn-${variant} btn-${size} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </>
  );

  if (href) {
    return <a href={href} className={classes}>{content}</a>;
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
