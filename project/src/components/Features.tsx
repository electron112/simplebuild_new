import React from 'react';
import { Zap, Shield, Star } from 'lucide-react';

const Features = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Amazing Features</h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover what makes our application special
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Zap className="text-yellow-500" size={32} />}
            title="Lightning Fast"
            description="Experience blazing fast performance with our optimized application"
          />
          <FeatureCard
            icon={<Shield className="text-green-500" size={32} />}
            title="Secure"
            description="Your data is protected with enterprise-grade security"
          />
          <FeatureCard
            icon={<Star className="text-purple-500" size={32} />}
            title="User Friendly"
            description="Intuitive interface designed with users in mind"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

export default Features;