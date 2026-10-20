'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  PhoneCall, 
  Calendar, 
  Calculator, 
  ShieldAlert, 
  Star, 
  ExternalLink,
  ChevronRight,
  Clock,
  MapPin,
  Globe,
  Wrench,
  Truck
} from 'lucide-react';

const GOOGLE_MAPS_SEARCH_URL = "https://www.google.com/maps/search/?api=1&query=Mondiale+Services+Auto+400+Rue+Jean+Jaures+59264+Onnaing";

const REAL_GOOGLE_REVIEWS = [
  {
    id: 1,
    author: 'Romain L.',
    rating: 5,
    date: 'Avis Google',
    comment: 'Dépannage rapide et efficace sur la région. Intervention au top, je recommande les yeux fermés !',
    initials: 'RL'
  },
  {
    id: 2,
    author: 'David M.',
    rating: 5,
    date: 'Avis Google',
    comment: 'Super pro pour le remorquage de mon véhicule. Service rapide et tarif très correct.',
    initials: 'DM'
  },
  {
    id: 3,
    author: 'Mickaël B.',
    rating: 5,
    date: 'Avis Google',
    comment: 'Intervention d’urgence au top. Explications claires et prise en charge immédiate.',
    initials: 'MB'
  }
];

export default function HomePage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      {/* SCHEMA.ORG ULTRA-OPTIMISÉ POUR LE SEO LOCAL & NATIONAL */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EmergencyService",
            "name": "Mondiale Services Auto",
            "alternateName": "MSA Dépannage",
            "description": "Service professionnel de dépannage, remorquage automobile 24/7 et réparation mécanique à Onnaing, Valenciennes, dans toute la France et en Europe.",
            "telephone": "+33667905571",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "400 Rue Jean Jaurès",
              "addressLocality": "Onnaing",
              "postalCode": "59264",
              "addressRegion": "Hauts-de-France",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 50.3901103,
              "longitude": 3.6146267
            },
            "areaServed": [
              { "@type": "City", "name": "Onnaing" },
              { "@type": "City", "name": "Valenciennes" },
              { "@type": "AdministrativeArea", "name": "Nord" },
              { "@type": "Country", "name": "France" },
              { "@type": "AdministrativeArea", "name": "Europe" }
            ],
            "url": "https://mondialeservicesauto.fr",
            "priceRange": "$$"
          })
        }}
      />

      <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased selection:bg-red-600 selection:text-white flex flex-col justify-between">
        
        {/* TOP BAR SEO */}
        <div className="bg-zinc-900 border-b border-zinc-800 text-xs py-2 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-between items-center gap-2 text-zinc-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Dépannage d'urgence actif 24h/24 et 7j/7
              </span>
            </div>
            <div className="flex items-center gap-1 text-zinc-200 font-bold">
              <ShieldAlert className="w-3.5 h-3.5 text-red-500" />
              <span>Urgence Route : 06 67 90 55 71</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto w-full px-4 py-8 flex-1 flex flex-col justify-center gap-8">
          
          {/* HEADER AVEC MOTS CLÉS PRINCIPAUX */}
          <header className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-700/60 flex items-center justify-center shadow-sm">
                <span className="font-extrabold text-xl tracking-tighter text-white">MSA</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Mondiale Services Auto | Dépannage & Remorquage
                </h1>
                <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                  <span>400 Rue Jean Jaurès, 59264 Onnaing (Près de Valenciennes)</span>
                </p>
              </div>
            </div>

            <a 
              href={GOOGLE_MAPS_SEARCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 transition-colors"
            >
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">5.0</span>
              <span className="text-zinc-500">| Google Maps</span>
              <ExternalLink className="w-3 h-3 text-zinc-400 ml-1" />
            </a>
          </header>

          {/* CONTENU PRINCIPAL AXÉ SUR LE DÉPANNAGE */}
          <main className="space-y-4">
            
            {/* BOUTON APPEL D'URGENCE ROI (CIBLE NUMÉRO 1 GOOGLE) */}
            <a
              href="tel:0667905571"
              className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 bg-red-600 hover:bg-red-500 text-white rounded-2xl shadow-xl transition-all duration-200 border border-red-500"
            >
              <div className="flex items-center gap-4">
                <div className="p-3.5 bg-red-700 rounded-xl group-hover:scale-105 transition-transform">
                  <PhoneCall className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-red-800 text-[10px] font-bold uppercase tracking-wider text-red-100 mb-1">
                    Service de Dépannage & Remorquage 24/7
                  </div>
                  <h2 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight">
                    Besoin d'un Dépannage Urgent ?
                  </h2>
                  <p className="text-xs sm:text-sm text-red-100 font-normal mt-0.5">
                    Intervention rapide sur Onnaing, Valenciennes, toute la France et l'Europe. Appel direct.
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm self-end sm:self-center">
                <span>06 67 90 55 71</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </a>

            {/* SECTION TEXTUELLE POUR LE SEO (LES MOTS CLÉS CRUCIAUX) */}
            <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5 text-xs text-zinc-400 space-y-2">
              <h3 className="text-sm font-bold text-zinc-200 flex items-center gap-2">
                <Truck className="w-4 h-4 text-red-500" />
                Experts en Dépannage Automobile et Remorquage Toutes Distances
              </h3>
              <p className="leading-relaxed">
                Vous êtes immobilisé suite à une panne ou un accident ? <strong>Mondiale Services Auto (MSA)</strong>, basé à Onnaing près de Valenciennes, assure un service de <strong>dépannage sur route</strong> et de <strong>remorquage</strong> réactif 24 heures sur 24 et 7 jours sur 7. Qu'il s'agisse d'un rapatriement local dans le Nord (59) ou d'un transport de véhicule à travers toute la France et l'Europe, notre équipe qualifiée intervient avec professionnalisme.
              </p>
            </div>

            {/* NAVIGATION SECONDAIRE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <Link
                href="/rendez-vous"
                className="group p-5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-zinc-800 rounded-xl text-blue-400 group-hover:text-blue-300">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Prendre RDV au Garage
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Révision, entretien mécanique et diagnostic dans notre atelier à Onnaing.
                  </p>
                </div>
              </Link>

              <Link
                href="/devis"
                className="group p-5 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all duration-200 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-zinc-800 rounded-xl text-emerald-400 group-hover:text-emerald-300">
                    <Calculator className="w-6 h-6" />
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Demander un Devis en Ligne
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Estimation rapide pour remorquage longue distance ou travaux de réparation.
                  </p>
                </div>
              </Link>

            </div>

          </main>

          {/* SECTION AVIS GOOGLE */}
          <section className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  Avis Clients Vérifiés
                  <span className="text-xs font-normal text-zinc-400">(Mondiale Services Auto)</span>
                </h3>
                <p className="text-xs text-zinc-500">La référence en dépannage et réparation automobile</p>
              </div>

              <a
                href={GOOGLE_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs rounded-lg transition-colors self-start sm:self-auto shadow-md"
              >
                <Star className="w-3.5 h-3.5 fill-zinc-950 text-zinc-950" />
                <span>Laisser un avis sur Google</span>
                <ExternalLink className="w-3 h-3 text-zinc-950" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {REAL_GOOGLE_REVIEWS.map((rev) => (
                <article key={rev.id} className="bg-zinc-950/60 p-3.5 rounded-xl border border-zinc-800/60 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 text-[10px] font-bold flex items-center justify-center">
                          {rev.initials}
                        </div>
                        <span className="text-xs font-semibold text-zinc-200">{rev.author}</span>
                      </div>
                      <div className="flex text-amber-400">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-2.5 h-2.5 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 leading-normal">
                      "{rev.comment}"
                    </p>
                  </div>
                  <span className="text-[10px] text-zinc-600 mt-2 block">{rev.date}</span>
                </article>
              ))}
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer className="border-t border-zinc-900 py-4 px-4 text-center text-xs text-zinc-600">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>&copy; {new Date().getFullYear()} Mondiale Services Auto - 400 Rue Jean Jaurès, 59264 Onnaing</span>
            <span>Dépannage & Remorquage 24/7 : 06 67 90 55 71</span>
          </div>
        </footer>
      </div>
    </>
  );
}