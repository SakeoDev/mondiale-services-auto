'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, PhoneCall, ShieldAlert, MapPin, CheckCircle2, Clock, Truck, Star } from 'lucide-react';

export default function DepannageValenciennesPage() {
  return (
    <>
      {/* Schema.org spécifique à Valenciennes */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "Mondiale Services Auto - Dépannage Valenciennes",
            "telephone": "+33667905571",
            "areaServed": "Valenciennes",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "400 Rue Jean Jaurès",
              "addressLocality": "Onnaing",
              "postalCode": "59264",
              "addressCountry": "FR"
            },
            "url": "https://mondialeservicesauto.fr/depannage-valenciennes"
          })
        }}
      />

      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased py-8 px-4 flex flex-col justify-between">
        <div className="max-w-3xl mx-auto w-full space-y-6">
          
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour à l'accueil</span>
          </Link>

          {/* Header SEO */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold">
              <ShieldAlert className="w-3.5 h-3.5" />
              Intervention rapide 24h/24 & 7j/7 sur Valenciennes et environs
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Dépannage & Remorquage Auto à Valenciennes (59300)
            </h1>
            <p className="text-xs sm:text-sm text-zinc-400">
              Assistance routière d'urgence, remorquage voiture et utilitaire. Arrivée rapide sur place.
            </p>
          </div>

          {/* Bouton d'urgence instantané */}
          <a
            href="tel:0667905571"
            className="flex items-center justify-between p-5 bg-red-600 hover:bg-red-500 text-white rounded-2xl shadow-xl transition-all"
          >
            <div className="flex items-center gap-3">
              <PhoneCall className="w-6 h-6 animate-bounce" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider block text-red-100">Besoin d'aide à Valenciennes ?</span>
                <span className="text-lg font-black">Appeler le 06 67 90 55 71</span>
              </div>
            </div>
            <span className="text-xs bg-white/20 px-3 py-1.5 rounded-lg font-bold">Appel Direct</span>
          </a>

          {/* Contenu SEO haute valeur pour Google */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 space-y-4 text-xs text-zinc-300 leading-relaxed">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Truck className="w-4 h-4 text-red-500" />
              Remorquage et Assistance Automobile à Valenciennes
            </h2>
            <p>
              Basé à Onnaing, à seulement quelques minutes du centre-ville de <strong>Valenciennes</strong>, <strong>Mondiale Services Auto</strong> est votre partenaire de confiance pour tout <strong>dépannage automobile urgent</strong>. Que vous soyez en panne sur l'A2, bloqué en centre-ville ou sur le parking d'un centre commercial, nos camion-remorques interviennent 24h/24.
            </p>

            <h3 className="text-sm font-bold text-white mt-4">Nos prestations de dépannage sur le secteur Valenciennois :</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Remorquage voiture & utilitaire</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Dépannage batterie & erreur carburant</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Ouverture de porte & perte de clés</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> Transport de véhicule vers notre atelier</li>
            </ul>
          </div>

          {/* Lien vers devis */}
          <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between">
            <span className="text-xs text-zinc-400">Besoin d'un devis pour un remorquage sur Valenciennes ?</span>
            <Link href="/devis" className="text-xs font-bold text-emerald-400 hover:underline">
              Demander un devis &rarr;
            </Link>
          </div>

        </div>

        <footer className="text-center text-[10px] text-zinc-600 mt-8">
          &copy; {new Date().getFullYear()} Mondiale Services Auto - Dépannage Valenciennes & Nord (59)
        </footer>
      </div>
    </>
  );
}