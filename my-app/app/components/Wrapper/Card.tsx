type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  key?: CardKey;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
export type CardKey = string | number;

const Card = ({ children, onClick, style }: CardProps) => {
  return (
    <article
      style={style}
      className="border border-white rounded-xl p-3 h-56"
      onClick={onClick}>
      {children}
    </article>
  );
};

export default Card;
