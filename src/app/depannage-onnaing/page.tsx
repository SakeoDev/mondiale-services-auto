'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, PhoneCall, ShieldAlert, MapPin, CheckCircle2, Truck } from 'lucide-react';

export default function DepannageOnnaingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "Mondiale Services Auto - Dépannage Onnaing",
            "telephone": "+33667905571",
            "areaServed": ["Onnaing", "Quarouble", "Saint-Saulve"],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "400 Rue Jean Jaurès",
              "addressLocality": "Onnaing",
              "postalCode": "59264",
              "addressCountry": "FR"
            },
            "url": "https://mondialeservicesauto.fr/depannage-onnaing"
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
              Intervention locale immédiate à Onnaing (59264)
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Dépannage & Remorquage Auto à Onnaing
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400">
              Intervention express au 400 Rue Jean Jaurès, zone industrielle Toyota et axes routiers environnants.
            </p>
          </div>

          <a href="tel:0667905571" className="flex items-center justify-between p-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl shadow-xl transition-all">
            <div className="flex items-center gap-3">
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider block text-red-100">Panne à Onnaing ?</span>
                <span className="text-lg font-black">06 67 90 55 71</span>
              </div>
            </div>
            <span className="text-xs bg-white/20 px-3 py-1.5 rounded-lg font-bold">Appel Direct</span>
          </a>

          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4 text-xs text-zinc-300 leading-relaxed">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Truck className="w-4 h-4 text-red-500" />
              Votre Garage & Dépanneur de Proximité à Onnaing
            </h2>
            <p>
              Implanté directement au <strong>400 Rue Jean Jaurès à Onnaing (59264)</strong>, <strong>Mondiale Services Auto</strong> garantit le temps d'intervention le plus rapide du secteur. Nous couvrons la commune d'Onnaing, les zones d'activités, Quarouble, Saint-Saulve, Rombies-et-Marchipont et Crespin.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Dépannage sur place & remorquage</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Prise en charge atelier mécanique</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Dépannage batterie & crevaison</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Service 24h/24 et 7j/7</li>
            </ul>
          </div>
        </div>

        <footer className="text-center text-[10px] text-zinc-600 mt-8">
          &copy; {new Date().getFullYear()} Mondiale Services Auto - Onnaing (59264)
        </footer>
      </div>
    </>
  );
}