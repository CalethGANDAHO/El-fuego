-- ==============================================================================
-- 🔥 EL FUEGO & EXOTI’K — STRUCTURE SUPABASE POSTGRESQL POUR RÉSERVATIONS VIP
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.reservations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    reference VARCHAR(50) UNIQUE NOT NULL,
    date DATE NOT NULL,
    heure VARCHAR(10) NOT NULL,
    personnes INT NOT NULL CHECK (personnes >= 1 AND personnes <= 30),
    zone_id VARCHAR(50) NOT NULL,
    occasion VARCHAR(100) DEFAULT 'Dîner standard',
    demandes_speciales TEXT,
    nom VARCHAR(150) NOT NULL,
    telephone VARCHAR(50) NOT NULL,
    email VARCHAR(150),
    statut VARCHAR(20) DEFAULT 'CONFIRME' CHECK (statut IN ('CONFIRME', 'ANNULE', 'HONORE', 'NO_SHOW')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.blocked_dates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    date DATE UNIQUE NOT NULL,
    motif VARCHAR(255) DEFAULT 'Privatisation de l''établissement',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index pour recherche rapide
CREATE INDEX IF NOT EXISTS idx_reservations_ref ON public.reservations(reference);
CREATE INDEX IF NOT EXISTS idx_reservations_date ON public.reservations(date);
CREATE INDEX IF NOT EXISTS idx_reservations_phone ON public.reservations(telephone);

-- Sécurité Row Level Security (RLS)
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blocked_dates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lecture publique pour vérification des réservations"
ON public.reservations FOR SELECT USING (true);

CREATE POLICY "Création publique de réservations"
ON public.reservations FOR INSERT WITH CHECK (true);

CREATE POLICY "Mise à jour et annulation"
ON public.reservations FOR UPDATE USING (true);

CREATE POLICY "Lecture dates bloquées"
ON public.blocked_dates FOR SELECT USING (true);
