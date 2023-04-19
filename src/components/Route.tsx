import { useContext, ReactNode } from 'react';
import NavigationContext from '../context/NavigationContext';

interface RouteProps {
  path: string;
  children: ReactNode;
}

const Route: React.FC<RouteProps> = ({ path, children }) => {
  const { currentPath } = useContext(NavigationContext);

  if (path === currentPath) {
    return <>{children}</>;
  }
  return null;
};

export default Route;
