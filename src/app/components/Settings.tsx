import { useState } from "react";
import { Save, MapPin, Bell, Users, Database, FileText, Globe } from "lucide-react";

const cities = ["Chennai", "Mumbai", "Delhi", "Kolkata", "Bangalore", "Hyderabad"];
const languages = ["English", "Tamil", "Hindi", "Telugu", "Kannada", "Bengali"];
const userRoles = ["Admin", "Planner", "Field Worker", "School User", "Health Worker"];
const dataSources = ["Municipal Records", "Satellite Data", "Community Surveys", "IoT Sensors", "Health Department"];

export function Settings() {
  const [selectedCity, setSelectedCity] = useState("Chennai");
  const [primaryLanguage, setPrimaryLanguage] = useState("English");
  const [secondaryLanguage, setSecondaryLanguage] = useState("Tamil");
  const [userRole, setUserRole] = useState("Admin");

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Settings</h1>
          <p className="text-gray-600">Configure your Phaarvai deployment and preferences</p>
        </div>

        <div className="space-y-6">
          {/* Location Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MapPin className="text-blue-700" size={24} />
              </div>
              <h2 className="text-xl">Location Settings</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">City / District</label>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Region/State</label>
                <input
                  type="text"
                  defaultValue="Tamil Nadu"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Climate Zone</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Tropical Coastal</option>
                  <option>Tropical Inland</option>
                  <option>Semi-Arid</option>
                  <option>Temperate</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Total Population</label>
                <input
                  type="text"
                  defaultValue="7,088,000"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Language Preferences */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Globe className="text-purple-700" size={24} />
              </div>
              <h2 className="text-xl">Language Preferences</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Primary Language</label>
                <select
                  value={primaryLanguage}
                  onChange={(e) => setPrimaryLanguage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Secondary Language</label>
                <select
                  value={secondaryLanguage}
                  onChange={(e) => setSecondaryLanguage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-4">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>Enable automatic translation for community guidance messages</span>
              </label>
            </div>
          </div>

          {/* User Roles & Access */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 rounded-lg">
                <Users className="text-green-700" size={24} />
              </div>
              <h2 className="text-xl">User Roles & Access</h2>
            </div>

            <div className="mb-4">
              <label className="block text-sm text-gray-700 mb-2">Your Role</label>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              >
                {userRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm mb-2">Role Permissions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-gray-50 rounded-lg text-sm">
                  <div className="mb-1">Admin</div>
                  <p className="text-xs text-gray-600">Full access to all features and settings</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-sm">
                  <div className="mb-1">Planner</div>
                  <p className="text-xs text-gray-600">Resource allocation, reports, site management</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-sm">
                  <div className="mb-1">Field Worker</div>
                  <p className="text-xs text-gray-600">Site updates, community feedback, guidance access</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg text-sm">
                  <div className="mb-1">School User</div>
                  <p className="text-xs text-gray-600">View school-specific risks and guidance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Data Sources */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Database className="text-orange-700" size={24} />
              </div>
              <h2 className="text-xl">Data Sources Connected</h2>
            </div>

            <div className="space-y-3">
              {dataSources.map((source, index) => (
                <div key={source} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${index < 3 ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                    <span className="text-sm">{source}</span>
                  </div>
                  <span className="text-xs text-gray-600">
                    {index < 3 ? 'Connected' : 'Not connected'}
                  </span>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
              Add New Data Source
            </button>
          </div>

          {/* Alert Thresholds */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-100 rounded-lg">
                <Bell className="text-red-700" size={24} />
              </div>
              <h2 className="text-xl">Alert Thresholds</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Heat Risk Alert Threshold (°C)</label>
                <input
                  type="number"
                  defaultValue="42"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Flood Risk Alert Level</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>High (75+)</option>
                  <option>Critical (85+)</option>
                  <option>Extreme (95+)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Air Quality Alert (AQI)</label>
                <input
                  type="number"
                  defaultValue="150"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>Send SMS alerts to field workers</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>Email reports to planning team</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                <span>Push notifications to mobile app</span>
              </label>
            </div>
          </div>

          {/* Report Branding */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-100 rounded-lg">
                <FileText className="text-teal-700" size={24} />
              </div>
              <h2 className="text-xl">Report Branding</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Organization Name</label>
                <input
                  type="text"
                  defaultValue="Chennai Municipal Corporation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Department</label>
                <input
                  type="text"
                  defaultValue="Climate Resilience & Health"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Logo Upload</label>
                <input
                  type="file"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Report Footer Text</label>
                <input
                  type="text"
                  defaultValue="Powered by Phaarvai"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Community Feedback */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <Users className="text-indigo-700" size={24} />
              </div>
              <h2 className="text-xl">Community Feedback Collection</h2>
            </div>

            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>Enable SMS feedback from parents and caregivers</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>Allow field workers to submit real-time site updates</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" />
                <span>Public community suggestion portal</span>
              </label>
              <label className="flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded" defaultChecked />
                <span>Anonymous feedback option</span>
              </label>
            </div>
          </div>

          {/* Open Source Deployment */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gray-100 rounded-lg">
                <Database className="text-gray-700" size={24} />
              </div>
              <h2 className="text-xl">Open-Source Deployment Settings</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">Deployment Type</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>Cloud-hosted (AWS/Azure/GCP)</option>
                  <option>Local server deployment</option>
                  <option>Hybrid (local + cloud backup)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">Data Storage Location</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                  <option>India (Mumbai region)</option>
                  <option>Local municipal server</option>
                  <option>Multi-region backup</option>
                </select>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-700">
                All code, models, and configurations are available on GitHub. You can fork, customize, and
                deploy your own instance while contributing improvements back to the community.
              </p>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              <Save size={16} />
              Save Settings
            </button>
            <button className="px-6 py-3 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
