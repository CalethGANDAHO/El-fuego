import React, { useState } from 'react';
import { X, Lock } from 'lucide-react';
import AdminDashboardView from './AdminDashboardView';
import { RESTAURANT_CONFIG } from '../../data/restaurant.config';

export default function AdminModal({ isOpen, onClose }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || RESTAURANT_CONFIG.admin.defaultPassword;
    if (password === correctPassword) {
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] border border-border bg-card p-6 sm:p-10 text-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 flex size-9 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:text-white"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-center gap-3 mb-8">
          <div className="size-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
            <Lock className="size-5" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold">Tableau de Bord Restaurateur</h2>
            <span className="text-xs text-muted-foreground">{RESTAURANT_CONFIG.identity.name}</span>
          </div>
        </div>

        {!isAuthenticated ? (
          <form onSubmit={handleLogin} className="max-w-sm mx-auto py-12 text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Veuillez saisir le mot de passe restaurateur pour accéder à la liste des réservations.
            </p>
            <input
              type="password"
              required
              placeholder="Mot de passe..."
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-border bg-background px-5 py-3 text-center text-sm text-white focus:border-primary focus:outline-none"
            />
            {error && (
              <p className="text-xs text-red-400">Mot de passe incorrect.</p>
            )}
            <button
              type="submit"
              className="w-full rounded-2xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg hover:bg-primary-hover"
            >
              Déverrouiller l'accès
            </button>
          </form>
        ) : (
          <AdminDashboardView />
        )}
      </div>
    </div>
  );
}
