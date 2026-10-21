import { Link } from "react-router";
import { AlertCircle, MapPin, Users, Thermometer, Droplet, Wind, Droplets, ArrowLeft, Plus, FileText } from "lucide-react";

const interventions = [
  { id: 1, title: "Install shaded waiting/play area", priority: "High" },
  { id: 2, title: "Add emergency drinking water point", priority: "High" },
  { id: 3, title: "Create heat-day school schedule", priority: "Medium" },
  { id: 4, title: "Mark flood-safe access route", priority: "High" },
  { id: 5, title: "Send Tamil preparedness guidance to caregivers", priority: "Medium" },
];

export function SiteProfile() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-5xl mx-auto">
        {/* Back Button */}
        <Link
          to="/priority-sites"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6"
        >
          <ArrowLeft size={16} />
          Back to Priority Sites
        </Link>

        {/* Header */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl mb-2">Chennai Primary School</h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={16} />
                <span>Ward 42, North Chennai</span>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-600 mb-1">Priority Score</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl">92</span>
                <span className="text-xl text-gray-600">/ 100</span>
              </div>
              <div className="inline-block mt-2 px-3 py-1 bg-red-600 text-white rounded-full text-sm">
                Critical Priority
              </div>
            </div>
          </div>

          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-red-600" style={{ width: '92%' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl mb-4">Key Metrics</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="text-blue-700" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Children Served</div>
                    <div className="text-2xl">620</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <MapPin className="text-purple-700" size={20} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Nearest Clinic Distance</div>
                    <div className="text-2xl">2.4 km</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Facility Assessment */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl mb-4">Facility Assessment</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Thermometer size={16} className="text-orange-600" />
                    <span className="text-sm">Cooling access</span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-red-100 text-red-700 rounded">Limited</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Wind size={16} className="text-gray-600" />
                    <span className="text-sm">Shade coverage</span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-red-100 text-red-700 rounded">Low</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Droplet size={16} className="text-blue-600" />
                    <span className="text-sm">Flood access risk</span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-red-100 text-red-700 rounded">High</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Droplets size={16} className="text-cyan-600" />
                    <span className="text-sm">Drinking water reliability</span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Medium</span>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-purple-600" />
                    <span className="text-sm">Local-language communication readiness</span>
                  </div>
                  <span className="text-sm px-2 py-1 bg-red-100 text-red-700 rounded">Low</span>
                </div>
              </div>
            </div>

            {/* Recommended Interventions */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl mb-4">Recommended Interventions</h2>
              <div className="space-y-3">
                {interventions.map((intervention, index) => (
                  <div key={intervention.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm mb-1">{intervention.title}</div>
                      <div className="text-xs text-gray-600">Priority: {intervention.priority}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Impact & Actions */}
          <div className="space-y-6">
            {/* Estimated Impact */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border border-green-200 p-6">
              <h2 className="text-lg mb-4">Estimated Impact</h2>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-700 mb-1">Children Protected</div>
                  <div className="text-3xl">620</div>
                </div>
                <div className="border-t border-green-200 pt-3">
                  <div className="text-sm text-gray-700 mb-1">Cost Band</div>
                  <div className="text-lg">Medium</div>
                  <div className="text-xs text-gray-600">₹8-12 lakhs estimated</div>
                </div>
                <div className="border-t border-green-200 pt-3">
                  <div className="text-sm text-gray-700 mb-1">Implementation Difficulty</div>
                  <div className="text-lg">Low–Medium</div>
                </div>
                <div className="border-t border-green-200 pt-3">
                  <div className="text-sm text-gray-700 mb-1">Urgency</div>
                  <div className="inline-block px-3 py-1 bg-red-600 text-white rounded-full text-sm">
                    Immediate
                  </div>
                </div>
              </div>
            </div>

            {/* Climate Risks */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg mb-4">Climate Risks</h2>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">Heat Risk</span>
                    <span className="text-sm px-2 py-1 bg-orange-100 text-orange-700 rounded">High</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-500" style={{ width: '82%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">Flood Risk</span>
                    <span className="text-sm px-2 py-1 bg-red-100 text-red-700 rounded">Critical</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-red-600" style={{ width: '89%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-gray-700">Air Quality Risk</span>
                    <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Medium</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Link
                to="/resource-planner"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                <Plus size={16} />
                Add to Resource Plan
              </Link>
              <button className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors">
                <FileText size={16} />
                Generate Site Report
              </button>
              <Link
                to="/risk-map"
                className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 px-4 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                <MapPin size={16} />
                View on Map
              </Link>
            </div>

            {/* Alert */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex items-start gap-2">
                <AlertCircle className="text-orange-600 flex-shrink-0 mt-0.5" size={16} />
                <div className="text-xs text-gray-700">
                  This site is in an area with projected increased flood frequency due to climate change.
                  Consider long-term adaptation measures.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
