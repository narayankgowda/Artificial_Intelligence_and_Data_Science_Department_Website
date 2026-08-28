import React from 'react';
import { TrendingUp, Building, DollarSign, Users, Award, MapPin } from 'lucide-react';

const Placements: React.FC = () => {
  const placementStats = [
    { label: 'Placement Rate', value: '75%', icon: TrendingUp, color: 'text-green-600' },
    { label: 'Highest Package', value: '₹12.5 LPA', icon: Award, color: 'text-purple-600' },
    { label: 'Companies Visited', value: '90+', icon: Building, color: 'text-teal-600' },
  ];

  const topRecruiters = [
    { name: 'Microsoft', package: '₹10 LPA', positions: 5, logo: '🏢' },
    { name: 'Google', package: '₹12.5 LPA', positions: 2, logo: '🔍' },
    { name: 'Amazon', package: '₹5 LPA', positions: 2, logo: '📦' },
    { name: 'Meta', package: '₹4 LPA', positions: 8, logo: '👥' },
    { name: 'Apple', package: '₹5.5 LPA', positions: 6, logo: '🍎' },
    { name: 'Netflix', package: '₹6 LPA', positions: 10, logo: '🎬' },
    { name: 'Flipkart', package: '₹2 LPA', positions: 8, logo: '🛒' },
    { name: 'Uber', package: '₹2 LPA', positions: 4, logo: '🚗' },
  ];

  const placementTrends = [
    { year: '2020', rate: '88%', avgPackage: '₹6.2 LPA' },
    { year: '2021', rate: '91%', avgPackage: '₹7.1 LPA' },
    { year: '2022', rate: '93%', avgPackage: '₹7.8 LPA' },
    { year: '2023', rate: '95%', avgPackage: '₹8.5 LPA' },
  ];

  const industryDistribution = [
    { sector: 'Software Development', percentage: 45, color: 'bg-blue-500' },
    { sector: 'Data Science & Analytics', percentage: 25, color: 'bg-green-500' },
    { sector: 'Product Management', percentage: 12, color: 'bg-purple-500' },
    { sector: 'Research & Development', percentage: 10, color: 'bg-yellow-500' },
    { sector: 'Consulting', percentage: 8, color: 'bg-red-500' },
  ];

  const locationWise = [
    { city: 'Bangalore', count: 85, percentage: 35 },
    { city: 'Hyderabad', count: 60, percentage: 25 },
    { city: 'Pune', count: 40, percentage: 16 },
    { city: 'Chennai', count: 30, percentage: 12 },
    { city: 'Mumbai', count: 25, percentage: 10 },
    { city: 'Delhi NCR', count: 5, percentage: 2 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Placement Records</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our students consistently secure positions in top-tier companies worldwide, 
            reflecting the quality of education and industry readiness we provide.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {placementStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Top Recruiters */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Top Recruiters</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topRecruiters.map((company, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="text-center mb-3">
                  <div className="text-4xl mb-2">{company.logo}</div>
                  <h4 className="font-bold text-gray-900">{company.name}</h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Max Package:</span>
                    <span className="font-semibold text-green-600">{company.package}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Positions:</span>
                    <span className="font-semibold text-blue-600">{company.positions}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placement Trends and Industry Distribution */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Placement Trends */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Placement Trends</h3>
            <div className="space-y-4">
              {placementTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="font-semibold text-gray-900">{trend.year}</div>
                  <div className="flex space-x-6">
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Placement Rate</div>
                      <div className="font-bold text-green-600">{trend.rate}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-gray-600">Avg Package</div>
                      <div className="font-bold text-blue-600">{trend.avgPackage}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Distribution */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Industry Distribution</h3>
            <div className="space-y-4">
              {industryDistribution.map((industry, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">{industry.sector}</span>
                    <span className="text-sm font-bold text-gray-900">{industry.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${industry.color}`}
                      style={{ width: `${industry.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location-wise Placements */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Location-wise Placements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationWise.map((location, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl">
                <div className="flex items-center mb-3">
                  <MapPin className="h-5 w-5 text-blue-600 mr-2" />
                  <h4 className="font-bold text-gray-900">{location.city}</h4>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Students Placed:</span>
                    <span className="font-semibold text-blue-600">{location.count}</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-2">
                    <div
                      className="h-2 rounded-full bg-blue-500"
                      style={{ width: `${location.percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-600 text-right">{location.percentage}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Success Stories</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBtORYktgQH7sse6RMhrou9ocsFfpkyeRSwQ&s"
                alt="Student"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-bold text-gray-900 mb-2">Govardhan H L</h4>
              <p className="text-blue-600 font-semibold mb-2">Software Engineer @ Google</p>
              <p className="text-sm text-gray-600">
                "The AI & DS program equipped me with both theoretical knowledge and practical skills. 
                The faculty's guidance was instrumental in landing my dream job."
              </p>
            </div>
            <div className="text-center">
              <img
                src="data:image/jpeg;base64,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 "
                alt="Student"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-bold text-gray-900 mb-2">Rajesh Kumar</h4>
              <p className="text-blue-600 font-semibold mb-2">Data Scientist @ Microsoft</p>
              <p className="text-sm text-gray-600">
                "The comprehensive curriculum and hands-on projects prepared me for the industry challenges. 
                I'm grateful for the excellent placement support."
              </p>
            </div>
            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWEkmMkpVdLzYr0kM8MlGrO1wMJVz0QuTow&s"
                alt="Student"
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="font-bold text-gray-900 mb-2">Anitha Reddy</h4>
              <p className="text-blue-600 font-semibold mb-2">ML Engineer @ Amazon</p>
              <p className="text-sm text-gray-600">
                "The department's focus on research and innovation helped me develop a strong foundation 
                in machine learning and secure a role at Amazon."
              </p>
            </div>
          </div>
        </div>

        {/* Placement Process */}
        <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Placement Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Pre-placement Training</h4>
              <p className="text-sm text-blue-200">
                Comprehensive training in technical skills, soft skills, and interview preparation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Company Registration</h4>
              <p className="text-sm text-blue-200">
                Students register for companies based on eligibility criteria and career interests
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Selection Process</h4>
              <p className="text-sm text-blue-200">
                Written tests, technical interviews, and HR rounds as per company requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Final Placement</h4>
              <p className="text-sm text-blue-200">
                Job offers, salary negotiations, and joining formalities with continuous support
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placements;