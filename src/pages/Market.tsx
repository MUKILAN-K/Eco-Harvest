import React from 'react';
import { Layout } from '../components/Layout';
import { LineChart, ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';

interface MarketPrice {
  crop: string;
  currentPrice: number;
  change: number;
  trend: 'up' | 'down';
  prediction: string;
}

const MARKET_DATA: MarketPrice[] = [
  {
    crop: "Rice",
    currentPrice: 2500,
    change: 3.5,
    trend: 'up',
    prediction: "Expected to rise by 5% next month"
  },
  {
    crop: "Wheat",
    currentPrice: 2200,
    change: -1.2,
    trend: 'down',
    prediction: "Stable prices expected"
  }
];

export function Market() {
  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Market Prices</h1>
          <div className="flex items-center text-sm text-gray-500">
            <TrendingUp className="h-5 w-5 mr-2" />
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>

        {/* Price Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {MARKET_DATA.map((item) => (
            <div key={item.crop} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{item.crop}</h3>
                <LineChart className="h-5 w-5 text-gray-400" />
              </div>
              <div className="mt-4">
                <div className="text-2xl font-bold text-gray-900">₹{item.currentPrice}</div>
                <div className={`flex items-center mt-2 ${
                  item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.trend === 'up' ? (
                    <ArrowUp className="h-4 w-4" />
                  ) : (
                    <ArrowDown className="h-4 w-4" />
                  )}
                  <span className="ml-1">{Math.abs(item.change)}%</span>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-600">
                {item.prediction}
              </div>
            </div>
          ))}
        </div>

        {/* Market Insights */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Market Insights</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Price Trends</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Agricultural commodity prices are showing an upward trend due to increased demand.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                  <LineChart className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-sm font-medium text-gray-900">Market Analysis</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Export demand is driving prices higher for major agricultural commodities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}