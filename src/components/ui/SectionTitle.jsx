import './SectionTitle.css';

const SectionTitle = ({
  eyebrow,
  title,
  highlight,
  description,
  align = 'left',
  size = 'lg',
  className = '',
}) => {
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="gradient-text">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`section-title section-title-${align} ${className}`}>
      {eyebrow && <span className="tag section-eyebrow">{eyebrow}</span>}
      <h2 className={`section-heading section-heading-${size}`}>
        {renderTitle()}
      </h2>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
