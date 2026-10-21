import { Link } from "react-router";
import { Users, School, Baby, Building, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

const stats = [
  { label: "Children covered", value: "42,500", icon: Users, color: "bg-blue-100 text-blue-700" },
  { label: "Schools mapped", value: "118", icon: School, color: "bg-green-100 text-green-700" },
  { label: "Anganwadis mapped", value: "84", icon: Baby, color: "bg-purple-100 text-purple-700" },
  { label: "Clinics mapped", value: "27", icon: Building, color: "bg-teal-100 text-teal-700" },
  { label: "High-risk sites", value: "31", icon: AlertTriangle, color: "bg-red-100 text-red-700" },
  { label: "Priority interventions identified", value: "76", icon: CheckCircle2, color: "bg-orange-100 text-orange-700" },
];

export function Dashboard() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl mb-2">Phaarvai Resilience Resource Optimizer</h1>
          <p className="text-lg text-gray-600">
            Helping local governments prioritize climate-resilience resources for children.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl">{stat.value}</p>
                  </div>
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon size={24} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mission Card */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-6 sm:p-8 mb-8">
          <div className="max-w-3xl">
            <h2 className="text-xl mb-3">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Phaarvai converts climate and infrastructure risk data into actionable, multilingual planning
              guidance for child-centered resilience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/city-risk"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View City Risk Analysis
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/risk-map"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Explore Risk Map
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            to="/priority-sites"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="mb-2">Priority Sites</h3>
            <p className="text-sm text-gray-600 mb-4">
              View ranked list of schools, anganwadis, and clinics requiring immediate attention
            </p>
            <div className="flex items-center text-blue-600 text-sm">
              View ranking <ArrowRight size={14} className="ml-1" />
            </div>
          </Link>

          <Link
            to="/resource-planner"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="mb-2">Resource Planner</h3>
            <p className="text-sm text-gray-600 mb-4">
              Optimize budget allocation for maximum child impact across interventions
            </p>
            <div className="flex items-center text-blue-600 text-sm">
              Start planning <ArrowRight size={14} className="ml-1" />
            </div>
          </Link>

          <Link
            to="/community-guidance"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="mb-2">Community Guidance</h3>
            <p className="text-sm text-gray-600 mb-4">
              Generate multilingual preparedness messages for schools, parents, and health workers
            </p>
            <div className="flex items-center text-blue-600 text-sm">
              Create guidance <ArrowRight size={14} className="ml-1" />
            </div>
          </Link>

          <Link
            to="/transparency"
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <h3 className="mb-2">Open Source</h3>
            <p className="text-sm text-gray-600 mb-4">
              View methodology, data sources, and contribute to the platform
            </p>
            <div className="flex items-center text-blue-600 text-sm">
              Learn more <ArrowRight size={14} className="ml-1" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
