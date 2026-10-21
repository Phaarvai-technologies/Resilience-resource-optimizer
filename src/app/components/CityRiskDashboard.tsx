import { Link } from "react-router";
import { Flame, Droplet, Wind, Droplets, Heart, Building2, ArrowRight } from "lucide-react";

const riskCategories = [
  { name: "Extreme Heat", score: 82, severity: "High", icon: Flame, color: "text-red-600", bgColor: "bg-red-50", borderColor: "border-red-200" },
  { name: "Flooding", score: 89, severity: "Critical", icon: Droplet, color: "text-blue-600", bgColor: "bg-blue-50", borderColor: "border-blue-200" },
  { name: "Air Pollution", score: 71, severity: "Medium", icon: Wind, color: "text-gray-600", bgColor: "bg-gray-50", borderColor: "border-gray-200" },
  { name: "Water Stress", score: 65, severity: "Medium", icon: Droplets, color: "text-cyan-600", bgColor: "bg-cyan-50", borderColor: "border-cyan-200" },
  { name: "Disease Sensitivity", score: 74, severity: "High", icon: Heart, color: "text-pink-600", bgColor: "bg-pink-50", borderColor: "border-pink-200" },
  { name: "Infrastructure Readiness", score: 58, severity: "Low", icon: Building2, color: "text-green-600", bgColor: "bg-green-50", borderColor: "border-green-200" },
];

function getSeverityColor(severity: string) {
  switch (severity) {
    case "Critical": return "bg-red-600";
    case "High": return "bg-orange-500";
    case "Medium": return "bg-yellow-500";
    case "Low": return "bg-green-500";
    default: return "bg-gray-500";
  }
}

export function CityRiskDashboard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Chennai City Risk Dashboard</h1>
          <p className="text-gray-600">Comprehensive climate and health risk assessment for child-serving facilities</p>
        </div>

        {/* Child Vulnerability Index */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border-2 border-orange-300 p-6 sm:p-8 mb-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-lg text-gray-700 mb-2">Child Vulnerability Index</h2>
              <div className="flex items-baseline gap-3">
                <span className="text-5xl">78</span>
                <span className="text-2xl text-gray-600">/ 100</span>
              </div>
              <div className="inline-block mt-2 px-3 py-1 bg-red-600 text-white rounded-full text-sm">
                High Risk
              </div>
            </div>
            <div className="flex-1 max-w-md">
              <div className="h-4 bg-white rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-red-600" style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Risk Categories Grid */}
        <div className="mb-8">
          <h2 className="text-xl mb-4">Risk Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {riskCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className={`bg-white rounded-lg border ${category.borderColor} p-6`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${category.bgColor} p-3 rounded-lg`}>
                      <Icon className={category.color} size={24} />
                    </div>
                    <div className={`px-3 py-1 ${getSeverityColor(category.severity)} text-white rounded-full text-xs`}>
                      {category.severity}
                    </div>
                  </div>
                  <h3 className="mb-2">{category.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl">{category.score}</span>
                    <span className="text-gray-600">/ 100</span>
                  </div>
                  <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getSeverityColor(category.severity)}`}
                      style={{ width: `${category.score}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Planning Insight */}
        <div className="bg-blue-50 rounded-lg border border-blue-200 p-6 sm:p-8 mb-8">
          <h2 className="text-xl mb-3">Top Planning Insight</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            North Chennai and low-lying coastal wards show overlapping child vulnerability, flood exposure,
            and lower facility readiness. Prioritize cooling, drainage, health outreach, and multilingual
            preparedness communication in these areas.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/risk-map"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              View on Risk Map
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/priority-sites"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
            >
              See Priority Sites
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/risk-map"
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm mb-1">Interactive Map</h3>
            <p className="text-xs text-gray-600 mb-3">Explore ward-level risk zones</p>
            <div className="flex items-center text-blue-600 text-xs">
              Open map <ArrowRight size={12} className="ml-1" />
            </div>
          </Link>

          <Link
            to="/priority-sites"
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm mb-1">Priority Rankings</h3>
            <p className="text-xs text-gray-600 mb-3">31 high-risk sites identified</p>
            <div className="flex items-center text-blue-600 text-xs">
              View list <ArrowRight size={12} className="ml-1" />
            </div>
          </Link>

          <Link
            to="/resource-planner"
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm mb-1">Resource Allocation</h3>
            <p className="text-xs text-gray-600 mb-3">Optimize intervention budget</p>
            <div className="flex items-center text-blue-600 text-xs">
              Start planning <ArrowRight size={12} className="ml-1" />
            </div>
          </Link>

          <Link
            to="/reports"
            className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
          >
            <h3 className="text-sm mb-1">Generate Report</h3>
            <p className="text-xs text-gray-600 mb-3">Create planning document</p>
            <div className="flex items-center text-blue-600 text-xs">
              Create report <ArrowRight size={12} className="ml-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
