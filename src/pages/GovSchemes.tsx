import React from 'react';
import { Layout } from '../components/Layout';
import { 
  Building2, 
  FileText, 
  Calendar, 
  Users, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Download
} from 'lucide-react';

interface Scheme {
  id: number;
  name: string;
  description: string;
  eligibility: string[];
  benefits: string[];
  deadline: string;
  status: 'active' | 'upcoming' | 'closed';
  documentationUrl: string;
}

const SCHEMES: Scheme[] = [
  {
    id: 1,
    name: "PM-KISAN",
    description: "Direct income support of ₹6,000 per year to eligible farmer families",
    eligibility: [
      "Small and marginal farmers",
      "Own cultivable land",
      "Valid identification documents"
    ],
    benefits: [
      "₹6,000 annual financial benefit",
      "Direct bank transfer",
      "No intermediaries"
    ],
    deadline: "2024-12-31",
    status: "active",
    documentationUrl: "https://pmkisan.gov.in"
  },
  {
    id: 2,
    name: "Soil Health Card Scheme",
    description: "Free soil testing and recommendations for farmers",
    eligibility: [
      "All farmers",
      "Registered agricultural land",
      "Valid farmer ID"
    ],
    benefits: [
      "Free soil testing",
      "Customized crop recommendations",
      "Increased yield through proper input use"
    ],
    deadline: "2024-06-30",
    status: "active",
    documentationUrl: "https://soilhealth.gov.in"
  }
];

function StatusBadge({ status }: { status: Scheme['status'] }) {
  const styles = {
    active: "bg-green-100 text-green-800",
    upcoming: "bg-blue-100 text-blue-800",
    closed: "bg-gray-100 text-gray-800"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
}

export function GovSchemes() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Government Schemes</h1>
            <p className="mt-1 text-sm text-gray-500">
              Latest agricultural policies and financial aid programs
            </p>
          </div>
        </div>

        {/* Schemes Grid */}
        <div className="grid grid-cols-1 gap-6">
          {SCHEMES.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-white shadow rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Building2 className="h-6 w-6 text-green-600" />
                    <h3 className="ml-3 text-lg font-medium text-gray-900">
                      {scheme.name}
                    </h3>
                  </div>
                  <StatusBadge status={scheme.status} />
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  {scheme.description}
                </p>

                <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                  {/* Eligibility */}
                  <div>
                    <h4 className="flex items-center text-sm font-medium text-gray-900">
                      <Users className="h-5 w-5 mr-2 text-gray-400" />
                      Eligibility Criteria
                    </h4>
                    <ul className="mt-2 text-sm text-gray-500 space-y-2">
                      {scheme.eligibility.map((criteria, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                          {criteria}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="flex items-center text-sm font-medium text-gray-900">
                      <FileText className="h-5 w-5 mr-2 text-gray-400" />
                      Benefits
                    </h4>
                    <ul className="mt-2 text-sm text-gray-500 space-y-2">
                      {scheme.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-5 w-5 mr-2 text-gray-400" />
                    Application Deadline: {new Date(scheme.deadline).toLocaleDateString()}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={scheme.documentationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Documentation
                      <ExternalLink className="ml-2 -mr-1 h-4 w-4" />
                    </a>
                    <button
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Apply Now
                      <Download className="ml-2 -mr-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notice */}
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
                  <li>Keep your documents ready before applying</li>
                  <li>Verify eligibility criteria carefully</li>
                  <li>Submit applications before the deadline</li>
                  <li>Contact support for assistance with applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}