import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from "recharts";
import { FileDown, Share2, Globe } from "lucide-react";

const wardRiskData = [
  { ward: "Ward 42", risk: 92 },
  { ward: "Ward 18", risk: 88 },
  { ward: "Ward 51", risk: 84 },
  { ward: "Ward 23", risk: 81 },
  { ward: "Ward 34", risk: 74 },
  { ward: "Ward 29", risk: 68 },
];

const interventionData = [
  { type: "School", count: 18, color: "#3b82f6" },
  { type: "Anganwadi", count: 24, color: "#8b5cf6" },
  { type: "Clinic", count: 8, color: "#14b8a6" },
  { type: "Community", count: 12, color: "#f59e0b" },
];

const impactData = [
  { budget: "5L", children: 1850 },
  { budget: "10L", children: 4200 },
  { budget: "15L", children: 7800 },
  { budget: "20L", children: 10500 },
  { budget: "25L", children: 11850 },
];

const readinessData = [
  { category: "Heat Preparedness", before: 32, after: 78 },
  { category: "Flood Response", before: 28, after: 72 },
  { category: "Health Access", before: 45, after: 84 },
  { category: "Communication", before: 22, after: 68 },
];

const COLORS = ['#3b82f6', '#8b5cf6', '#14b8a6', '#f59e0b'];

export function Reports() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Local Government Preparedness Report</h1>
          <p className="text-gray-600">Child-Centered Climate Resilience Plan – Chennai Pilot</p>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mb-8">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <FileDown size={16} />
            Export PDF
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Globe size={16} />
            Publish Open Data Summary
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <Share2 size={16} />
            Share with Partners
          </button>
        </div>

        {/* Executive Summary */}
        <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-6 sm:p-8 mb-8">
          <h2 className="text-xl mb-4">Executive Summary</h2>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            <p>
              This report presents a comprehensive climate resilience assessment for Chennai's child-serving
              infrastructure, covering 229 facilities across 58 wards serving 42,500 children.
            </p>
            <p>
              Our analysis identified 31 high-risk sites requiring immediate intervention, with concentrated
              vulnerabilities in North Chennai and coastal wards. The recommended resource allocation of
              ₹25 lakhs can protect 11,850 children through targeted interventions in cooling, water access,
              flood preparedness, and multilingual communication.
            </p>
            <p>
              Key findings show overlapping heat and flood exposure in low-income neighborhoods with limited
              facility readiness. The plan prioritizes schools, anganwadis, and clinics based on child
              vulnerability scores and optimizes resource allocation for maximum impact per rupee invested.
            </p>
          </div>
        </div>

        {/* Section 1: Highest Risk Wards */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl mb-6">Highest Risk Wards</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={wardRiskData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ward" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="risk" fill="#ef4444" name="Risk Score" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-gray-700">
              Ward 42 and Ward 18 show critical risk levels with over 6,000 children exposed to overlapping
              climate hazards and limited facility infrastructure.
            </p>
          </div>
        </div>

        {/* Section 2: Priority Infrastructure Investments */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl mb-6">Recommended Infrastructure Investments by Asset Type</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={interventionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ type, count }) => `${type}: ${count}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {interventionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex flex-col justify-center space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="text-sm">Schools</span>
                <span className="text-sm">18 sites • ₹12.8L</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <span className="text-sm">Anganwadis</span>
                <span className="text-sm">24 sites • ₹6.4L</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                <span className="text-sm">Clinics</span>
                <span className="text-sm">8 sites • ₹4.2L</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <span className="text-sm">Community Programs</span>
                <span className="text-sm">12 wards • ₹1.6L</span>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Children Reached per Investment */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl mb-6">Children Reached per ₹1 Lakh Investment</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={impactData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="budget" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="children" stroke="#10b981" strokeWidth={2} name="Children Reached" />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-gray-700">
              Optimized allocation shows diminishing returns after ₹20L. Current plan reaches 11,850 children
              with ₹25L budget (474 children per lakh).
            </p>
          </div>
        </div>

        {/* Section 4: Readiness Improvement */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <h2 className="text-xl mb-6">Readiness Improvement: Before and After Interventions</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={readinessData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="before" fill="#94a3b8" name="Before" />
              <Bar dataKey="after" fill="#3b82f6" name="After" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Section 5: Key Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4">Immediate Actions (0-3 months)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">1.</span>
                <span>Install shade and water points at 4 priority schools in Ward 42 and Ward 18</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">2.</span>
                <span>Deploy cooling kits to 8 anganwadis with critical heat exposure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">3.</span>
                <span>Launch Tamil and Hindi SMS preparedness campaign for 4,850 parents</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">4.</span>
                <span>Mark flood-safe access routes at 3 coastal schools and clinics</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="mb-4">Medium-Term Actions (3-12 months)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">1.</span>
                <span>Retrofit 2 clinics with backup power and emergency cooling systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">2.</span>
                <span>Establish heat-day protocols at all 118 schools with schedule modifications</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">3.</span>
                <span>Train 84 anganwadi workers on climate health response and alert protocols</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">4.</span>
                <span>Install air quality monitoring at 12 high-traffic school locations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Data Transparency */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl mb-4">Open Data and Model Transparency</h2>
          <p className="text-sm text-gray-700 mb-4">
            This report is based on open climate data, municipal infrastructure records, school enrollment data,
            and community health assessments. All risk scoring methodologies and resource optimization algorithms
            are available for review and validation.
          </p>
          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
              <Globe size={16} />
              View Data Sources
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
              <FileDown size={16} />
              Download Dataset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
