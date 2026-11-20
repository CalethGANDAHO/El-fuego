import React, { createContext, useContext, useState, useEffect } from 'react';

const VibeContext = createContext();

export function VibeProvider({ children }) {
  // Calcul en direct de l'état d'ouverture (heure locale Cotonou UTC+1)
  const [isOpen, setIsOpen] = useState(true);
  const [statusText, setStatusText] = useState("Ouvert maintenant · jusqu'à minuit");

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
    <VibeContext.Provider value={{ isOpen, statusText }}>
      {children}
    </VibeContext.Provider>
  );
}

export function useVibe() {
  return useContext(VibeContext);
}
