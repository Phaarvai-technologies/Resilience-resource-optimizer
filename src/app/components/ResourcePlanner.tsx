import { useState } from "react";
import { Check, IndianRupee, Users, Building, TrendingUp } from "lucide-react";

const interventionOptions = [
  { id: 1, name: "Shade structure", cost: 350000, selected: false },
  { id: 2, name: "Drinking water point", cost: 120000, selected: false },
  { id: 3, name: "Cooling room retrofit", cost: 500000, selected: false },
  { id: 4, name: "Backup power for clinic", cost: 450000, selected: false },
  { id: 5, name: "Flood-safe access signage", cost: 75000, selected: false },
  { id: 6, name: "Community preparedness campaign", cost: 100000, selected: false },
  { id: 7, name: "Air-quality safe room kit", cost: 225000, selected: false },
];

export function ResourcePlanner() {
  const totalBudget = 2500000;
  const [selectedInterventions, setSelectedInterventions] = useState<number[]>([]);

  const allocatedBudget = selectedInterventions.reduce((sum, id) => {
    const intervention = interventionOptions.find(i => i.id === id);
    return sum + (intervention?.cost || 0);
  }, 0);

  const remainingBudget = totalBudget - allocatedBudget;

  const toggleIntervention = (id: number) => {
    setSelectedInterventions(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const formatCurrency = (amount: number) => {
    return `₹${(amount / 100000).toFixed(2)} L`;
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Resource Allocation Planner</h1>
          <p className="text-gray-600">Optimize your climate resilience budget for maximum child impact</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Budget Overview */}
          <div className="lg:col-span-1 space-y-6">
            {/* Budget Card */}
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-blue-200 p-6">
              <h2 className="text-lg mb-4">Budget Overview</h2>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-700 mb-1">Total Budget</div>
                  <div className="text-3xl">{formatCurrency(totalBudget)}</div>
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <div className="text-sm text-gray-700 mb-1">Allocated</div>
                  <div className="text-2xl text-blue-700">{formatCurrency(allocatedBudget)}</div>
                </div>
                <div className="border-t border-blue-200 pt-4">
                  <div className="text-sm text-gray-700 mb-1">Remaining</div>
                  <div className="text-2xl text-green-700">{formatCurrency(remainingBudget)}</div>
                </div>
                <div className="pt-2">
                  <div className="h-3 bg-white rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-blue-700"
                      style={{ width: `${(allocatedBudget / totalBudget) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-600 mt-1 text-center">
                    {((allocatedBudget / totalBudget) * 100).toFixed(1)}% allocated
                  </div>
                </div>
              </div>
            </div>

            {/* Optimized Plan Preview */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg mb-4">AI-Optimized Allocation</h2>
              <p className="text-sm text-gray-700 mb-4">
                Our algorithm recommends this allocation for maximum child impact:
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>4 schools receive shade and water support</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>2 clinics receive backup power</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>8 anganwadis receive cooling kits</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                  <span>12 wards receive multilingual preparedness messages</span>
                </div>
              </div>
              <button className="w-full mt-6 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors text-sm">
                Apply Optimized Plan
              </button>
            </div>
          </div>

          {/* Middle Column - Intervention Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Intervention Cards */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl mb-4">Select Interventions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {interventionOptions.map((intervention) => {
                  const isSelected = selectedInterventions.includes(intervention.id);
                  const canAfford = remainingBudget >= intervention.cost || isSelected;

                  return (
                    <button
                      key={intervention.id}
                      onClick={() => toggleIntervention(intervention.id)}
                      disabled={!canAfford && !isSelected}
                      className={`relative p-4 rounded-lg border-2 text-left transition-all ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50'
                          : canAfford
                          ? 'border-gray-200 hover:border-blue-300 bg-white'
                          : 'border-gray-200 bg-gray-50 opacity-50 cursor-not-allowed'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-2 right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <Check className="text-white" size={16} />
                        </div>
                      )}
                      <div className="mb-2">{intervention.name}</div>
                      <div className="flex items-center gap-1 text-lg text-gray-900">
                        <IndianRupee size={16} />
                        {(intervention.cost / 100000).toFixed(2)} L
                      </div>
                      <div className="text-xs text-gray-600 mt-1">
                        {formatCurrency(intervention.cost)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Impact Estimate */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200 p-6">
              <h2 className="text-xl mb-4">Estimated Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="text-green-700" size={20} />
                  </div>
                  <div className="text-2xl mb-1">11,850</div>
                  <div className="text-xs text-gray-600">Children Reached</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="text-green-700" size={20} />
                  </div>
                  <div className="text-2xl mb-1">18</div>
                  <div className="text-xs text-gray-600">High-Risk Sites Covered</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="text-green-700" size={20} />
                  </div>
                  <div className="text-2xl mb-1">40%</div>
                  <div className="text-xs text-gray-600">Planning Efficiency Gain</div>
                </div>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <IndianRupee className="text-green-700" size={20} />
                  </div>
                  <div className="text-2xl mb-1">{formatCurrency(remainingBudget)}</div>
                  <div className="text-xs text-gray-600">Remaining Budget</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                Generate Implementation Plan
              </button>
              <button className="bg-white border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                Save Draft
              </button>
              <button className="bg-white border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                Export to PDF
              </button>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="mb-3">Budget Optimization Tips</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Combining shade structures with water points at the same site reduces installation costs by 15%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Community preparedness campaigns have the highest reach-to-cost ratio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Prioritize Ward 42 and Ward 18 for maximum children-per-rupee impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
