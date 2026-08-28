import React from 'react';
import { Heart, Award, BookOpen, Users, Star } from 'lucide-react';

const Tribute: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 to-teal-800 text-white rounded-2xl p-12 mb-12 text-center">
          <div className="max-w-4xl mx-auto">
            <Heart className="h-16 w-16 mx-auto mb-6 text-red-300" />
            <h1 className="text-5xl font-bold mb-6">
              Tribute to Late Dr. M.S. Ramaiah
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed">
              Honoring the visionary founder whose dedication to education and social service 
              continues to inspire generations of students and educators.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Biography Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Life and Legacy</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Dr. M.S. Ramaiah (1922-1999) was a visionary educationist, philanthropist, and social reformer 
                whose contributions to Indian society remain unparalleled. Born in a small village in Karnataka, 
                he rose to become one of India's most respected educators and institution builders.
              </p>
              
              <p className="mb-6">
                His journey began with a simple yet profound belief: education is the most powerful tool for 
                social transformation. This conviction led him to establish numerous educational institutions 
                that have produced thousands of engineers, doctors, and professionals who serve society with 
                distinction.
              </p>
              
              <p className="mb-6">
                Dr. Ramaiah's approach to education was holistic, emphasizing not just academic excellence 
                but also character building, social responsibility, and ethical values. He believed that 
                true education should create not just successful professionals, but compassionate human beings 
                committed to the welfare of society.
              </p>
              
              <p className="mb-6">
                His legacy extends beyond the classroom. Dr. Ramaiah was deeply committed to healthcare, 
                establishing world-class medical facilities that provide quality treatment to people from 
                all walks of life. His hospitals continue to serve as beacons of hope for countless patients.
              </p>
            </div>
          </div>

          {/* Image and Quick Facts */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsO7ycpNFMGUaSwRRpjWcyiuBbHifrZMQbsA&s"
                alt="Dr. M.S. Ramaiah"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. M.S. Ramaiah</h3>
                <p className="text-gray-600">Founder & Visionary</p>
                <p className="text-sm text-gray-500 mt-2">1922 - 1999</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Award className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-sm">Padma Bhushan</div>
                    <div className="text-xs text-gray-600">India's third-highest civilian honor</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookOpen className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-sm">Educational Pioneer</div>
                    <div className="text-xs text-gray-600">Founded 25+ institutions</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-sm">Social Reformer</div>
                    <div className="text-xs text-gray-600">Dedicated to social welfare</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Heart className="h-5 w-5 text-red-600 mr-3 mt-1" />
                  <div>
                    <div className="font-semibold text-sm">Healthcare Champion</div>
                    <div className="text-xs text-gray-600">Established premier hospitals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy and Values */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Philosophy and Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Education for All</h3>
              <p className="text-sm text-gray-600">
                Believed that quality education should be accessible to everyone, regardless of their background.
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-xl">
              <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Service to Society</h3>
              <p className="text-sm text-gray-600">
                Emphasized that true success comes from serving others and contributing to society's welfare.
              </p>
            </div>
            
            <div className="text-center p-6 bg-yellow-50 rounded-xl">
              <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence in Everything</h3>
              <p className="text-sm text-gray-600">
                Maintained the highest standards in all endeavors, setting benchmarks for quality and innovation.
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-xl">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Character Building</h3>
              <p className="text-sm text-gray-600">
                Focused on developing not just academic skills but also moral values and ethical principles.
              </p>
            </div>
          </div>
        </div>

        {/* Institutions Founded */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Institutions Founded</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Engineering Colleges</h3>
              <p className="text-sm text-gray-700">
                Multiple engineering institutions producing skilled technical professionals across various disciplines.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Medical Institutions</h3>
              <p className="text-sm text-gray-700">
                World-class medical colleges and hospitals providing healthcare education and services.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Management Schools</h3>
              <p className="text-sm text-gray-700">
                Business schools nurturing future leaders and entrepreneurs with strong ethical foundations.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-teal-900 mb-2">Research Centers</h3>
              <p className="text-sm text-gray-700">
                Advanced research facilities promoting innovation and technological advancement.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">Healthcare Network</h3>
              <p className="text-sm text-gray-700">
                Comprehensive healthcare system serving millions of patients with compassionate care.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-pink-900 mb-2">Social Initiatives</h3>
              <p className="text-sm text-gray-700">
                Various programs focused on community development and social welfare activities.
              </p>
            </div>
          </div>
        </div>

        {/* Memorial Quote */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl p-12 text-center">
          <blockquote className="text-2xl font-light italic mb-6">
            "Education is not just about acquiring knowledge, but about building character, 
            developing compassion, and nurturing a spirit of service to humanity."
          </blockquote>
          <div className="text-lg text-gray-300">— Dr. M.S. Ramaiah</div>
          
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-blue-200 text-lg">
              His vision continues to guide our institution as we strive to uphold the values 
              he cherished and the standards he set for excellence in education and service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tribute;