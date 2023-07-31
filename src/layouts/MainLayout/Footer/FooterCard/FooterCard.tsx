import React, { ReactNode } from 'react';
import './footer_card.scss';

interface FooterCardProps {
  title: string;
  children: ReactNode;
}

const FooterCard: React.FC<FooterCardProps> = ({ title, children }) => {
  return (
    <div className="footer_card_wrapper">
      <h6 className="footer_card_title">{title}</h6>
      {children}
    </div>
  );
};

export default FooterCard;
