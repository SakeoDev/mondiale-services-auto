'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, PhoneCall, Globe, CheckCircle2, Truck, ShieldAlert } from 'lucide-react';

export default function RemorquageEuropePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "Mondiale Services Auto - Transport & Rapatriement Europe",
            "telephone": "+33667905571",
            "areaServed": ["France", "Belgium", "Germany", "Spain", "Europe"],
            "url": "https://mondialeservicesauto.fr/remorquage-europe"
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
              <Globe className="w-3.5 h-3.5" />
              Service International France & Toute l'Europe 24/7
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Remorquage, Transport & Rapatriement Europe
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400">
              Transport de véhicules, rapatriement après panne ou accident dans toute la France, Belgique, Espagne, Allemagne et Europe.
            </p>
          </div>

          <a href="tel:0667905571" className="flex items-center justify-between p-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl shadow-xl transition-all">
            <div className="flex items-center gap-3">
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider block text-red-100">Ligne Directe Rapatriement</span>
                <span className="text-lg font-black">06 67 90 55 71</span>
              </div>
            </div>
            <span className="text-xs bg-white/20 px-3 py-1.5 rounded-lg font-bold">Appeler</span>
          </a>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4 text-xs text-zinc-300 leading-relaxed">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Truck className="w-4 h-4 text-emerald-400" />
              Spécialiste du Transport & Remorquage Longue Distance
            </h2>
            <p>
              <strong>Mondiale Services Auto</strong> est votre partenaire privilégié pour le <strong>rapatriement et le transport de véhicules à l'échelle européenne</strong>. Grâce à notre positionnement stratégique à Onnaing (proche de la frontière belge), nous assurons des liaisons rapides entre la France, la Belgique, les Pays-Bas, l'Allemagne, l'Espagne et toute l'Union Européenne.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Transport de véhicules de collection & récents</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Rapatriement auto après panne à l'étranger</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Prise en charge assurance et particuliers</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Tarification sur-mesure sur devis</li>
            </ul>
          </div>

          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between">
            <span className="text-xs text-zinc-400">Besoin d'un devis pour un transport en Europe ?</span>
            <Link href="/devis" className="text-xs font-bold text-emerald-400 hover:underline">
              Demander un devis &rarr;
            </Link>
          </div>
        </div>

        <footer className="text-center text-[10px] text-zinc-600 mt-8">
          &copy; {new Date().getFullYear()} Mondiale Services Auto - Transport Europe & France
        </footer>
      </div>
    </>
  );
}