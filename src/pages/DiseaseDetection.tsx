import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Upload, Image, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

export function DiseaseDetection() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  const analyzeDisease = () => {
    if (!selectedImage) return;
    setIsProcessing(true);

    setTimeout(() => {
      // Simulated AI result (replace this with actual AI model integration)
      setResult("Powdery Mildew detected. Recommended treatment: Apply sulfur-based fungicide.");
      setIsProcessing(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">AI-Based Disease Detection</h1>
            <p className="mt-1 text-sm text-gray-500">
              Upload an image of the affected plant leaf to detect diseases and get treatment recommendations.
            </p>
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="bg-white shadow rounded-lg p-6">
          <label className="block text-sm font-medium text-gray-700">Upload an Image</label>
          <div className="mt-2 flex items-center space-x-3">
            <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="fileInput" />
            <label htmlFor="fileInput" className="cursor-pointer inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Upload className="h-5 w-5 mr-2" />
              Select Image
            </label>
            {selectedImage && <Image className="h-6 w-6 text-green-600" />}
          </div>

          {selectedImage && (
            <p className="mt-2 text-sm text-gray-500">Selected: {selectedImage.name}</p>
          )}
        </div>

        {/* Analyze Button */}
        <button
          onClick={analyzeDisease}
          disabled={!selectedImage || isProcessing}
          className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
            isProcessing ? 'bg-gray-400' : 'bg-green-600 hover:bg-green-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
        >
          {isProcessing ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <CheckCircle2 className="h-5 w-5 mr-2" />}
          {isProcessing ? "Processing..." : "Analyze Disease"}
        </button>

        {/* Analysis Result */}
        {result && (
          <div className="mt-6 bg-green-50 border-l-4 border-green-400 p-4 rounded-md">
            <div className="flex">
              <div className="flex-shrink-0">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">Analysis Result</h3>
                <p className="mt-2 text-sm text-green-700">{result}</p>
              </div>
            </div>
          </div>
        )}

        {/* Important Notice */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md">
          <div className="flex">
            <div className="flex-shrink-0">
              <AlertCircle className="h-5 w-5 text-yellow-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">Important Notes</h3>
              <div className="mt-2 text-sm text-yellow-700">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ensure the image is clear and focused on the affected area.</li>
                  <li>The AI model provides recommendations based on patterns but always consult an expert.</li>
                  <li>For severe cases, use certified agricultural products as prescribed.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
