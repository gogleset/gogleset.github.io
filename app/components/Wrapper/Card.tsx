type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
  key?: CardKey;
  onClick?: React.MouseEventHandler<HTMLElement>;
};
export type CardKey = string | number;

const Card = ({ children, onClick, style, key }: CardProps) => {
  return (
    <div
      key={key}
      style={style}
      className="rounded-xl p-3 h-56 bg-base-300"
      onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
// 17px 17px 25px 0px #EBEBEB
