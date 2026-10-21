import { useState } from "react";
import { MessageSquare, Send, Download, Share2, FileText } from "lucide-react";

const hazardOptions = ["Extreme Heat", "Flooding", "Air Pollution", "Water Stress", "Disease Outbreak"];
const audienceOptions = ["School Headmaster", "Anganwadi Worker", "Parent", "Health Worker", "Local Official"];
const languageOptions = ["English", "Tamil", "Hindi"];
const toneOptions = ["Simple", "Official", "SMS", "Poster"];

const sampleMessages = {
  english: {
    title: "High Heat Risk Alert",
    message: "High heat risk is expected today. Keep children indoors between 12 PM and 3 PM, increase water breaks, avoid outdoor play, check children with fever or dizziness, and contact the nearest clinic if symptoms worsen."
  },
  tamil: {
    title: "அதிக வெப்ப அபாய எச்சரிக்கை",
    message: "இன்று அதிக வெப்ப அபாயம் உள்ளது. மதியம் 12 மணி முதல் 3 மணி வரை குழந்தைகளை வெளியில் விளையாட விட வேண்டாம். குடிநீர் இடைவெளிகளை அதிகரிக்கவும். மயக்கம் அல்லது காய்ச்சல் இருந்தால் அருகிலுள்ள சுகாதார மையத்தை தொடர்பு கொள்ளவும்."
  }
};

export function CommunityGuidance() {
  const [selectedHazard, setSelectedHazard] = useState("Extreme Heat");
  const [selectedAudience, setSelectedAudience] = useState("School Headmaster");
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedTone, setSelectedTone] = useState("Simple");
  const [showGenerated, setShowGenerated] = useState(false);

  const handleGenerate = () => {
    setShowGenerated(true);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Preparedness Guidance Generator</h1>
          <p className="text-gray-600">
            Convert technical climate risk data into simple, actionable multilingual guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Panel - Configuration */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-20">
              <h2 className="mb-4">Configuration</h2>

              {/* Hazard Selection */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Hazard Type</label>
                <select
                  value={selectedHazard}
                  onChange={(e) => setSelectedHazard(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  {hazardOptions.map((hazard) => (
                    <option key={hazard} value={hazard}>
                      {hazard}
                    </option>
                  ))}
                </select>
              </div>

              {/* Audience Selection */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Target Audience</label>
                <select
                  value={selectedAudience}
                  onChange={(e) => setSelectedAudience(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  {audienceOptions.map((audience) => (
                    <option key={audience} value={audience}>
                      {audience}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Selection */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Language</label>
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  {languageOptions.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tone Selection */}
              <div className="mb-4">
                <label className="block text-sm text-gray-700 mb-2">Format/Tone</label>
                <select
                  value={selectedTone}
                  onChange={(e) => setSelectedTone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                >
                  {toneOptions.map((tone) => (
                    <option key={tone} value={tone}>
                      {tone}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleGenerate}
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors text-sm flex items-center justify-center gap-2"
              >
                <MessageSquare size={16} />
                Generate Guidance
              </button>

              {/* Template Library */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm mb-3">Quick Templates</h3>
                <div className="space-y-2">
                  <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
                    Heat Wave Alert
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
                    Flood Preparation
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-md transition-colors">
                    Air Quality Warning
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Generated Messages */}
          <div className="lg:col-span-2 space-y-6">
            {!showGenerated ? (
              <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center">
                <MessageSquare className="mx-auto mb-4 text-gray-400" size={48} />
                <h3 className="text-lg mb-2 text-gray-700">No Guidance Generated Yet</h3>
                <p className="text-sm text-gray-600">
                  Select your parameters and click "Generate Guidance" to create multilingual preparedness messages
                </p>
              </div>
            ) : (
              <>
                {/* English Message */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="bg-blue-50 border-b border-blue-200 px-6 py-3 flex items-center justify-between">
                    <h3>English Message</h3>
                    <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">Primary Language</span>
                  </div>
                  <div className="p-6">
                    <h4 className="mb-3">{sampleMessages.english.title}</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">{sampleMessages.english.message}</p>
                    <div className="flex flex-wrap gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm">
                        <Send size={16} />
                        Send as SMS
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
                        <Download size={16} />
                        Download Poster
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
                        <Share2 size={16} />
                        Share with School
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
                        <FileText size={16} />
                        Add to Action Plan
                      </button>
                    </div>
                  </div>
                </div>

                {/* Tamil Message */}
                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="bg-purple-50 border-b border-purple-200 px-6 py-3 flex items-center justify-between">
                    <h3>Tamil Message (தமிழ்)</h3>
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Local Language</span>
                  </div>
                  <div className="p-6">
                    <h4 className="mb-3">{sampleMessages.tamil.title}</h4>
                    <p className="text-gray-700 leading-relaxed mb-6" style={{ fontSize: '1.05rem' }}>
                      {sampleMessages.tamil.message}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-sm">
                        <Send size={16} />
                        Send as SMS
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
                        <Download size={16} />
                        Download Poster
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
                        <Share2 size={16} />
                        Share with School
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-sm">
                        <FileText size={16} />
                        Add to Action Plan
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional Guidance */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="mb-3">Distribution Recommendations</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>SMS distribution recommended for immediate alerts (est. reach: 4,200 parents)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Print posters for schools in Ward 42, 18, and 51 (31 schools)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Tamil is the primary language for 78% of target population in these areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Coordinate with 14 anganwadi workers for direct caregiver communication</span>
                    </li>
                  </ul>
                </div>

                {/* Impact Preview */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="mb-4">Estimated Reach</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div>
                      <div className="text-2xl mb-1">4,850</div>
                      <div className="text-xs text-gray-600">Parents/Caregivers</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">127</div>
                      <div className="text-xs text-gray-600">School Staff</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">42</div>
                      <div className="text-xs text-gray-600">Health Workers</div>
                    </div>
                    <div>
                      <div className="text-2xl mb-1">8,200</div>
                      <div className="text-xs text-gray-600">Children Protected</div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
