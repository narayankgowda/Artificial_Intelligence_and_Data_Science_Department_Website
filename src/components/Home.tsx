import React from 'react';
import { Brain, Code, Database, Award } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative overflow-hidden text-white min-h-[500px] flex items-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ 
            backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhmcupd1VtZUFu_ptqrgjYZOApvezTRbF4-A&s)'
          }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div> {/* Increased opacity for better readability */}
        
        {/* Content */}
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              AI & DS Department
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
              Pioneering the future of technology through cutting-edge research and innovation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-lg font-semibold">Excellence in Education</span>
              </div>
              <div className="bg-white/10 hover:bg-white/20 transition-all backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <span className="text-lg font-semibold">Innovation Driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-700 mb-2">50+</div>
              <div className="text-gray-600">Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">95%</div>
              <div className="text-gray-600">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-700 mb-2">100+</div>
              <div className="text-gray-600">Projects</div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Overview */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Our Department</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The AI & Data Science Department at M.S. Ramaiah Institute is at the forefront of technological 
              advancement, offering world-class education and research opportunities. Our programs are designed 
              to prepare students for the rapidly evolving landscape of artificial intelligence, machine learning, 
              and data analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Artificial Intelligence</h3>
              <p className="text-gray-600">
                Comprehensive AI curriculum covering machine learning, deep learning, and neural networks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Database className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Science</h3>
              <p className="text-gray-600">
                Advanced data analytics, statistical modeling, and big data processing techniques.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Programming</h3>
              <p className="text-gray-600">
                Hands-on experience with Python, R, TensorFlow, and other cutting-edge technologies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Research Excellence</h3>
              <p className="text-gray-600">
                Leading research in AI ethics, computer vision, and natural language processing.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be a globally recognized center of excellence in AI and Data Science education, 
                research, and innovation, producing skilled professionals who will shape the future 
                of technology and contribute to societal advancement.
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-teal-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To provide quality education, foster innovation, and conduct impactful research 
                in artificial intelligence and data science while maintaining the highest ethical 
                standards and promoting interdisciplinary collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;