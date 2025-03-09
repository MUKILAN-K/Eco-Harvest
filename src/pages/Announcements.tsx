import React from 'react';
import { Layout } from '../components/Layout';
import { 
  Bell, 
  Calendar,
  CloudLightning,
  Megaphone,
  AlertTriangle,
  Tag,
  ExternalLink
} from 'lucide-react';

interface Announcement {
  id: number;
  title: string;
  description: string;
  date: string;
  type: 'event' | 'weather' | 'update' | 'alert';
  link?: string;
  urgent?: boolean;
}

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 1,
    title: "Agricultural Technology Expo 2024",
    description: "Join us for the largest agricultural technology exhibition in the region. Learn about the latest farming innovations and network with industry experts.",
    date: "2024-04-15",
    type: "event",
    link: "https://agriexpo2024.com"
  },
  {
    id: 2,
    title: "Heavy Rainfall Alert",
    description: "Heavy rainfall expected in the northern regions over the next 48 hours. Farmers are advised to take necessary precautions to protect their crops.",
    date: "2024-03-20",
    type: "weather",
    urgent: true
  },
  {
    id: 3,
    title: "New Feature: AI Crop Disease Detection",
    description: "We've launched a new feature that uses AI to detect crop diseases from photos. Try it out in the Disease Detection section!",
    date: "2024-03-18",
    type: "update"
  },
  {
    id: 4,
    title: "Pest Alert: Locust Swarms",
    description: "Locust swarms spotted in neighboring regions. Stay vigilant and report any sightings to local agricultural authorities.",
    date: "2024-03-15",
    type: "alert",
    urgent: true
  }
];

function AnnouncementIcon({ type }: { type: Announcement['type'] }) {
  switch (type) {
    case 'event':
      return <Calendar className="h-6 w-6 text-blue-500" />;
    case 'weather':
      return <CloudLightning className="h-6 w-6 text-yellow-500" />;
    case 'update':
      return <Megaphone className="h-6 w-6 text-green-500" />;
    case 'alert':
      return <AlertTriangle className="h-6 w-6 text-red-500" />;
    default:
      return <Bell className="h-6 w-6 text-gray-500" />;
  }
}

function AnnouncementBadge({ type }: { type: Announcement['type'] }) {
  const styles = {
    event: "bg-blue-100 text-blue-800",
    weather: "bg-yellow-100 text-yellow-800",
    update: "bg-green-100 text-green-800",
    alert: "bg-red-100 text-red-800"
  };

  const labels = {
    event: "Event",
    weather: "Weather",
    update: "Update",
    alert: "Alert"
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[type]}`}>
      {labels[type]}
    </span>
  );
}

export function Announcements() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Announcements</h1>
            <p className="mt-1 text-sm text-gray-500">
              Stay updated with the latest agricultural news and alerts
            </p>
          </div>
          <Tag className="h-6 w-6 text-gray-400" />
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {ANNOUNCEMENTS.map((announcement) => (
            <div
              key={announcement.id}
              className={`bg-white shadow rounded-lg overflow-hidden border-l-4 ${
                announcement.urgent ? 'border-red-500' : 'border-gray-200'
              }`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <AnnouncementIcon type={announcement.type} />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">
                        {announcement.title}
                      </h3>
                      <div className="mt-1 flex items-center space-x-2">
                        <AnnouncementBadge type={announcement.type} />
                        <span className="text-sm text-gray-500">
                          {new Date(announcement.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  {announcement.urgent && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Urgent
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm text-gray-600">
                  {announcement.description}
                </p>

                {announcement.link && (
                  <div className="mt-4">
                    <a
                      href={announcement.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500"
                    >
                      Learn More
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="bg-green-50 rounded-lg p-6">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <Bell className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-3">
              <h3 className="text-lg font-medium text-green-900">
                Stay Informed
              </h3>
              <p className="mt-2 text-sm text-green-700">
                Subscribe to receive instant notifications for urgent announcements and important updates.
              </p>
              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Enable Notifications
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}