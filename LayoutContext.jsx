import { createContext, useContext, useState } from 'react';

const LayoutContext = createContext();

export function LayoutProvider({ children }) {
  const [navStatus, setNavStatus] = useState('STANDBY');
  const [timerText, setTimerText] = useState('00:00');
  
  return (
    <LayoutContext.Provider value={{ navStatus, setNavStatus, timerText, setTimerText }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayout() {
  return useContext(LayoutContext);
}
