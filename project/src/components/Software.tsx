import React from 'react';
import { Code, Shield, Terminal, Cpu } from 'lucide-react';

const Software = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Nos Logiciels</h2>
          <p className="mt-4 text-xl text-gray-600">
            Une suite complète d'outils de sécurité et de développement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <SoftwareCard
            icon={<Shield className="text-red-500" size={40} />}
            title="ParrotOS Security"
            description="Distribution Linux axée sur la sécurité, le pentest et le développement"
            features={[
              "Tests de pénétration",
              "Analyse de sécurité",
              "Outils de développement",
              "Interface personnalisée"
            ]}
          />
          <SoftwareCard
            icon={<Terminal className="text-blue-500" size={40} />}
            title="Terminal Avancé"
            description="Interface en ligne de commande optimisée pour la productivité"
            features={[
              "Multi-terminal",
              "Personnalisation avancée",
              "Intégration Git",
              "Autocomplétion intelligente"
            ]}
          />
          <SoftwareCard
            icon={<Code className="text-green-500" size={40} />}
            title="IDE Sécurisé"
            description="Environnement de développement intégré avec focus sur la sécurité"
            features={[
              "Analyse de code en temps réel",
              "Détection de vulnérabilités",
              "Support multi-langage",
              "Débogage avancé"
            ]}
          />
          <SoftwareCard
            icon={<Cpu className="text-purple-500" size={40} />}
            title="Outils d'Analyse"
            description="Suite d'outils pour l'analyse et le monitoring système"
            features={[
              "Analyse de performance",
              "Monitoring réseau",
              "Diagnostic système",
              "Rapports détaillés"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const SoftwareCard = ({
  icon,
  title,
  description,
  features
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}) => (
  <div className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-center mb-6">
      <div className="p-3 bg-white rounded-lg shadow-md">{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 ml-4">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

export default Software;