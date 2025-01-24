import React from 'react';
import { PenTool as Tool, Settings, Package, GitBranch, Terminal, Download } from 'lucide-react';

const BuildSystem = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Système de Build</h2>
          <p className="mt-4 text-xl text-gray-600">
            Version {`2024.07`} - Un système de compilation avancé et flexible
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Settings className="text-blue-500" size={32} />}
            title="Configuration Flexible"
            description="Gestion avancée des toolchains et des profils de compilation"
            features={[
              "Support multi-toolchains",
              "Profils personnalisables",
              "Options de compilation modulaires",
              "Configuration automatique"
            ]}
          />
          
          <FeatureCard
            icon={<Package className="text-green-500" size={32} />}
            title="Gestion des Dépendances"
            description="Organisation intelligente des composants et dépendances"
            features={[
              "Gestion des patchs",
              "Support des modules",
              "Archives et backups",
              "Téléchargements automatisés"
            ]}
          />

          <FeatureCard
            icon={<Terminal className="text-purple-500" size={32} />}
            title="Interface Utilisateur"
            description="Interface en ligne de commande intuitive et puissante"
            features={[
              "Menu interactif",
              "Support multilingue",
              "Logs détaillés",
              "Diagnostics système"
            ]}
          />

          <FeatureCard
            icon={<GitBranch className="text-orange-500" size={32} />}
            title="Gestion des Sources"
            description="Contrôle complet sur les sources et les versions"
            features={[
              "Support multi-repos",
              "Gestion des versions",
              "Backup automatique",
              "Mise à jour simplifiée"
            ]}
          />

          <FeatureCard
            icon={<Tool className="text-red-500" size={32} />}
            title="Outils de Développement"
            description="Suite complète d'outils pour les développeurs"
            features={[
              "Éditeur de configuration",
              "Vérification système",
              "Réparation automatique",
              "Outils de diagnostic"
            ]}
          />

          <FeatureCard
            icon={<Download className="text-indigo-500" size={32} />}
            title="Déploiement"
            description="Options de déploiement et d'installation flexibles"
            features={[
              "Installation automatisée",
              "Profils SSH",
              "Upload configurable",
              "Vérification post-installation"
            ]}
          />
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Structure du Projet</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DirectoryCard
              name="support/"
              items={[
                "configs/",
                "patches/",
                "profiles/",
                "toolchains/",
                "downloads/"
              ]}
            />
            <DirectoryCard
              name="functions/"
              items={[
                "Build system",
                "Toolchain management",
                "Profile handling",
                "System checks"
              ]}
            />
            <DirectoryCard
              name="features/"
              items={[
                "Multi-language support",
                "Modular design",
                "Automatic updates",
                "Backup system"
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
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
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-gray-50 rounded-lg">{icon}</div>
      <h3 className="text-xl font-bold text-gray-900 ml-3">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4 text-sm">{description}</p>
    <ul className="space-y-2">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-700 text-sm">
          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mr-2"></div>
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const DirectoryCard = ({ name, items }: { name: string; items: string[] }) => (
  <div className="bg-gray-50 rounded-lg p-4">
    <h4 className="text-lg font-semibold text-gray-900 mb-3">{name}</h4>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-gray-600 text-sm flex items-center">
          <div className="w-1 h-1 bg-gray-400 rounded-full mr-2"></div>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default BuildSystem;