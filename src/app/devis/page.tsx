'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calculator, Truck, MapPin, Globe, CheckCircle2, PhoneCall } from 'lucide-react';

export default function DevisPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceCategory: 'Remorquage / Dépannage',
    pickupLocation: '',
    destinationLocation: '',
    vehicleModel: '',
    description: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased py-8 px-4 flex flex-col justify-between">
      <div className="max-w-2xl mx-auto w-full space-y-6">
        
        {/* Navigation retour */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à l'accueil</span>
        </Link>

        {/* Header */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            Devis Gratuit & Sans Engagement
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Demande de Devis Gratuit
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Dépannage, remorquage longue distance (France & Europe) ou travaux d'atelier.
          </p>
        </div>

        {submitted ? (
          <div className="bg-zinc-900 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Demande de devis transmise !</h2>
            <p className="text-xs text-zinc-400 max-w-md mx-auto">
              Merci <span className="text-white font-medium">{formData.name}</span>. Nous calculons votre tarif au plus juste et nous vous recontactons rapidement au <span className="text-white font-medium">{formData.phone}</span>.
            </p>
            <div className="pt-2">
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold rounded-xl transition-colors"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-5">
            
            {/* Categorie */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                Catégorie de la prestation
              </label>
              <select
                value={formData.serviceCategory}
                onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
              >
                <option value="Remorquage / Dépannage">Remorquage / Dépannage Local (Valenciennes & environs)</option>
                <option value="Transport France / Europe">Rapatriement & Transport Longue Distance (France & Europe)</option>
                <option value="Réparation Mécanique">Réparation Mécanique en Atelier (Onnaing)</option>
                <option value="Autre demande">Autre demande spécifique</option>
              </select>
            </div>

            {/* Trajet si remorquage */}
            {(formData.serviceCategory.includes('Remorquage') || formData.serviceCategory.includes('Transport')) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-zinc-950/80 border border-zinc-800/80 rounded-xl">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-red-500" />
                    Lieu de prise en charge (Départ)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Onnaing, Lille, Bruxelles..."
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    Destination d'arrivée
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Paris, Espagne, Allemagne..."
                    value={formData.destinationLocation}
                    onChange={(e) => setFormData({ ...formData, destinationLocation: e.target.value })}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>
            )}

            {/* Modèle de véhicule */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-300">Marque & Modèle du véhicule</label>
              <input
                type="text"
                required
                placeholder="Ex: Peugeot 308, Renault Master, BMW Série 3..."
                value={formData.vehicleModel}
                onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            {/* Coordonnées */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-800">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300">Votre Nom</label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300">Téléphone</label>
                <input
                  type="tel"
                  required
                  placeholder="06 XX XX XX XX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-300">Description du besoin</label>
              <textarea
                rows={3}
                placeholder="Précisez la panne, l'état du véhicule (roulant ou non) ou la nature des travaux..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl transition-colors shadow-lg"
            >
              Calculer mon devis gratuit
            </button>
          </form>
        )}

        {/* Rappel d'urgence */}
        <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/20 text-xs flex items-center justify-between">
          <span className="text-zinc-300">Dépannage immédiat 24/7 ?</span>
          <a href="tel:0667905571" className="text-red-400 font-bold flex items-center gap-1">
            <PhoneCall className="w-3.5 h-3.5" /> 06 67 90 55 71
          </a>
        </div>

      </div>

      <footer className="text-center text-[10px] text-zinc-600 mt-8">
        &copy; {new Date().getFullYear()} Mondiale Services Auto - Onnaing
      </footer>
    </div>
  );
}