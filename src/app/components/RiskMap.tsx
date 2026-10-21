import { useState } from "react";
import { School, Baby, Building2, Droplet, MapPin, Home, AlertCircle } from "lucide-react";

const filters = {
  hazardType: ["Heat", "Flood", "Air Pollution", "Water Stress"],
  assetType: ["School", "Anganwadi", "Clinic", "Public Space"],
  populationGroup: ["Children under 5", "School-age children", "Pregnant mothers", "Low-income households"],
  riskLevel: ["Critical", "High", "Medium", "Low"],
};

export function RiskMap() {
  const [selectedWard, setSelectedWard] = useState("Ward 42");
  const [selectedHazard, setSelectedHazard] = useState("Heat");
  const [selectedAsset, setSelectedAsset] = useState("School");

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Interactive Risk Map</h1>
          <p className="text-gray-600">Explore climate risks by ward, facility, and population group</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Panel - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-20">
              <h2 className="mb-4">Filters</h2>

              {/* Hazard Type */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Hazard Type</label>
                <select
                  value={selectedHazard}
                  onChange={(e) => setSelectedHazard(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  {filters.hazardType.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Asset Type */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Asset Type</label>
                <select
                  value={selectedAsset}
                  onChange={(e) => setSelectedAsset(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  {filters.assetType.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Population Group */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Population Group</label>
                <div className="space-y-2">
                  {filters.populationGroup.map((group) => (
                    <label key={group} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" defaultChecked={group === "School-age children"} />
                      <span className="text-gray-700">{group}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Risk Level */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Risk Level</label>
                <div className="space-y-2">
                  {filters.riskLevel.map((level) => (
                    <label key={level} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" defaultChecked />
                      <span className="text-gray-700">{level}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Center Panel - Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {/* Map Area */}
              <div className="h-[600px] bg-gradient-to-br from-blue-50 to-teal-50 relative">
                {/* Simulated map with colored zones */}
                <div className="absolute inset-0 p-8">
                  <svg width="100%" height="100%" viewBox="0 0 400 400" className="w-full h-full">
                    {/* Ward zones with different risk levels */}
                    <path d="M 50 50 L 150 50 L 150 150 L 50 150 Z" fill="#fee2e2" stroke="#dc2626" strokeWidth="2" opacity="0.7" />
                    <path d="M 160 50 L 280 50 L 280 150 L 160 150 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
                    <path d="M 290 50 L 380 50 L 380 180 L 290 180 Z" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
                    <path d="M 50 160 L 150 160 L 150 280 L 50 280 Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" opacity="0.7" />
                    <path d="M 160 160 L 280 160 L 280 280 L 160 280 Z" fill="#fee2e2" stroke="#dc2626" strokeWidth="3" opacity="0.8" />
                    <path d="M 290 190 L 380 190 L 380 320 L 290 320 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
                    <path d="M 50 290 L 150 290 L 150 380 L 50 380 Z" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" opacity="0.7" />
                    <path d="M 160 290 L 280 290 L 280 380 L 160 380 Z" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2" opacity="0.7" />
                    <path d="M 290 330 L 380 330 L 380 380 L 290 380 Z" fill="#dcfce7" stroke="#22c55e" strokeWidth="2" opacity="0.7" />

                    {/* Asset pins */}
                    <circle cx="220" cy="220" r="8" fill="#dc2626" stroke="white" strokeWidth="2" />
                    <circle cx="100" cy="100" r="6" fill="#3b82f6" stroke="white" strokeWidth="2" />
                    <circle cx="200" cy="350" r="6" fill="#10b981" stroke="white" strokeWidth="2" />
                    <circle cx="330" cy="120" r="6" fill="#f59e0b" stroke="white" strokeWidth="2" />
                    <circle cx="100" cy="340" r="6" fill="#3b82f6" stroke="white" strokeWidth="2" />
                    <circle cx="330" cy="260" r="6" fill="#10b981" stroke="white" strokeWidth="2" />

                    {/* Ward 42 label */}
                    <text x="220" y="250" fontSize="12" fill="#991b1b" textAnchor="middle">Ward 42</text>
                  </svg>
                </div>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3 border border-gray-200">
                  <div className="text-xs mb-2">Risk Level</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-4 h-4 bg-red-200 border-2 border-red-600 rounded"></div>
                      <span>Critical</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-4 h-4 bg-orange-200 border-2 border-orange-500 rounded"></div>
                      <span>High</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-4 h-4 bg-blue-200 border-2 border-blue-500 rounded"></div>
                      <span>Medium</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs">
                      <div className="w-4 h-4 bg-green-200 border-2 border-green-500 rounded"></div>
                      <span>Low</span>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <div className="text-xs mb-1">Assets</div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-600 rounded-full border border-white"></div>
                        <span>School</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-blue-600 rounded-full border border-white"></div>
                        <span>Clinic</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-600 rounded-full border border-white"></div>
                        <span>Anganwadi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Selected Area Details */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-20">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="text-red-600" size={20} />
                <h2>Selected Area</h2>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                <div className="text-lg">{selectedWard}</div>
              </div>

              {/* Stats */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Child population exposed</span>
                  <span className="text-sm">3,850</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Heat risk</span>
                  <span className="text-sm px-2 py-1 bg-orange-100 text-orange-700 rounded">High</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Flood risk</span>
                  <span className="text-sm px-2 py-1 bg-red-100 text-red-700 rounded">Critical</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Air pollution</span>
                  <span className="text-sm px-2 py-1 bg-yellow-100 text-yellow-700 rounded">Medium</span>
                </div>
                <div className="flex items-center justify-between py-2 border-b border-gray-200">
                  <span className="text-sm text-gray-600">Facility readiness</span>
                  <span className="text-sm px-2 py-1 bg-red-100 text-red-700 rounded">Low</span>
                </div>
              </div>

              {/* Recommendation */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                <div className="flex items-start gap-2">
                  <AlertCircle className="text-blue-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <div className="text-sm mb-1">Recommended Priority</div>
                    <div className="text-xs text-gray-700">Immediate intervention required</div>
                  </div>
                </div>
              </div>

              {/* Assets in Ward */}
              <div className="mb-4">
                <div className="text-sm mb-2">Assets in Ward</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <School size={16} className="text-red-600" />
                    <span>7 Schools</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Baby size={16} className="text-green-600" />
                    <span>4 Anganwadis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Building2 size={16} className="text-blue-600" />
                    <span>2 Clinics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Home size={16} className="text-gray-600" />
                    <span>1 Public Shelter</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
                View Ward Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
