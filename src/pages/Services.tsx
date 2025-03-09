import React from 'react';
import { Layout } from '../components/Layout';
import { FlaskRound as Flask, Sprout, Bug, Phone, Calendar, Clock, ChevronRight, AlertCircle } from 'lucide-react';

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: React.ElementType;
  available: boolean;
}

const SERVICES: Service[] = [
  {
    id: 1,
    name: "Soil Testing",
    description: "Comprehensive soil analysis including pH, nutrients, and organic matter content.",
    price: "₹1,499",
    duration: "3-5 days",
    icon: Flask,
    available: true
  },
  {
    id: 2,
    name: "Fertilizer Recommendations",
    description: "Personalized fertilizer schedule based on your soil test and crop requirements.",
    price: "₹999",
    duration: "2-3 days",
    icon: Sprout,
    available: true
  },
  {
    id: 3,
    name: "Pest & Disease Diagnosis",
    description: "Expert analysis of crop health issues with treatment recommendations.",
    price: "₹799",
    duration: "24-48 hours",
    icon: Bug,
    available: true
  },
  {
    id: 4,
    name: "Expert Consultation",
    description: "One-on-one video consultation with agricultural experts.",
    price: "₹1,999",
    duration: "1 hour",
    icon: Phone,
    available: true
  }
];

export function Services() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Agricultural Services</h1>
            <p className="mt-1 text-sm text-gray-500">
              Professional services to optimize your farming operations
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-100 text-green-600">
                      <service.icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    <span>Duration: {service.duration}</span>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                    <span>Next available slot: Today</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900">{service.price}</span>
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Book Now
                    <ChevronRight className="ml-2 -mr-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                Important Information
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>All services require prior booking</li>
                  <li>Cancellations must be made 24 hours in advance</li>
                  <li>Service prices may vary based on land size and location</li>
                  <li>Expert consultation includes a detailed report</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}