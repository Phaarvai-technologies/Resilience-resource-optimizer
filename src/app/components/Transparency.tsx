import { Github, BookOpen, Database, Settings, Users, Lock, Code2, GitBranch } from "lucide-react";

export function Transparency() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Open Source & Model Transparency</h1>
          <p className="text-gray-600">
            Built on open data, open algorithms, and community collaboration
          </p>
        </div>

        {/* GitHub Repository */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-white/10 rounded-lg">
              <Github size={32} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl mb-2">Open Source Repository</h2>
              <p className="text-gray-300 mb-4">
                All code, models, and documentation are publicly available for review, contribution, and local deployment.
              </p>
              <a
                href="https://github.com/phaarvai/resilience-resource-optimizer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Github size={16} />
                github.com/phaarvai/resilience-resource-optimizer
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/20">
            <div>
              <div className="text-2xl mb-1">MIT</div>
              <div className="text-sm text-gray-300">License</div>
            </div>
            <div>
              <div className="text-2xl mb-1">142</div>
              <div className="text-sm text-gray-300">Contributors</div>
            </div>
            <div>
              <div className="text-2xl mb-1">2.3k</div>
              <div className="text-sm text-gray-300">Stars</div>
            </div>
            <div>
              <div className="text-2xl mb-1">87</div>
              <div className="text-sm text-gray-300">Forks</div>
            </div>
          </div>
        </div>

        {/* Risk Scoring Methodology */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Code2 className="text-blue-700" size={24} />
            </div>
            <h2 className="text-xl">Risk Scoring Methodology</h2>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <div className="text-center mb-4">
              <div className="text-lg mb-2">Child Resilience Priority Score =</div>
              <div className="space-y-2 text-sm text-gray-700">
                <div>Hazard Exposure (climate data)</div>
                <div>+ Child Vulnerability (demographics, health)</div>
                <div>+ Facility Readiness Gap (infrastructure assessment)</div>
                <div>+ Service Access Gap (distance, availability)</div>
                <div>+ Community Preparedness Gap (communication, training)</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2">Component Details:</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="mb-1">Hazard Exposure (0-100)</div>
                  <p className="text-sm text-gray-700">
                    Combines climate projections for heat, flooding, air pollution, and water stress from
                    IPCC, local meteorological data, and satellite observations.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="mb-1">Child Vulnerability (0-100)</div>
                  <p className="text-sm text-gray-700">
                    Age distribution, health status, nutrition indicators, household income, and proximity
                    to health services weighted by climate-health sensitivity.
                  </p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="mb-1">Facility Readiness (0-100)</div>
                  <p className="text-sm text-gray-700">
                    Cooling capacity, shade coverage, water access, structural resilience, emergency protocols,
                    and backup systems assessed through surveys and site visits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Data Sources */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-green-100 rounded-lg">
              <Database className="text-green-700" size={24} />
            </div>
            <h2 className="text-xl">Data Schema & Sources</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-3">Climate Data</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>IPCC Regional Climate Projections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>India Meteorological Department</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>NASA MODIS Satellite Data</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Central Pollution Control Board</span>
                </li>
              </ul>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-3">Infrastructure Data</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Municipal Corporation Records</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>School Education Department</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>ICDS Anganwadi Registry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Public Health Department</span>
                </li>
              </ul>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-3">Demographic Data</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Census of India</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>National Family Health Survey</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>District Health Information System</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Community Health Assessments</span>
                </li>
              </ul>
            </div>

            <div className="p-4 border border-gray-200 rounded-lg">
              <h3 className="mb-3">Optional Enhancements</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Local IoT sensor networks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Community feedback surveys</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Mobile health worker reports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>School attendance patterns</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Local Customization */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Settings className="text-purple-700" size={24} />
            </div>
            <h2 className="text-xl">Local Customization Settings</h2>
          </div>

          <p className="text-sm text-gray-700 mb-4">
            Phaarvai is designed to adapt to local contexts, priorities, and data availability:
          </p>

          <div className="space-y-3">
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="mb-1">Configurable Risk Weights</div>
              <p className="text-sm text-gray-700">
                Adjust the relative importance of heat, flood, pollution, and other hazards based on local climate patterns and vulnerabilities.
              </p>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="mb-1">Custom Asset Types</div>
              <p className="text-sm text-gray-700">
                Add community centers, religious institutions, playgrounds, or other child-serving facilities specific to your region.
              </p>
            </div>
            <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
              <div className="mb-1">Language Support</div>
              <p className="text-sm text-gray-700">
                Platform supports 22 Indian languages plus English, with extensible translation framework for local dialects.
              </p>
            </div>
          </div>
        </div>

        {/* Community Feedback */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Users className="text-orange-700" size={24} />
            </div>
            <h2 className="text-xl">Community Feedback Loop</h2>
          </div>

          <p className="text-sm text-gray-700 mb-4">
            Local knowledge is critical to effective climate resilience planning. Phaarvai includes mechanisms for:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="mb-2">Field Worker Input</div>
              <p className="text-xs text-gray-700">
                Anganwadi workers, teachers, and health staff can report real-time conditions via mobile app
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="mb-2">Parent Surveys</div>
              <p className="text-xs text-gray-700">
                SMS-based feedback on facility conditions, heat exposure, and water access concerns
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="mb-2">Community Meetings</div>
              <p className="text-xs text-gray-700">
                Structured input sessions with neighborhood groups to validate priorities and identify gaps
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="mb-2">Expert Review</div>
              <p className="text-xs text-gray-700">
                Public health, urban planning, and climate experts can audit models and suggest improvements
              </p>
            </div>
          </div>
        </div>

        {/* Privacy & Responsible AI */}
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-red-100 rounded-lg">
              <Lock className="text-red-700" size={24} />
            </div>
            <h2 className="text-xl">Privacy & Responsible AI</h2>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2">Data Protection</h3>
              <p className="text-sm text-gray-700 mb-3">
                All personal and identifiable data is anonymized and aggregated. No individual child, family, or
                facility records are exposed in public outputs or shared datasets.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Algorithmic Fairness</h3>
              <p className="text-sm text-gray-700 mb-3">
                Risk scores are regularly audited for bias across income, caste, religion, and geography.
                Priority algorithms are designed to favor underserved populations.
              </p>
            </div>
            <div>
              <h3 className="mb-2">Human Oversight</h3>
              <p className="text-sm text-gray-700">
                AI-generated recommendations are reviewed by local officials, health workers, and community
                representatives before implementation. Final decisions remain with human decision-makers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
