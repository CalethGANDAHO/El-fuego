import React, { createContext, useContext, useState, useEffect } from 'react';

const VibeContext = createContext({
  vibe: 'night',
  setVibe: () => {},
  toggleVibe: () => {},
  isOpen: true,
  statusText: ''
});

export function VibeProvider({ children }) {
  const [vibe, setVibe] = useState(() => {
    try {
      const saved = localStorage.getItem('fuego_vibe');
      return saved ? saved : 'night';
    } catch {
      return 'night';
    }
  });

  const [isOpen, setIsOpen] = useState(true);
  const [statusText, setStatusText] = useState("Ouvert maintenant · jusqu'à minuit");

  useEffect(() => {
    const root = document.documentElement;
    if (vibe === 'day') {
      root.classList.add('day');
      root.classList.remove('dark');
    } else {
      root.classList.remove('day');
      root.classList.add('dark');
    }
    try {
      localStorage.setItem('fuego_vibe', vibe);
    } catch {}
  }, [vibe]);

  const toggleVibe = () => {
    setVibe(prev => (prev === 'night' ? 'day' : 'night'));
  };

  useEffect(() => {
    const updateStatus = () => {
      const nowUtc = Date.now() + new Date().getTimezoneOffset() * 60000;
      const cotonouDate = new Date(nowUtc + 3600000);
      const day = cotonouDate.getDay();
      const hour = cotonouDate.getHours();

      const isLateWeekend = (day === 0 || day === 1) && hour < 1;
      const open = (hour >= 9) || isLateWeekend;
      setIsOpen(open);

      if (open) {
        const closing = (day === 5 || day === 6 || day === 0) ? "1h00 du matin" : "minuit";
        setStatusText(`Ouvert maintenant · jusqu'à ${closing}`);
      } else {
        setStatusText("Actuellement fermé · Réouverture à 9h00");
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <VibeContext.Provider value={{ vibe, setVibe, toggleVibe, isOpen, statusText }}>
      {children}
    </VibeContext.Provider>
  );
}

export function useVibe() {
  return useContext(VibeContext);
}
