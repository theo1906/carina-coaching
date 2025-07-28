'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ClockIcon,
  FireIcon,
  SparklesIcon,
  HeartIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  UserIcon,
  LightBulbIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function EssstorungPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 -right-20 w-48 h-48 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute -top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-fuchsia-100 to-rose-100 rounded-full mix-blend-multiply filter blur-2xl opacity-15"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Was macht ein Recovery Coach für Essstörungen?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "HEILUNG DURCH KÖRPERLICHE PRÄSENZ UND INNERE TRANSFORMATION"
            </p>
          </div>
        </div>
      </section>

      {/* Section: Ist Essstörungscoaching das Richtige für Dich? */}
      <section className="py-24 bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-10"></div>
        <div className="absolute -top-24 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-24 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Ist Essstörungscoaching das Richtige für Dich?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Wenn du... */}
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-6">Wenn du...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...stark mit deinem Körper und Essen kämpfst</h4>
                    <p className="text-gray-600">Ob Bulimie, Anorexie oder Binge Eating - wenn du dich in einem ständigen Kampf mit deinem Körper und Essen befindest.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <UserGroupIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...bereit bist, tiefere Ursachen zu erkunden</h4>
                    <p className="text-gray-600">Wenn du den Mut hast, die tieferliegenden Ursachen deiner Essstörung zu erkennen und zu heilen.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <HeartIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...bereit bist, dich selbst zu lieben</h4>
                    <p className="text-gray-600">Wenn du bereit bist, den Weg zu deiner Selbstakzeptanz und Körperliebe einzuschlagen.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Dann ist unser Coaching... */}
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-6">Dann ist unser Coaching...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <SparklesIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...ein Weg zur Heilung</h4>
                    <p className="text-gray-600">Wir begleiten dich auf deinem Weg zur Heilung durch körperliche Präsenz und innere Transformation.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <LightBulbIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...ein Prozess der Selbstentdeckung</h4>
                    <p className="text-gray-600">Du wirst lernen, deinen Körper zu spüren und zu verstehen, um eine neue Beziehung zu ihm aufzubauen.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <UserIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...ein Schritt zur Freiheit</h4>
                    <p className="text-gray-600">Du wirst lernen, deinen Körper zu spüren und zu verstehen, um eine neue Beziehung zu ihm aufzubauen.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Meine Geschichte */}
      <section className="py-16 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-4">
              Der Beginn meiner Heilungsreise aus 20 Jahren Essstörung
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-4"></div>
            <p className="text-xl text-pink-800/90 italic max-w-2xl mx-auto">
              "Meine persönliche Heilungsreise von der Essstörung zur Berufung"
            </p>
          </div>

          <div className="relative">
            {/* Animated vertical line */}
            <motion.div 
              className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-pink-300 via-purple-300 to-pink-300 transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent h-20"></div>
            </motion.div>
            
            {/* Timeline items */}
            <div className="space-y-10">
              {[
                {
                  title: "Mit 14 – Der Beginn",
                  content: "Ich war 14, als die Bulimie in mein Leben trat. Scham, Rückzug, Isolation – die Essstörung wurde zu meinem Geheimnis, meiner Strategie, um zu überleben. Ich funktionierte, aber innerlich war ich verloren.",
                  icon: <ClockIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Die Jahre des Versteckens",
                  content: "Über 20 Jahre lang bestimmte die Bulimie mein Denken, Fühlen und Handeln. Ich lebte im ständigen Kampf mit mir selbst, sehnte mich nach Liebe, Sicherheit und Zugehörigkeit – fand sie aber nur in der Kontrolle durch die Krankheit.",
                  icon: <FireIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Der Tiefpunkt",
                  content: "Trennung, Jobverlust, völliger emotionaler Zusammenbruch – in nur vier Wochen fiel alles auseinander. Das Leben schickte mir einen Weckruf. Zum ersten Mal sagte ich mir: Ich will leben. Anders. Wahrhaftig.",
                  icon: <HeartIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Die Nacht der Heilung",
                  content: "Unerwartet kam sie – über Nacht. Ein inneres energetisches 'Cleansing', das alles veränderte. Der Zwang war weg. Ich wusste intuitiv: Es ist vorbei. Für immer. Zum ersten Mal spürte ich Frieden in mir.",
                  icon: <SparklesIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Die ersten Schritte danach",
                  content: "Die Heilung war echt, aber ungewohnt. Wer war ich ohne Bulimie? Ich lernte mich neu kennen, begegnete meinem Körper mit Neugier statt Abscheu. Yoga, Meditation und Stille wurden meine neuen Anker.",
                  icon: <ArrowRightIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Reisen & Rückverbindung",
                  content: "In Indien begegnete ich dem Yoga. In Bali brach ich mein Schweigen – zum ersten Mal teilte ich meine Geschichte. Mein Körper wurde mein Lehrer. Ich fand Kraft im Frausein, Vertrauen ins Leben.",
                  icon: <GlobeAltIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Heute – Meine Berufung leben",
                  content: "Seit 2016 bin ich vollständig frei von der Bulimie. Ich lebe verbunden, klar, selbstbestimmt. Mein Weg wurde zu meiner Aufgabe: Heute begleite ich Frauen auf ihrer Reise – mit Mitgefühl, Tiefe und echter Erfahrung.",
                  icon: <UserIcon className="h-6 w-6 text-pink-500" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ minHeight: '120px' }} // Ensures consistent height for centering
                >
                  {/* Animated timeline dot - positioned absolutely within the flex container */}
                  <motion.div 
                    className="absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 border-4 border-white shadow-lg z-10 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="h-2 w-2 rounded-full bg-white/80"></div>
                  </motion.div>
                  
                  {/* Content card with subtle hover effect */}
                  <motion.div 
                    className={`w-full md:w-[44%] p-5 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-pink-100/50 relative overflow-hidden group ${index % 2 === 0 ? 'mr-auto md:mr-0 md:pr-3' : 'ml-auto md:ml-0 md:pl-3'}`}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.04)'
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Decorative corner accent */}
                    <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-16 h-16 -m-4 bg-pink-100/30 rounded-full filter blur-xl`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div 
                          className="flex-shrink-0 h-9 w-9 rounded-full bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center shadow-inner border border-pink-100"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          {React.cloneElement(item.icon, { className: 'h-4 w-4 text-pink-600' })}
                        </motion.div>
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed relative pl-1 border-l-2 border-pink-100">
                        {item.content}
                      </p>
                    </div>
                    
                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mit wem ich arbeite */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 opacity-10"></div>
        <div className="absolute -top-24 -right-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-24 -left-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Embodiment als Schlüssel auf deiner Heilungsreise aus der Essstörung
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "Mein Weg, meine Vision und meine Mission"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Mein Weg',
                icon: UserGroupIcon,
                content: 'Ich bin Carina, 34 Jahre alt und selbst ehemalige Betroffene. Meine eigene Heilungsreise hat mich zu meiner Berufung geführt: Frauen auf ihrem eigenen Weg zu begleiten und zu unterstützen.',
                color: 'text-pink-600'
              },
              {
                title: 'Meine Vision',
                icon: ShieldCheckIcon,
                content: 'Ich wünsche mir eine Welt, in der Frauen sich selbst lieben und akzeptieren können, so wie sie sind. Eine Welt, in der wir uns nicht mehr verstecken müssen und in der wir unsere Stärke und Schönheit erkennen können.',
                color: 'text-purple-600'
              },
              {
                title: 'Meine Mission',
                icon: UserIcon,
                content: 'Ich möchte Frauen dabei unterstützen, ihre innere Stimme wiederzufinden und ihr volles Potenzial zu entfalten. Gemeinsam arbeiten wir daran, die Wurzeln deiner Essstörung zu verstehen und zu heilen.',
                color: 'text-green-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/90 p-6 rounded-xl shadow-sm border border-pink-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-medium ${item.color}`}>{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Mein Ansatz */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-pink-50">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float animation-delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-purple-600 bg-clip-text bg-gradient-to-r mb-6">
              Heilung von innen nach außen..
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "Heilung durch innere Transformation und körperliche Präsenz"
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Körperliche Präsenz',
                content: 'Ich lehre dich, deinen Körper zu spüren, zu verstehen und zu lieben. Wir arbeiten mit bewusstseinsbasierten Übungen und Körperarbeit.',
                color: 'from-pink-600 to-pink-700',
                icon: <UserIcon className="h-6 w-6 text-white" />,
                features: ['Körperwahrnehmung', 'Achtsamkeitsübungen', 'Atemtechniken'],
                buttonGradient: 'from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800',
                iconBg: 'from-pink-100 to-pink-50',
                accent: 'from-pink-400 to-pink-300'
              },
              {
                title: 'Trauma-Bewusstheit',
                content: 'Wir erkennen und integrieren tiefere Ursachen deiner Essstörung. Ich begleite dich sicher durch den Prozess der Heilung.',
                color: 'from-purple-600 to-purple-700',
                icon: <LightBulbIcon className="h-6 w-6 text-white" />,
                features: ['Sichere Traumaintegration', 'Ressourcenarbeit', 'Stabilisierungstechniken'],
                buttonGradient: 'from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800',
                iconBg: 'from-purple-100 to-purple-50',
                accent: 'from-purple-400 to-purple-300'
              },
              {
                title: 'Emotionale Befreiung',
                content: 'Wir lernen, deine Emotionen zu spüren, zu akzeptieren und zu integrieren. Du wirst lernen, sie als wichtige Botschaften zu verstehen.',
                color: 'from-pink-500 to-purple-600',
                icon: <SparklesIcon className="h-6 w-6 text-white" />,
                features: ['Gefühlsregulation', 'Körperwissen', 'Selbstmitgefühl'],
                buttonGradient: 'from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700',
                iconBg: 'from-pink-50 to-purple-50',
                accent: 'from-pink-300 to-purple-300'
              },
              {
                title: 'Selbstliebe und Akzeptanz',
                content: 'Wir arbeiten an der Entwicklung einer liebevollen Beziehung zu dir selbst und deinem Körper. Du wirst lernen, dich zu akzeptieren und zu schätzen.',
                color: 'from-purple-500 to-pink-600',
                icon: <HeartIcon className="h-6 w-6 text-white" />,
                features: ['Selbstfürsorge', 'Positive Affirmationen', 'Achtsamkeitspraxis'],
                buttonGradient: 'from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700',
                iconBg: 'from-purple-50 to-pink-50',
                accent: 'from-purple-300 to-pink-300'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 300
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100/50 hover:shadow-xl transition-all duration-300"
              >
                
                <div className="relative z-10 p-6">
                  <div className="flex items-start gap-5 mb-5">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r ${item.iconBg} p-3 flex items-center justify-center shadow-sm`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.title}
                      </h3>
                      <div className={`w-10 h-0.5 bg-gradient-to-r ${item.accent} mt-3 mb-4 rounded-full`}></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {item.content}
                  </p>
                  
                  <div className="mt-5 pt-4 border-t border-pink-100">
                    <h4 className="text-sm font-medium text-pink-800/80 mb-3 flex items-center">
                      <span className="mr-2">Schwerpunkte:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <span 
                          key={i}
                          className={`inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full bg-white/90 text-pink-700 border border-pink-100 shadow-sm hover:bg-white transition-colors ${index % 2 === 0 ? 'hover:shadow-md' : 'hover:shadow'}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:scale-[1.02]"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to action */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-pink-800/90 mb-6">
              Bereit für den ersten Schritt in deine persönliche Transformation?
            </p>
            <a 
              href="#kontakt" 
              className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Jetzt Gespräch vereinbaren
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Körperliche Präsenz */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-900 mb-6">
              Was macht ein Recovery Coach für Essstörungen?
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-2xl mx-auto mb-8">
              Finde zurück zu einem gesunden Verhältnis zu deinem Körper und deinem Essverhalten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Bewusstseinsbasierte Übungen',
                icon: UserIcon,
                content: 'Lerne, deinen Körper zu spüren und zu verstehen. Wir arbeiten mit speziellen Übungen zur körperlichen Präsenz.',
                color: 'text-pink-600'
              },
              {
                title: 'Körperliche Heilung',
                icon: HeartIcon,
                content: 'Wir integrieren körperliche Heilungsmethoden, die dir helfen, deine Essstörung auf körperlicher Ebene zu überwinden.',
                color: 'text-purple-600'
              },
              {
                title: 'Selbstfürsorge',
                icon: ShieldCheckIcon,
                content: 'Du lernst, deinen Körper zu lieben und zu pflegen. Wir entwickeln eine liebevolle Beziehung zu deinem Körper.',
                color: 'text-green-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/90 p-6 rounded-xl shadow-sm border border-pink-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-medium ${item.color}`}>{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Leben nach der Genesung */}
      <section className="py-24 bg-gradient-to-br from-white to-pink-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-transparent opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Auf der Suche nach Identität - Einblicke in die Zeit nach der Essstörung
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "Ein Leben in Freiheit und Verbundenheit"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/90 p-6 rounded-xl shadow-sm border border-pink-100">
              <h3 className="text-xl font-medium text-pink-600 mb-4">Was du erwarten kannst:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <SparklesIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Ein neues Verhältnis zu Essen und Körper</span>
                </li>
                <li className="flex items-center gap-3">
                  <HeartIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Tiefe Selbstakzeptanz und Selbstliebe</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheckIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Sicherheit in deinem Körper</span>
                </li>
                <li className="flex items-center gap-3">
                  <UserGroupIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Verbundenheit mit dir selbst und anderen</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/90 p-6 rounded-xl shadow-sm border border-pink-100">
              <h3 className="text-xl font-medium text-pink-600 mb-4">Dein neues Leben:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <UserIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Körperliche Präsenz und Bewusstsein</span>
                </li>
                <li className="flex items-center gap-3">
                  <FireIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Lebensenergie und Vitalität</span>
                </li>
                <li className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Freiheit von Essstörungssymptomen</span>
                </li>
                <li className="flex items-center gap-3">
                  <SparklesIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Leben in deiner vollen Stärke</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Arbeiten Sie mit mir */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Warum JA sagen zu meinem Coaching für Essstörungen:
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "Beginnen Sie Ihren Weg zur Heilung"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Individuelles Coaching',
                icon: UserIcon,
                content: 'In meinem Einzelcoaching begleite ich Sie persönlich auf Ihrem individuellen Heilungsweg. Wir arbeiten intensiv an Ihren spezifischen Bedürfnissen und Zielen, um nachhaltige Veränderungen zu bewirken. Gemeinsam entwickeln wir Strategien, die Ihnen helfen, ein gesundes Verhältnis zu Ihrem Körper und Essen aufzubauen.',
                color: 'text-pink-600',
                features: ['Persönliche Einzelsitzungen', 'Individueller Behandlungsplan', 'Flexible Termingestaltung', 'Diskrete Umgebung']
              },
              {
                title: 'Körperliche Präsenz Training',
                icon: UserIcon,
                content: 'In meinen Workshops lernen Sie, wieder eine liebevolle Verbindung zu Ihrem Körper aufzubauen. Durch achtsamkeitsbasierte Übungen und Körperarbeit helfe ich Ihnen, Vertrauen in Ihren Körper zurückzugewinnen. Die Gruppen sind bewusst klein gehalten, um eine intensive und persönliche Atmosphäre zu gewährleisten.',
                color: 'text-purple-600',
                features: ['Kleine Gruppen', 'Praktische Übungen', 'Sicherer Raum', 'Nachhaltige Methoden']
              },
              {
                title: 'Trauma-Bewusstheit',
                icon: ShieldCheckIcon,
                content: 'Mit meiner spezialisierten Begleitung im Kontext von Traumatisierungen biete ich Ihnen einen sicheren Rahmen, um belastende Erfahrungen zu verarbeiten. Mein Ansatz ist einfühlsam und respektvoll, immer unter Berücksichtigung Ihrer individuellen Grenzen und Bedürfnisse.',
                color: 'text-green-600',
                features: ['Traumasensible Begleitung', 'Sichere Methoden', 'Ressourcenorientiert', 'Individuelles Tempo']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/90 p-6 rounded-xl shadow-sm border border-pink-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-medium ${item.color}`}>{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.content}</p>
                <div className="mt-4 space-y-2">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <CheckIcon className="w-4 h-4 text-pink-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Matches Homepage */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Bereit für deine Transformation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Entdecke deine innere Weisheit und lebe authentisch. Die Heilung beginnt jetzt. Lass uns gemeinsam deinen Weg zur Heilung finden.
          </p>
          <Link 
            href="/mein-weg" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-all duration-300 hover:shadow-lg mx-auto"
          >
            Mehr erfahren
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
