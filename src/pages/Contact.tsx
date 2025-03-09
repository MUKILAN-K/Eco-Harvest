import React from "react";
import { Layout } from "../components/Layout";

export function Contact() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto py-10">
        <h1 className="text-2xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          Have questions? Feel free to reach out!
        </p>
        <div className="mt-4">
          <p>Email: support@example.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      </div>
    </Layout>
  );
}
