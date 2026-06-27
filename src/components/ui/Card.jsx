import './Card.css';

const Card = ({
  children,
  variant = 'default',
  hover = true,
  glow = false,
  className = '',
  onClick,
  style,
}) => {
  return (
    <div
      className={`card card-${variant} ${hover ? 'card-hover' : ''} ${glow ? 'card-glow' : ''} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
