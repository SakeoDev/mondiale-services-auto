'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Car, Wrench, CheckCircle2, PhoneCall } from 'lucide-react';

export default function RendezVousPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Entretien & Vidange',
    licensePlate: '',
    preferredDate: '',
    preferredTime: '09:00',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourrez connecter un envoi d'email/API ou Webhook
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
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Atelier Onnaing (59264)
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Prendre Rendez-vous au Garage
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Révision, entretien mécanique et diagnostic chez Mondiale Services Auto.
          </p>
        </div>

        {submitted ? (
          <div className="bg-zinc-900 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-4">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Demande de RDV envoyée !</h2>
            <p className="text-xs text-zinc-400 max-w-md mx-auto">
              Notre équipe vous recontactera rapidement au <span className="text-white font-medium">{formData.phone}</span> pour confirmer le créneau du <span className="text-white font-medium">{formData.preferredDate}</span>.
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
            
            {/* Type de prestation */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-blue-400" />
                Type d'intervention
              </label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-blue-500"
              >
                <option value="Entretien & Vidange">Entretien & Vidange</option>
                <option value="Système de Freinage">Système de Freinage (Disques / Plaquettes)</option>
                <option value="Diagnostic Électronique / Panne">Diagnostic Électronique / Recherche de Panne</option>
                <option value="Pneumatiques & Géométrie">Pneumatiques & Géométrie</option>
                <option value="Distribution & Embrayage">Distribution & Embrayage</option>
                <option value="Autre prestation mécanique">Autre prestation mécanique</option>
              </select>
            </div>

            {/* Infos Véhicule */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                  <Car className="w-3.5 h-3.5 text-zinc-400" />
                  Immatriculation
                </label>
                <input
                  type="text"
                  placeholder="Ex: AA-123-BB"
                  required
                  value={formData.licensePlate}
                  onChange={(e) => setFormData({ ...formData, licensePlate: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-blue-500 uppercase"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  Date souhaitée
                </label>
                <input
                  type="date"
                  required
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Coordonnées */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-zinc-800">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-300">Nom & Prénom</label>
                <input
                  type="text"
                  required
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-blue-500"
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
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Remarques */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-300">Détails ou précisions</label>
              <textarea
                rows={3}
                placeholder="Précisez le symptôme ou la demande spécifique..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3.5 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl transition-colors shadow-lg"
            >
              Confirmer la demande de RDV
            </button>
          </form>
        )}

        {/* Rappel d'urgence */}
        <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/20 text-xs flex items-center justify-between">
          <span className="text-zinc-300">Panne ou urgence sur route ?</span>
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