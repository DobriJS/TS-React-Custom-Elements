import React, { ReactNode } from 'react';
import NavigationContext from '../context/NavigationContext';

interface LinkProps {
  to: string;
  children: ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, children }) => {
  const { navigate } = React.useContext(NavigationContext);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
