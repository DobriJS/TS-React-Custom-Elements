import { ReactNode, createContext, useState, useEffect } from 'react';

interface NavigationContextProps {
  currentPath: string;
  navigate: (to: string) => void;
}

const NavigationContext = createContext({
  currentPath: '',
  navigate: (to: string) => window.history.pushState({}, '', to)
} as NavigationContextProps);

function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);
    return () => {
      window.removeEventListener('popstate', handler);
    };
  }, []);

  const navigate = (to: any) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  };

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };

export default NavigationContext;
