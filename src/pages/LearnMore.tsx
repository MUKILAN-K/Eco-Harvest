import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Target, Shield, Zap } from 'lucide-react';

export function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-8">
            Why Choose EcoHarvest?
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
            Discover how EcoHarvest is revolutionizing agriculture with smart technology, data-driven insights, and a supportive farming community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Leaf className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Sustainable Farming</h3>
            </div>
            <p className="text-gray-600">
              Our platform promotes environmentally friendly farming practices while maximizing your yield and profit.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Precision Agriculture</h3>
            </div>
            <p className="text-gray-600">
              Use data-driven insights to make informed decisions about planting, irrigation, and harvesting.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Shield className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Risk Management</h3>
            </div>
            <p className="text-gray-600">
              Protect your farm with advanced weather forecasting and crop insurance recommendations.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold ml-4">Smart Automation</h3>
            </div>
            <p className="text-gray-600">
              Automate routine tasks and monitoring with our integrated smart farming solutions.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
          >
            Start Your Journey
          </Link>
          <div className="mt-4">
            <Link to="/" className="text-green-600 hover:text-green-500">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}