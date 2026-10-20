'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, PhoneCall, ShieldAlert, CheckCircle2, Truck } from 'lucide-react';

export default function DepannageDenainPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "Mondiale Services Auto - Dépannage Denain",
            "telephone": "+33667905571",
            "areaServed": ["Denain", "Hordain", "Lourches"],
            "url": "https://mondialeservicesauto.fr/depannage-denain"
          })
        }}
      />

      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased py-8 px-4 flex flex-col justify-between">
        <div className="max-w-3xl mx-auto w-full space-y-6">
          <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold">
              <ShieldAlert className="w-3.5 h-3.5" />
              Assistance routière 24/7 sur le secteur de Denain (59220)
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Dépannage & Remorquage Auto à Denain
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400">
              Intervention rapide sur Denain, autoroute A2, A21 et communes environnantes.
            </p>
          </div>

          <a href="tel:0667905571" className="flex items-center justify-between p-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl shadow-xl transition-all">
            <div className="flex items-center gap-3">
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider block text-red-100">Dépannage d'urgence Denain</span>
                <span className="text-lg font-black">06 67 90 55 71</span>
              </div>
            </div>
            <span className="text-xs bg-white/20 px-3 py-1.5 rounded-lg font-bold">Appel Direct</span>
          </a>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4 text-xs text-zinc-300 leading-relaxed">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Truck className="w-4 h-4 text-red-500" />
              Remorquage Rapide Voiture & Utilitaire Denain
            </h2>
            <p>
              Besoin d'un remorquage en urgence à <strong>Denain</strong> ou ses alentours ? <strong>Mondiale Services Auto</strong> vous dépanne 24/7 pour tout véhicule en panne, accidenté ou immobilisé.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Remorquage toutes distances</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Assistance autoroute & axes secondaires</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Rapatriement de véhicule</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Devis clair sans mauvaise surprise</li>
            </ul>
          </div>
        </div>

        <footer className="text-center text-[10px] text-zinc-600 mt-8">
          &copy; {new Date().getFullYear()} Mondiale Services Auto - Denain (59220)
        </footer>
      </div>
    </>
  );
}