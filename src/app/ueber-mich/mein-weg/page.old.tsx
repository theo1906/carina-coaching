"use client";

import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpenIcon,
  ArrowPathIcon,
  SparklesIcon,
  ExclamationTriangleIcon,
  HeartIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface TimelinePoint {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  x: number;
  y: number;
  isFork?: boolean;
  isMerge?: boolean;
  connections?: Array<{
    targetId: string;
    label?: string;
    color?: string;
  }>;
}

interface TimelinePoint {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: ReactNode;
  color: string;
  x: number;
  y: number;
  isFork?: boolean;
  isMerge?: boolean;
  connections?: Array<{
    targetId: string;
    label?: string;
    color?: string;
  }>;
}

export default function MeinWeg() {
  const [expandedPoint, setExpandedPoint] = useState<string | null>(null);

  // Timeline points data
  const timelinePoints: TimelinePoint[] = [
    {
      id: 'start',
      year: '2009',
      title: 'Anfang meines Weges',
      description: 'Meine erste Beziehung und erste Herausforderungen',
      icon: <HeartIcon className="w-6 h-6" />,
      color: 'bg-blue-500',
      x: 0,
      y: 0,
      isFork: true,
      connections: [
        { targetId: 'positive', label: 'Positive Aspekte' },
        { targetId: 'negative', label: 'Herausforderungen' }
      ]
    },
    {
      id: 'positive',
      year: '2010-2013',
      title: 'Positive Erfahrungen',
      description: 'Wachstum und Entwicklung in der Beziehung',
      icon: <SparklesIcon className="w-6 h-6" />,
      color: 'bg-green-500',
      x: -150,
      y: 100,
      isMerge: true
    },
    {
      id: 'negative',
      year: '2010-2013',
      title: 'Herausforderungen',
      description: 'Erste Anzeichen von Essstörungen und emotionalen Schwierigkeiten',
      icon: <ExclamationTriangleIcon className="w-6 h-6" />,
      color: 'bg-red-500',
      x: 150,
      y: 100,
      isMerge: true
    },
    {
      id: 'merge',
      year: '2014',
      title: 'Neuanfang',
      description: 'Persönliche Krise und Wendepunkt',
      icon: <ArrowPathIcon className="w-6 h-6" />,
      color: 'bg-purple-500',
      x: 0,
      y: 200,
      connections: [
        { targetId: 'healing' }
      ]
    },
    {
      id: 'healing',
      year: '2015-2018',
      title: 'Heilungsprozess',
      description: 'Therapie und Selbsterkundung',
      icon: <HeartIcon className="w-6 h-6" />,
      color: 'bg-yellow-500',
      x: 0,
      y: 300,
      connections: [
        { targetId: 'discovery' }
      ]
    },
    {
      id: 'discovery',
      year: '2019-2021',
      title: 'Neue Wege',
      description: 'Berufliche Neuorientierung und spirituelle Entdeckung',
      icon: <BookOpenIcon className="w-6 h-6" />,
      color: 'bg-indigo-500',
      x: 0,
      y: 400,
      connections: [
        { targetId: 'now' }
      ]
    },
    {
      id: 'now',
      year: 'Heute',
      title: 'Meine Mission',
      description: 'Anderen auf ihrem Heilungsweg begleiten',
      icon: <UserGroupIcon className="w-6 h-6" />,
      color: 'bg-pink-500',
      x: 0,
      y: 500
    }
  ];

  // Find a point by ID
  const getPointById = (id: string) => {
    return timelinePoints.find(point => point.id === id);
  };

  // Toggle expanded state
  const toggleExpand = (id: string) => {
    setExpandedPoint(expandedPoint === id ? null : id);
  };

  // Render path between points
  const renderPath = (from: TimelinePoint, to: TimelinePoint, index: number, connection?: { label?: string; color?: string }) => {
    const pathClass = 'stroke-gray-300';
    const midY = (from.y + to.y) / 2;
    const pathData = `M ${from.x} ${from.y} C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${to.y}`;

    return (
      <g key={`path-${from.id}-${to.id}-${index}`}>
        <path
          d={pathData}
          fill="none"
          strokeWidth="2"
          className={pathClass}
          strokeDasharray="0"
        />
        {connection?.label && (
          <text
            x={(from.x + to.x) / 2}
            y={midY - 10}
            textAnchor="middle"
            className="text-xs font-medium fill-gray-600"
          >
            {connection.label}
          </text>
        )}
      </g>
    );
  };

  // Render a timeline point
  const renderTimelinePoint = (point: TimelinePoint) => {
    const isExpanded = expandedPoint === point.id;

    return (
      <motion.g
        key={point.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer"
        onClick={() => toggleExpand(point.id)}
      >
        {/* Connection lines */}
        {point.connections?.map((connection, index) => {
          const targetPoint = getPointById(connection.targetId);
          if (!targetPoint) return null;
          return renderPath(point, targetPoint, index, connection);
        })}

        {/* Point */}
        <circle
          cx={point.x}
          cy={point.y}
          r={point.isFork || point.isMerge ? 12 : 8}
          className={`${point.color} fill-current`}
        />
        
        {/* Year label */}
        <text
          x={point.x}
          y={point.y - 15}
          textAnchor="middle"
          className="text-sm font-medium text-gray-700"
        >
          {point.year}
        </text>

        {/* Title and description */}
        <foreignObject
          x={point.x + 30}
          y={point.y - 25}
          width="200"
          height={isExpanded ? 'auto' : '60'}
          className="text-left"
        >
          <div className="ml-2">
            <h3 className="text-sm font-semibold text-gray-900">{point.title}</h3>
            <p className="text-xs text-gray-600 mt-1">
              {isExpanded ? (
                <>
                  {point.description}
                  <br />
                  <span className="text-blue-600 hover:underline mt-1 inline-block">
                    Weniger anzeigen
                  </span>
                </>
              ) : (
                <>
                  {point.description.substring(0, 60)}
                  {point.description.length > 60 && '...'}
                  <br />
                  <span className="text-blue-600 hover:underline mt-1 inline-block">
                    Mehr erfahren
                  </span>
                </>
              )}
            </p>
          </div>
        </foreignObject>

        {/* Icon */}
        <foreignObject
          x={point.x - 10}
          y={point.y - 10}
          width="20"
          height="20"
        >
          <div className="text-white">
            {point.icon}
          </div>
        </foreignObject>
      </motion.g>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mein Weg
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Eine Reise der Heilung und Selbstentdeckung
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {/* Timeline content */}
          <div className="relative">
            <svg width="100%" height="600" className="overflow-visible">
              {timelinePoints.map((point) => renderTimelinePoint(point))}
            </svg>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/ueber-mich"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Zurück zu Über mich
          </Link>
        </div>
      </div>
    </div>
  );
}
  icon: ReactNode;
  color: string;
  x: number;
  y: number;
  isFork?: boolean;
  isMerge?: boolean;
  connections?: Array<{
    targetId: string;
    label?: string;
    color?: string;
  }>;
}

export default function MeinWeg() {
  const [expandedPoint, setExpandedPoint] = useState<string | null>(null);

  // Timeline points data
  const timelinePoints: TimelinePoint[] = [
    {
      id: 'start',
      year: '2009',
      title: 'Anfang meines Weges',
      description: 'Meine erste Beziehung und erste Herausforderungen',
      icon: <HeartIcon className="w-6 h-6" />,
      color: 'bg-blue-500',
      x: 0,
      y: 0,
      isFork: true,
      connections: [
        { targetId: 'positive', label: 'Positive Aspekte' },
        { targetId: 'negative', label: 'Herausforderungen' }
      ]
    },
    {
      id: 'positive',
      year: '2010-2013',
      title: 'Positive Erfahrungen',
      description: 'Wachstum und Entwicklung in der Beziehung',
      icon: <SparklesIcon className="w-6 h-6" />,
      color: 'bg-green-500',
      x: -150,
      y: 100,
      isMerge: true
    },
    {
      id: 'negative',
      year: '2010-2013',
      title: 'Herausforderungen',
      description: 'Erste Anzeichen von Essstörungen und emotionalen Schwierigkeiten',
      icon: <ExclamationTriangleIcon className="w-6 h-6" />,
      color: 'bg-red-500',
      x: 150,
      y: 100,
      isMerge: true
    },
    {
      id: 'merge',
      year: '2014',
      title: 'Neuanfang',
      description: 'Persönliche Krise und Wendepunkt',
      icon: <ArrowPathIcon className="w-6 h-6" />,
      color: 'bg-purple-500',
      x: 0,
      y: 200,
      connections: [
        { targetId: 'healing' }
      ]
    },
    {
      id: 'healing',
      year: '2015-2018',
      title: 'Heilungsprozess',
      description: 'Therapie und Selbsterkundung',
      icon: <HeartIcon className="w-6 h-6" />,
      color: 'bg-yellow-500',
      x: 0,
      y: 300,
      connections: [
        { targetId: 'discovery' }
      ]
    },
    {
      id: 'discovery',
      year: '2019-2021',
      title: 'Neue Wege',
      description: 'Berufliche Neuorientierung und spirituelle Entdeckung',
      icon: <BookOpenIcon className="w-6 h-6" />,
      color: 'bg-indigo-500',
      x: 0,
      y: 400,
      connections: [
        { targetId: 'now' }
      ]
    },
    {
      id: 'now',
      year: 'Heute',
      title: 'Meine Mission',
      description: 'Anderen auf ihrem Heilungsweg begleiten',
      icon: <UserGroupIcon className="w-6 h-6" />,
      color: 'bg-pink-500',
      x: 0,
      y: 500
    }
  ];

  // Find a point by ID
  const getPointById = (id: string) => {
    return timelinePoints.find(point => point.id === id);
  };

  // Toggle expanded state
  const toggleExpand = (id: string) => {
    setExpandedPoint(expandedPoint === id ? null : id);
  };

  // Render path between points
  const renderPath = (from: TimelinePoint, to: TimelinePoint, index: number, connection?: { label?: string; color?: string }) => {
    const pathClass = 'stroke-gray-300';
    const midY = (from.y + to.y) / 2;
    const pathData = `M ${from.x} ${from.y} C ${from.x} ${midY}, ${to.x} ${midY}, ${to.x} ${to.y}`;

    return (
      <g key={`path-${from.id}-${to.id}-${index}`}>
        <path
          d={pathData}
          fill="none"
          strokeWidth="2"
          className={pathClass}
          strokeDasharray="0"
        />
        {connection?.label && (
          <text
            x={(from.x + to.x) / 2}
            y={midY - 10}
            textAnchor="middle"
            className="text-xs font-medium fill-gray-600"
          >
            {connection.label}
          </text>
        )}
      </g>
    );
  };

  // Render a timeline point
  const renderTimelinePoint = (point: TimelinePoint) => {
    const isExpanded = expandedPoint === point.id;

    return (
      <motion.g
        key={point.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer"
        onClick={() => toggleExpand(point.id)}
      >
        {/* Connection lines */}
        {point.connections?.map((connection, index) => {
          const targetPoint = getPointById(connection.targetId);
          if (!targetPoint) return null;
          return renderPath(point, targetPoint, index, connection);
        })}

        {/* Point */}
        <circle
          cx={point.x}
          cy={point.y}
          r={point.isFork || point.isMerge ? 12 : 8}
          className={`${point.color} fill-current`}
        />
        
        {/* Year label */}
        <text
          x={point.x}
          y={point.y - 15}
          textAnchor="middle"
          className="text-sm font-medium text-gray-700"
        >
          {point.year}
        </text>

        {/* Title and description */}
        <foreignObject
          x={point.x + 30}
          y={point.y - 25}
          width="200"
          height={isExpanded ? 'auto' : '60'}
          className="text-left"
        >
          <div className="ml-2">
            <h3 className="text-sm font-semibold text-gray-900">{point.title}</h3>
            <p className="text-xs text-gray-600 mt-1">
              {isExpanded ? (
                <>
                  {point.description}
                  <br />
                  <span className="text-blue-600 hover:underline mt-1 inline-block">
                    Weniger anzeigen
                  </span>
                </>
              ) : (
                <>
                  {point.description.substring(0, 60)}
                  {point.description.length > 60 && '...'}
                  <br />
                  <span className="text-blue-600 hover:underline mt-1 inline-block">
                    Mehr erfahren
                  </span>
                </>
              )}
            </p>
          </div>
        </foreignObject>

        {/* Icon */}
        <foreignObject
          x={point.x - 10}
          y={point.y - 10}
          width="20"
          height="20"
        >
          <div className="text-white">
            {point.icon}
          </div>
        </foreignObject>
      </motion.g>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mein Weg
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Eine Reise der Heilung und Selbstentdeckung
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-200"></div>
          
          {/* Timeline content */}
          <div className="relative">
            <svg width="100%" height="600" className="overflow-visible">
              {timelinePoints.map((point) => renderTimelinePoint(point))}
            </svg>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/ueber-mich"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Zurück zu Über mich
          </Link>
        </div>
      </div>
    </div>
  );
}
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  x: number;
  y: number;
  pathType?: 'positive' | 'negative' | 'neutral';
  isFork?: boolean;
  isMerge?: boolean;
  connections?: Array<{
    targetId: number | string;
    label?: string;
    color?: string;
  }>;
  fork?: {
    positive: {
      title: string;
      description: string;
      icon: React.ReactNode;
      color: string;
      y: number;
    };
    negative: {
      title: string;
      description: string;
      icon: React.ReactNode;
      color: string;
      y: number;
    };
  };
  mergePoint?: number | string;
}

// Sample timeline data
const timelineData: TimelinePoint[] = [
  {
    id: 1,
    year: '2005',
    title: 'Beginn meiner Reise',
    description: 'Meine erste bewusste Auseinandersetzung mit persönlichem Wachstum und Heilung.',
    icon: <BookOpenIcon className="w-6 h-6" />,
    color: 'indigo',
    x: 0,
    y: 0,
    connections: [{ targetId: 2 }]
  },
  {
    id: 2,
    year: '2009',
    title: 'Wendepunkt',
    description: 'Entscheidung für einen neuen Weg der Heilung und Selbstfindung.',
    icon: <ArrowPathIcon className="w-6 h-6" />,
    color: 'purple',
    x: 1,
    y: 0,
    isFork: true,
    connections: [
      { targetId: 3, label: 'Positiver Weg', color: 'green' },
      { targetId: 4, label: 'Herausforderungen', color: 'red' }
    ]
  },
  // Add more timeline points as needed
];
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  x: number;
  y: number;
  pathType?: 'positive' | 'negative' | 'neutral';
  isFork?: boolean;
  isMerge?: boolean;
  connections?: Array<{
    targetId: number | string;
    label?: string;
    color?: string;
  }>;
  fork?: {
    positive: {
      title: string;
      description: string;
      icon: React.ReactNode;
      color: string;
      y: number;
    };
    negative: {
      title: string;
      description: string;
      icon: React.ReactNode;
      color: string;
      y: number;
    };
  };
  mergePoint?: number | string;
}

const timelineData: TimelinePoint[] = [
  {
    id: 1,
    year: '2005',
    title: 'Beginn der Essstörung',
    description: 'Erste Anzeichen einer Essstörung in der Jugend',
    icon: <UserCircleIcon className="h-6 w-6" />,
    color: 'bg-rose-100 text-rose-600',
    x: 0,
    y: 0,
    pathType: 'negative'
  },
  {
    id: 2,
    year: '2009',
    title: 'Wendepunkt',
    description: 'Erste bewusste Auseinandersetzung mit der Essstörung',
    icon: <LightBulbIcon className="h-6 w-6" />,
    color: 'bg-amber-100 text-amber-600',
    x: 1,
    y: 0,
    isFork: true,
    connections: [
      { targetId: 3, label: 'Positiver Weg', color: 'green' },
      { targetId: 4, label: 'Negativer Weg', color: 'red' }
    ]
  },
  {
    id: 3,
    year: '2012',
    title: 'Heilung beginnt',
    description: 'Erste Schritte zur Genesung',
    icon: <SparklesIcon className="h-6 w-6" />,
    color: 'bg-green-100 text-green-600',
    x: 2,
    y: -1,
    pathType: 'positive',
    isMerge: true
  },
  {
    id: 4,
    year: '2012',
    title: 'Rückfall',
    description: 'Rückfall in alte Muster',
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    color: 'bg-red-100 text-red-600',
    x: 2,
    y: 1,
    pathType: 'negative',
    isMerge: true
  },
  {
    id: 5,
    year: '2014',
    title: 'Neubeginn',
    description: 'Neuer Anlauf zur Heilung',
    icon: <AcademicCapIcon className="h-6 w-6" />,
    color: 'bg-blue-100 text-blue-600',
    x: 3,
    y: 0,
    pathType: 'positive'
  },
  {
    id: 6,
    year: '2018',
    title: 'Berufung gefunden',
    description: 'Beginn der Tätigkeit als Coach',
    icon: <HeartIcon className="h-6 w-6" />,
    color: 'bg-purple-100 text-purple-600',
    x: 4,
    y: 0,
    pathType: 'positive'
  },
  {
    id: 7,
    year: '1989',
    title: 'Kindheitstrauma',
    description: 'Familiäre Gewalt und Todesandrohung prägen früh den Glaubenssatz: "Ich bin in Gefahr."',
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    color: 'bg-red-100 text-red-600',
    x: 5,
    y: 0,
    pathType: 'negative'
  },
  {
    id: 8,
    year: '1996',
    title: 'Beginn Bulimie & Kontrollverlust',
    description: 'Essstörung als Ventil – Isolation, Scham, Doppelleben. Niemand weiß davon.',
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    color: 'bg-red-100 text-red-600',
    x: 6,
    y: 0,
    pathType: 'negative'
  },
  {
    id: 9,
    year: '2001',
    title: 'Absturz durch Alkohol & Unfälle',
    description: 'MPU, Autounfälle. Innerer Schrei nach Hilfe wird überhört.',
    icon: <ExclamationTriangleIcon className="h-6 w-6" />,
    color: 'bg-red-100 text-red-600',
    x: 5,
    y: 0,
    pathType: 'negative'
  },
  {
    id: 4,
    year: '2003',
    title: 'Australien: Freiheit & Trauma',
    description: 'Reise bringt Luft & Leichtigkeit – aber auch Drogen & sexueller Übergriff.',
    icon: <GlobeAltIcon className="h-6 w-6" />,
    color: 'bg-amber-100 text-amber-600',
    x: 300,
    y: 0,
    pathType: 'negative'
  },
  {
    id: 11,
    year: '2009',
    title: 'Liebe & Seelenverbindung',
    description: 'Tiefe Beziehung mit einer Frau. Gefühl von Zuhause, Geborgenheit, echter Verbindung.',
    icon: <HeartIcon className="h-6 w-6" />,
    color: 'bg-green-100 text-green-600',
    x: 400,
    y: 0,
    pathType: 'positive',
    fork: {
      positive: {
        title: 'Positive Beziehungserfahrung',
        description: 'Lernt gesunde Beziehungen kennen und entwickelt Selbstwertgefühl',
        icon: <HeartIcon className="h-6 w-6" />,
        color: 'bg-green-100 text-green-600',
        y: 1
      },
      negative: {
        title: 'Negative Beziehungserfahrung',
        description: 'Verliert sich in der Beziehung, verleugnet eigene Bedürfnisse',
        icon: <HeartBrokenIcon className="h-6 w-6" />,
        color: 'bg-red-100 text-red-600',
        y: -1
      }
    }
  },
  {
    id: 12,
    year: '2014',
    title: 'Beziehung zerbricht & totale Krise',
    description: 'Plötzliche Trennung + Jobverlust → emotionale Zerstörung, Suizidgedanken.',
    icon: <ExclamationTriangleIcon className="h-6 w-6" />,
    color: 'bg-red-100 text-red-600',
    x: 500,
    y: 0,
    pathType: 'negative',
    mergePoint: true
  },
  {
    id: 13,
    year: '2015',
    title: 'Wendepunkt am Strand',
    description: 'In Australien manifestiert sie: gesund werden, unabhängig leben, neu anfangen.',
    icon: <LightBulbIcon className="h-6 w-6" />,
    color: 'bg-amber-100 text-amber-600',
    x: 11,
    y: 0,
    pathType: 'positive'
  },
  {
    id: 14,
    year: '2016',
    title: 'Erste eigene Wohnung',
    description: 'Sprung in Angst – Rückeroberung von Raum & Selbstverantwortung.',
    icon: <HomeIcon className="h-6 w-6" />,
    color: 'bg-green-100 text-green-600',
    x: 12,
    y: 0,
    pathType: 'positive'
  },
  {
    id: 15,
    year: '2017',
    title: 'Therapie & Selbsterkenntnis',
    description: 'Beginnt mit Psychotherapie. Versteht die Verbindung zwischen Kindheitstrauma & Essstörung.',
    icon: <LightBulbIcon className="h-6 w-6" />,
    color: 'bg-blue-100 text-blue-600',
    x: 13,
    y: 0,
    pathType: 'positive'
  },
  {
    id: 16,
    year: '2018',
    title: 'Berufliche Neuorientierung',
    description: 'Wechsel in den sozialen Bereich. Findet Sinn in der Arbeit mit Menschen.',
    icon: <BriefcaseIcon className="h-6 w-6" />,
    color: 'bg-indigo-100 text-indigo-600',
    x: 14,
    y: 0,
    pathType: 'positive'
  },
  {
    id: 17,
    year: '2019',
    title: 'Spirituelles Erwachen',
    description: 'Entdeckt Meditation & Spiritualität. Erkennt: Heilung ist möglich!',
    icon: <SparklesIcon className="h-6 w-6" />,
    color: 'bg-purple-100 text-purple-600',
    x: 15,
    y: 0,
    pathType: 'positive'
  },
  {
    id: 18,
    year: '2020',
    title: 'Ausbildung zur Coach',
    description: 'Beginnt Ausbildung zur systemischen Coach. Will anderen helfen, ihre Blockaden zu lösen.',
    icon: <AcademicCapIcon className="h-6 w-6" />,
    color: 'bg-pink-100 text-pink-600',
    x: 16,
    y: 0,
    pathType: 'positive'
  },
  {
    id: 19,
    year: '2021',
    title: 'Eigene Praxis',
    description: 'Macht sich selbstständig. Erfüllung durch die Arbeit mit Klient*innen.',
    icon: <UserGroupIcon className="h-6 w-6" />,
    color: 'bg-teal-100 text-teal-600',
    x: 17,
    y: 0,
    pathType: 'positive'
  },
  {
    id: 20,
    year: '2022',
    title: 'Heute',
    description: 'Lebt ein erfülltes Leben in Selbstliebe & Freiheit. Unterstützt andere auf ihrem Heilungsweg.',
    icon: <StarIcon className="h-6 w-6" />,
    color: 'bg-yellow-100 text-yellow-600',
    x: 18,
    y: 0,
    pathType: 'positive'
  }
];

export default function MeinWeg() {
  const [activePoint, setActivePoint] = useState<TimelinePoint | null>(null);

  const handlePointClick = (point: TimelinePoint) => {
    console.log('Point clicked:', point);
    setActivePoint(activePoint?.id === point.id ? null : point);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Mein Weg</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meine persönliche Reise der Heilung, des Wachstums und der spirituellen Entwicklung
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="h-[700px] relative">
            <TimelineV2 
              points={timelineData}
              onPointClick={handlePointClick}
              activePointId={activePoint?.id}
              className="h-full"
            />
          </div>
        </div>

        {activePoint && (
          <motion.div 
            className="mt-8 bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="flex items-start">
              <div className={`p-3 rounded-full bg-${activePoint.color}-100 mr-4`}>
                {React.cloneElement(activePoint.icon, { 
                  className: `w-8 h-8 text-${activePoint.color}-600` 
                })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{activePoint.title}</h3>
                <p className="text-gray-600 mt-1">{activePoint.year}</p>
                <p className="mt-2 text-gray-700">{activePoint.description}</p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mt-16 text-center">
          <a 
            href="/ueber-mich" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
          >
            Zurück zur Über mich Seite
            <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>

      {/* Section 2: Meine Geschichte */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Spiritueller Life Coach und ED Recovery Coach
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto mb-8">
              "Von 20 Jahren Kampf zur Heilung über Nacht: WIE ICH DURCH MEINE EIGENE HEILUNG HEUTE ANDERE BEGLEITE"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 max-w-2xl mx-auto md:mx-0 md:pr-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                  Meine Reise von der Krise in die Heilung und Selbstliebe
                </h3>
                
                <div className="space-y-6 text-gray-700">
                  <CollapsibleSection />
                  
                  <MeineWendeSection />
                  <MeineBerufungSection />
                </div>
              </div>

              <div className="pt-2">
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">Kostenloses Erstgespräch vereinbaren</span>
                  <span className="ml-3 relative z-10">
                    <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-600 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </Link>
              </div>
            </div>
            <div className="relative w-full">
              <div className="relative pb-[100%] h-0 w-full">
                <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
                  <Image
                    src="/images/carina-portrait.jpeg"
                    alt="Carina Göb - Spiritual Life Coach"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mein Ansatz */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-rose-100 rounded-full opacity-20"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Mein Ansatz – Embodiment als Schlüssel zur Transformation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-2xl mx-auto mb-12">
              "DEIN KÖRPER KENNT DEN WEG"
            </p>
            
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Heilung geschieht nicht alleine mit Entschlossenheit im Kopf – sie geschieht vor allem über den Körper und im Nervensystem. In meinem Coaching arbeiten wir mit Embodiment: bewusste Präsenz im Körper, Entwicklung von Körpervertrauen und die Öffnung für innere Heilung.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Körperwahrnehmung',
                description: 'Deine Körpersignale wieder bewusst wahrnehmen und verstehen lernen durch aktives Hinfühlen.',
                icon: <HeartIcon className="h-8 w-8 text-rose-600" />,
                color: 'bg-rose-50'
              },
              {
                title: 'Emotionale Resilienz',
                description: 'Stärkung deiner emotionalen Widerstandskraft, deiner Fähigkeit zur Selbstregulierung und inneren Stabilität.',
                icon: <SparklesIcon className="h-8 w-8 text-purple-600" />,
                color: 'bg-purple-50'
              },
              {
                title: 'Grenzen setzen',
                description: 'Gesunde Grenzen erkennen und selbstbewusst kommunizieren.',
                icon: <UserCircleIcon className="h-8 w-8 text-fuchsia-600" />,
                color: 'bg-fuchsia-50'
              },
              {
                title: 'Spirituelle Praxis',
                description: 'Alltagstaugliche, spirituelle Übungen für mehr Präsenz in deinem Körper und in deinem Leben.',
                icon: <LightBulbIcon className="h-8 w-8 text-amber-600" />,
                color: 'bg-amber-50'
              },
              {
                title: 'Weibliche Kraft',
                description: 'Deine weibliche Energie entdecken und authentisch leben.',
                icon: <AcademicCapIcon className="h-8 w-8 text-rose-600" />,
                color: 'bg-rose-50'
              },
              {
                title: 'Selbstführung',
                description: 'Dein Leben bewusst und aus deiner inneren Weisheit heraus gestalten.',
                icon: <BookOpenIcon className="h-8 w-8 text-purple-600" />,
                color: 'bg-purple-50'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <SummaryCollapsible />
        </div>
      </section>

      {/* Section 3: Meine Heilungsreise - Interactive Timeline */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-white to-rose-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Meine Heilungsreise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto">
              "VOM ANFANG BIS HEUTE - MEINE REISE ZU MIR SELBST"
            </p>
          </div>

          <div className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6">
            <div className="relative h-[500px] w-full">
              {/* Y-Axis Labels */}
              <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between">
                <span className="text-sm font-medium text-gray-600">+5</span>
                <span className="text-sm text-gray-500">0</span>
                <span className="text-sm text-gray-600">-5</span>
              </div>
              
              {/* Main Chart Area */}
              <div className="absolute left-12 right-0 top-0 bottom-0">
                <svg width="100%" height="100%" viewBox="0 0 800 500" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="50" x2="800" y2="50" stroke="#F3F4F6" strokeWidth="1" />
                  <line x1="0" y1="250" x2="800" y2="250" stroke="#F3F4F6" strokeWidth="1" />
                  <line x1="0" y1="450" x2="800" y2="450" stroke="#F3F4F6" strokeWidth="1" />
                  
                  {/* Gradient for the lines */}
                  <defs>
                    <linearGradient id="positive-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10B981" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="negative-line" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EF4444" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                  </defs>
                  
                  {/* Main Timeline Path */}
                  <polyline 
                    points="50,450 100,450 200,400 300,350 400,300 500,250 600,350 700,100 750,50" 
                    fill="none" 
                    stroke="#9CA3AF" 
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    className="opacity-50"
                  />
                  
                  {/* Draw the connecting lines */}
                  <polyline 
                    points="50,450 100,450 200,400 300,350 400,300" 
                    fill="none" 
                    stroke="#EF4444" 
                    strokeWidth="2"
                    className="opacity-70"
                  />
                  
                  {/* Forked paths */}
                  <path 
                    d="M 400 300 Q 425 300, 450 250" 
                    fill="none" 
                    stroke="#10B981" 
                    strokeWidth="2"
                    className="opacity-70"
                  />
                  <path 
                    d="M 400 300 Q 425 350, 450 350" 
                    fill="none" 
                    stroke="#EF4444" 
                    strokeWidth="2"
                    className="opacity-70"
                  />
                  
                  {/* Rejoin path */}
                  <path 
                    d="M 450 250 Q 475 250, 500 300" 
                    fill="none" 
                    stroke="#10B981" 
                    strokeWidth="2"
                    className="opacity-70"
                  />
                  <path 
                    d="M 450 350 Q 475 400, 500 450" 
                    fill="none" 
                    stroke="#EF4444" 
                    strokeWidth="2"
                    className="opacity-70"
                  />
                  
                  {/* Final path */}
                  <polyline 
                    points="500,450 550,350 600,300 650,200 700,150 750,100 800,50" 
                    fill="none" 
                    stroke="#10B981" 
                    strokeWidth="2"
                    className="opacity-70"
                  />
                  
                  {/* Data Points */}
                  {timelineData.map((point) => {
                    const y = 250 - (point.feeling * 40);
                    const isSelected = selectedPoint === point.id;
                    
                    return (
                      <g 
                        key={`${point.id}-${point.year}`} 
                        className="group cursor-pointer transition-all duration-200 hover:opacity-100" 
                        style={{ opacity: isSelected ? 1 : 0.9 }}
                        onClick={() => setSelectedPoint(point.id === selectedPoint ? null : point.id)}
                      >
                        <circle 
                          cx={point.x} 
                          cy={y} 
                          r={isSelected ? 8 : 6}
                          fill={
                            point.id === 12 ? "#EC4899" : 
                            point.pathType === 'positive' ? "#10B981" : 
                            point.pathType === 'negative' ? "#EF4444" : "#9CA3AF"
                          }
                          className={`transition-all duration-200 ${
                            point.pathType === 'positive' ? 'group-hover:fill-emerald-500' : 
                            point.pathType === 'negative' ? 'group-hover:fill-rose-500' : 'group-hover:fill-gray-500'
                          }`}
                        />
                        
                        <text 
                          x={point.x} 
                          y={y - 15} 
                          textAnchor="middle" 
                          className="text-xs font-medium fill-gray-700 group-hover:font-bold group-hover:fill-rose-700 transition-all"
                        >
                          {point.year}
                        </text>
                        
                        {/* Title on hover */}
                        <foreignObject 
                          x={point.x - 100} 
                          y={y + 20} 
                          width="200" 
                          height="60"
                          className="pointer-events-none"
                        >
                          <div className="text-center">
                            <div 
                              className={`text-sm font-medium ${
                                point.pathType === 'positive' ? 'text-emerald-700' : 
                                point.pathType === 'negative' ? 'text-rose-700' : 'text-gray-700'
                              }`}
                            >
                              {point.title}
                            </div>
                          </div>
                        </foreignObject>
                      </g>
                    );
                  })}
                  {/* Timeline Tooltip - Moved inside SVG */}
                  {timelineData.map((point) => {
                    const y = 100 + point.y * 80; // Calculate y position based on point data
                    const isSelected = selectedPoint === point.id;
                    
                    if (!isSelected) return null;
                    
                    return (
                      <foreignObject 
                        key={`tooltip-${point.id}`}
                        x={point.x * 100 - 100} 
                        y={y - 120}
                        width="200"
                        height="100"
                        className="pointer-events-none"
                      >
                        <div className="text-center transform transition-all duration-300 ease-out">
                          <div className="inline-block bg-white px-5 py-3 rounded-xl shadow-xl border-0 opacity-100 transition-all duration-300 transform translate-y-0">
                            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white transform rotate-45"></div>
                            <p className="text-base font-semibold text-rose-700 mb-1">{point.title}</p>
                            <div className="w-10 h-0.5 bg-gradient-to-r from-rose-200 to-fuchsia-200 mx-auto my-2"></div>
                            <p className="text-sm text-gray-600 leading-tight">{point.description}</p>
                          </div>
                        </div>
                      </foreignObject>
                    );
                  })}
                </svg>
              </div>
              
              {/* X-Axis Labels */}
              <div className="absolute left-12 right-0 bottom-0 h-8 flex justify-between px-4">
                <span className="text-xs text-gray-500">1989</span>
                <span className="text-xs text-gray-500">2000</span>
                <span className="text-xs text-gray-500">2010</span>
                <span className="text-xs text-gray-500">2020</span>
                <span className="text-xs text-gray-500">2025</span>
              </div>
            </div>
            
            {/* Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-rose-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Herausforderungen</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Wachstum & Heilung</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-pink-500 rounded-full mr-2"></div>
                <span className="text-sm text-gray-700">Heute</span>
              </div>
            </div>
            
            {/* Fork Explanation */}
            <div className="mt-8 p-4 bg-rose-50 rounded-lg border border-rose-100">
              <h4 className="font-medium text-rose-800 mb-2">Die Gabelung in meiner Reise (2009-2014)</h4>
              <p className="text-sm text-rose-700">
                Diese Phase zeigt die Spaltung zwischen meiner äußeren Fassade (glückliche Beziehung) und meinem inneren Kampf (Essstörung).
                Beide Wege führten 2014 zu einer tiefen Krise, die letztlich zu meiner Heilung führte.
              </p>
            </div>
          </div>
        </div>
      </section>
      
                    </g>
                  ))}
                  
                  <defs>
                    <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EC4899" />
                      <stop offset="100%" stopColor="#F43F5E" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* X-Axis Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4">
                  <span className="text-sm text-gray-600">Geburt</span>
                  <span className="text-sm text-gray-500">Kindheit</span>
                  <span className="text-sm text-gray-600">Jugend</span>
                  <span className="text-sm text-gray-500">Erwachsen</span>
                  <span className="text-sm text-rose-500 font-medium">Heute</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                Fahren Sie mit der Maus über die Punkte, um mehr über meine Reise zu erfahren.
              </p>
              <div className="mt-6 flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-gray-400 mr-2"></span>
                  <span className="text-sm text-gray-600">Vergangenheit</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-rose-500 mr-2"></span>
                  <span className="text-sm text-rose-600 font-medium">Heute</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed">
              Jede Reise hat ihren eigenen Rhythmus. Meine führte durch Höhen und Tiefen, bis ich schließlich meinen Weg zu wahrer Freiheit und Selbstakzeptanz fand.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <span className="inline-block w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-rose-400"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-rose-300"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Meine Vision & Philosophie */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-3">
              Meine Vision & Philosophie
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-4"></div>
            <p className="text-lg text-rose-800/90 italic max-w-2xl mx-auto">
              "WENN WIR UNS SELBST HEILEN, HEILEN WIR DIE WELT"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-fuchsia-100 flex items-center justify-center mb-4 mx-auto">
                <HeartIcon className="h-6 w-6 text-fuchsia-500" />
              </div>
              <h3 className="text-lg font-semibold text-rose-900 text-center mb-3">Deine innere Weisheit</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ich helfe dir, deine eigene innere Stimme wiederzuentdecken und ihr zu vertrauen – denn du trägst alle Antworten bereits in dir.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-fuchsia-50 p-6 rounded-xl border border-rose-100">
              <h3 className="text-lg font-semibold text-rose-900 text-center mb-4">Mein Ansatz</h3>
              <ul className="space-y-3">
                {[
                  { text: 'Achtsame Körperwahrnehmung' },
                  { text: 'Emotionale Selbstregulation' },
                  { text: 'Spirituelle Selbsterforschung' },
                  { text: 'Praktische Werkzeuge' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="ml-2 text-sm text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4 mx-auto">
                <LightBulbIcon className="h-6 w-6 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold text-rose-900 text-center mb-3">Ganzheitliche Heilung</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ein Ansatz, der Körper, Geist und Seele gleichermaßen einbezieht, für tiefgreifende und nachhaltige Veränderung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Mein Weg zu dir */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Mein Weg zu dir
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-2xl mx-auto">
              "AUTHENTIZITÄT VERBINDET – AUF AUGENHÖHE"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-rose-900 mb-4">Mein Versprechen an dich</h3>
                <p className="text-gray-700 mb-4">
                  Ich begegne dir mit der gleichen Ehrlichkeit und Verletzlichkeit, die ich mir selbst in meinem Heilungsprozess gewünscht hätte. Keine Floskeln, kein oberflächliches Coaching – sondern echte Begegnung auf Augenhöhe.
                </p>
                <p className="text-gray-700">
                  Ich teile nicht nur Wissen, sondern echte Erfahrung. Ich war dort, wo du vielleicht gerade stehst. Ich kenne die Ängste, die Zweifel, aber auch die Hoffnung, die dich hierher geführt hat.
                </p>
              </div>
              
              <div className="p-6 bg-rose-50 rounded-xl">
                <h4 className="font-medium text-rose-900 mb-2">Dein nächster Schritt</h4>
                <p className="text-gray-700 mb-4">
                  Du musst diesen Weg nicht alleine gehen. Ich lade dich ein, dich für ein unverbindliches Gespräch anzumelden, in dem wir herausfinden können, ob ich die richtige Begleiterin für dich bin.
                </p>
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-rose-500 to-fuchsia-500 hover:from-rose-600 hover:to-fuchsia-600 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Termin vereinbaren
                  <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-rose-900 mb-4">Was dich erwartet</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'Sichere Umgebung', text: 'Ein Raum ohne Bewertung, in dem du ganz du selbst sein kannst.' },
                    { title: 'Individueller Ansatz', text: 'Kein Schema F – wir finden gemeinsam, was für dich funktioniert.' },
                    { title: 'Praktische Werkzeuge', text: 'Konkrete Übungen, die du sofort in deinen Alltag integrieren kannst.' },
                    { title: 'Nachhaltige Veränderung', text: 'Keine schnellen Lösungen, sondern echte, tiefgreifende Transformation.' }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckIcon className="h-4 w-4 text-rose-500" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-gray-600">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Jenseits der Heilung - Redesigned */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-rose-700 bg-rose-50 rounded-full mb-4">Mein Weg</span>
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-6">
              Jenseits der Heilung
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-rose-700/90 italic max-w-2xl mx-auto">
              "Heilung ist der Anfang, nicht das Ende"
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-50 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-rose-100 to-fuchsia-100 flex items-center justify-center">
                      <SparklesIcon className="h-6 w-6 text-rose-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Meine Reise des Lernens</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Meine persönliche Heilung war erst der Anfang. Danach begann mein Weg des Lernens, Lehrens und Erforschens. Internationale Erfahrungen in Bali, Italien und der Schweiz haben meinen Horizont erweitert und meinen Ansatz geprägt.
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-rose-50 p-4 rounded-xl border border-rose-100">
                    <div className="flex items-center mb-3">
                      <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center mr-3">
                        <CheckIcon className="h-4 w-4 text-rose-600" />
                      </div>
                      <h4 className="font-medium text-gray-900">Körperarbeit</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">Sanfte Methoden für tiefe körperliche Heilung und Wohlbefinden</p>
                  </div>
                  
                  <div className="bg-fuchsia-50 p-4 rounded-xl border border-fuchsia-100">
                    <div className="flex items-center mb-3">
                      <div className="h-8 w-8 rounded-full bg-fuchsia-100 flex items-center justify-center mr-3">
                        <CheckIcon className="h-4 w-4 text-fuchsia-600" />
                      </div>
                      <h4 className="font-medium text-gray-900">Spirituelle Entwicklung</h4>
                    </div>
                    <p className="text-sm text-gray-600 ml-11">Tiefe Verbindung zu deinem inneren Selbst und höherem Bewusstsein</p>
                      <div className="relative">
                        <GlobeAltIcon className="h-16 w-16 text-rose-500" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                          <div className="h-2 w-2 bg-rose-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-rose-900 mb-4">Internationale Erfahrung</h3>
                    <p className="text-gray-600 mb-6">
                      Geprägt von Lehren aus Bali, Italien, der Schweiz und darüber hinaus
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                      <span className="px-3 py-1 text-sm bg-white text-rose-700 rounded-full border border-rose-100">Bali</span>
                      <span className="px-3 py-1 text-sm bg-white text-fuchsia-700 rounded-full border border-fuchsia-100">Italien</span>
                      <span className="px-3 py-1 text-sm bg-white text-rose-600 rounded-full border border-rose-100">Schweiz</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-rose-100 rounded-full opacity-30"></div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-fuchsia-100 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500 to-fuchsia-500 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-0.5">
              <span className="font-medium">Entdecke deinen Heilungsweg</span>
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Mein Ansatz */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Mein ganzheitlicher Ansatz
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic">
              "KÖRPER, GEIST, HERZ UND SEELE IM EINKLANG"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Körperarbeit',
                items: ['Somatische Körperarbeit', 'Rebalancing', 'Atemarbeit'],
                icon: <HeartIcon className="h-8 w-8 text-rose-500" />,
                bgGradient: 'from-rose-50 to-rose-50',
                textColor: 'text-rose-500',
                iconColor: 'text-rose-500'
              },
              {
                title: 'Geist & Psyche',
                items: ['Inneres Familiensystem (IFS)', 'Spiritual Inquiry', 'Präsenztraining'],
                icon: <LightBulbIcon className="h-8 w-8 text-fuchsia-500" />,
                bgGradient: 'from-fuchsia-50 to-fuchsia-50',
                textColor: 'text-fuchsia-500',
                iconColor: 'text-fuchsia-500'
              },
              {
                title: 'Spiritualität',
                items: ['Meditation', 'Bewusstseinsarbeit', 'Energiearbeit'],
                icon: <SparklesIcon className="h-8 w-8 text-purple-500" />,
                bgGradient: 'from-purple-50 to-purple-50',
                textColor: 'text-purple-500',
                iconColor: 'text-purple-500'
              }
            ].map((category, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`p-6 bg-gradient-to-r ${category.bgGradient}`}>
                  <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 mx-auto">
                    {React.cloneElement(category.icon, { className: `h-8 w-8 ${category.iconColor}` })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-center">
                        <CheckIcon className={`h-5 w-5 ${category.textColor} mr-2`} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Dein nächster Schritt */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
                Dein nächster Schritt
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
              <p className="text-xl text-rose-800/90 italic mb-8">
                "DER ERSTE SCHRITT IST IMMER DER WICHTIGSTE"
              </p>
            </div>
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-700">
                Vielleicht stehst du an einem Wendepunkt. Vielleicht spürst du, dass da mehr ist. Vielleicht bist du bereit, dich selbst neu zu entdecken.
              </p>
              
              <div className="p-6 bg-rose-50 rounded-xl">
                <p className="text-lg text-rose-900 font-medium mb-2 text-center">
                  Was auch immer dich hierher geführt hat – du bist willkommen.
                </p>
                <p className="text-gray-700 text-center">
                  Du musst nicht perfekt sein, nicht „funktionieren“, um diesen Weg zu gehen. Alles, was du brauchst, ist bereits in dir. Ich helfe dir, dich daran zu erinnern.
                </p>
              </div>
              
              <p className="text-lg font-medium text-rose-900 text-center mb-8">
                Ich lade dich herzlich zu einem kostenfreien Gespräch ein – um herauszufinden, wie ich dich auf deinem Weg begleiten kann.
              </p>
              
              <div className="flex justify-center mt-8">
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span className="mr-2">Jetzt Termin vereinbaren</span>
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
