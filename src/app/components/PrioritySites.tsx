import { Link } from "react-router";
import { ArrowUpDown, ExternalLink, Plus, FileDown } from "lucide-react";

const sites = [
  {
    id: 1,
    rank: 1,
    name: "Chennai Primary School",
    assetType: "School",
    ward: "Ward 42",
    childrenServed: 620,
    heatRisk: "High",
    floodRisk: "Critical",
    facilityReadiness: "Low",
    priorityScore: 92,
    recommendedAction: "Install shade + water point + flood-safe access",
  },
  {
    id: 2,
    rank: 2,
    name: "Urban Health Post",
    assetType: "Clinic",
    ward: "Ward 18",
    childrenServed: 2400,
    heatRisk: "Medium",
    floodRisk: "High",
    facilityReadiness: "Low",
    priorityScore: 88,
    recommendedAction: "Backup power + emergency cooling plan",
  },
  {
    id: 3,
    rank: 3,
    name: "Anganwadi Center 14",
    assetType: "Anganwadi",
    ward: "Ward 51",
    childrenServed: 85,
    heatRisk: "Critical",
    floodRisk: "Medium",
    facilityReadiness: "Medium",
    priorityScore: 84,
    recommendedAction: "Cooling kit + caregiver alert protocol",
  },
  {
    id: 4,
    rank: 4,
    name: "Government High School",
    assetType: "School",
    ward: "Ward 23",
    childrenServed: 1240,
    heatRisk: "High",
    floodRisk: "High",
    facilityReadiness: "Medium",
    priorityScore: 81,
    recommendedAction: "Heat-day schedule + drinking water stations",
  },
  {
    id: 5,
    rank: 5,
    name: "Community Health Center",
    assetType: "Clinic",
    ward: "Ward 42",
    childrenServed: 3200,
    heatRisk: "Medium",
    floodRisk: "Critical",
    facilityReadiness: "Low",
    priorityScore: 79,
    recommendedAction: "Flood-safe access + emergency supplies",
  },
  {
    id: 6,
    rank: 6,
    name: "Anganwadi Center 7",
    assetType: "Anganwadi",
    ward: "Ward 18",
    childrenServed: 72,
    heatRisk: "Critical",
    floodRisk: "Low",
    facilityReadiness: "Low",
    priorityScore: 76,
    recommendedAction: "Shade installation + water cooler",
  },
  {
    id: 7,
    rank: 7,
    name: "Municipal Primary School",
    assetType: "School",
    ward: "Ward 34",
    childrenServed: 890,
    heatRisk: "High",
    floodRisk: "Medium",
    facilityReadiness: "Medium",
    priorityScore: 74,
    recommendedAction: "Air quality monitoring + indoor safe spaces",
  },
  {
    id: 8,
    rank: 8,
    name: "Coastal Anganwadi",
    assetType: "Anganwadi",
    ward: "Ward 51",
    childrenServed: 65,
    heatRisk: "Medium",
    floodRisk: "Critical",
    facilityReadiness: "Low",
    priorityScore: 73,
    recommendedAction: "Flood evacuation plan + elevated storage",
  },
];

function getRiskColor(risk: string) {
  switch (risk) {
    case "Critical": return "bg-red-100 text-red-700";
    case "High": return "bg-orange-100 text-orange-700";
    case "Medium": return "bg-yellow-100 text-yellow-700";
    case "Low": return "bg-green-100 text-green-700";
    default: return "bg-gray-100 text-gray-700";
  }
}

function getAssetColor(type: string) {
  switch (type) {
    case "School": return "bg-blue-100 text-blue-700";
    case "Clinic": return "bg-teal-100 text-teal-700";
    case "Anganwadi": return "bg-purple-100 text-purple-700";
    default: return "bg-gray-100 text-gray-700";
  }
}

export function PrioritySites() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Priority Sites Ranking</h1>
          <p className="text-gray-600">Schools, anganwadis, and clinics ranked by child vulnerability and intervention urgency</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Total Sites Assessed</div>
            <div className="text-3xl">229</div>
          </div>
          <div className="bg-red-50 rounded-lg border border-red-200 p-4">
            <div className="text-sm text-gray-600 mb-1">High-Risk Sites</div>
            <div className="text-3xl text-red-700">31</div>
          </div>
          <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
            <div className="text-sm text-gray-600 mb-1">Children in High-Risk Sites</div>
            <div className="text-3xl text-blue-700">18,420</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-6">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <FileDown size={16} />
            Export List
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Plus size={16} />
            Add to Resource Plan
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">
                    <button className="flex items-center gap-1 hover:text-gray-900">
                      Rank <ArrowUpDown size={14} />
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">Site Name</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">Asset Type</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">Ward</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">
                    <button className="flex items-center gap-1 hover:text-gray-900">
                      Children Served <ArrowUpDown size={14} />
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">Heat Risk</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">Flood Risk</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">Facility Readiness</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">
                    <button className="flex items-center gap-1 hover:text-gray-900">
                      Priority Score <ArrowUpDown size={14} />
                    </button>
                  </th>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">Recommended Action</th>
                  <th className="px-4 py-3 text-left text-xs text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sites.map((site) => (
                  <tr key={site.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-sm">
                        {site.rank}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="max-w-xs">{site.name}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${getAssetColor(site.assetType)}`}>
                        {site.assetType}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-700">{site.ward}</td>
                    <td className="px-4 py-3 text-sm text-gray-700">{site.childrenServed.toLocaleString()}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${getRiskColor(site.heatRisk)}`}>
                        {site.heatRisk}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${getRiskColor(site.floodRisk)}`}>
                        {site.floodRisk}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`inline-block px-2 py-1 rounded text-xs ${getRiskColor(site.facilityReadiness)}`}>
                        {site.facilityReadiness}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{site.priorityScore}</span>
                        <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-red-600"
                            style={{ width: `${site.priorityScore}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="max-w-xs text-xs text-gray-700">{site.recommendedAction}</div>
                    </td>
                    <td className="px-4 py-3">
                      <Link
                        to={`/site-profile/${site.id}`}
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs"
                      >
                        View Profile <ExternalLink size={12} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">Showing 1-8 of 31 high-risk sites</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">1</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">2</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">3</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">4</button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
