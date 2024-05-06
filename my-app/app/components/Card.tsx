import React from "react";

type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <article className="border border-white rounded-xl p-3 h-56">
      {children}
    </article>
  );
};

export default Card;
