import React from 'react';
import { Mail, Phone, Award, BookOpen } from 'lucide-react';

interface FacultyMember {
  id: number;
  name: string;
  designation: string;
  department: string;
  email: string;
  phone: string;
  specialization: string[];
  experience: string;
  education?: string; // Made optional with ?
  image: string;
}

const Faculty: React.FC = () => {
  const facultyMembers: FacultyMember[] = [
    {
      id: 1,
      name: "Dr. Vinutha M R",
      designation: "Professor & Head of Department",
      department: "AI & DS",
      email: "vinutha@nceh.edu",
      phone: "+91 9844573993",
      specialization: ["Machine Learning", "Deep Learning"],
      experience: "15+ years",
      education: "Ph.D. in Computer Science",
      achievements: [
        "Published 45+ research papers",
        "IEEE Senior Member",
        "Best Teacher Award 2022"
      ],
      image: "https://www.navkisce.com/assets/image-path/faculty/Dr.%20Vinutha%20M%20R.jpeg"
    },
    {
      id: 2,
      name: "Dr. Pradeep N R",
      designation: "Professor",
      department: "AI & DS",
      email: "pradeepnr@navkisce.ac.in",
      phone: "+91 ",
      specialization: ["Computer Engineering", "AI Ethics"],
      experience: "12+ years",
      education: "M.Tech in Computer Science",
      image: "https://jpcdn.it/img/small/467b5404011ce347f6b8d7221801f175.jpg"
    },
    {
      id: 3,
      name: "Mrs. Mitha D",
      designation: "Associate Professor",
      department: "AI & DS",
      email: "mithad@navkisce.ac.in",
      phone: "+91 9686810817",
      specialization: ["Electronics", "Data Mining", "Predictive Analytics"],
      experience: "8+ years",
      education: "Ph.D. in Electronics",
      image: "https://navkisce.com/assets/image-path/AI-DS-Gallery/Ms.%20Mitha%20D.jpg"
    },
    {
      id: 4,
      name: "Mrs. Varshitha M",
      designation: "Associate Professor",
      department: "AI & DS",
      email: "varshaharitsa20@gmail.com",
      phone: "+91 9535724458",
      specialization: ["Nano technology"],
      experience: "10+ years",
      education: "M.Sc in Nanotechnology",
      image: "https://navkisce.com/assets/image-path/AI-DS-Gallery/Ms.%20Varshitha%20M.jpg"
    },
    {
      id: 5,
      name: "Mr. Raghu Nandan R",
      designation: "Assistant Professor",
      department: "AI & DS",
      email: "raghu.seit@rediffmail.com",
      phone: "+91 9620161331",
      specialization: ["Cybersecurity", "Blockchain"],
      experience: "15+ years",
      education: "M.Tech in Information Security",
      image: "https://navkisce.com/assets/image-path/AI-DS-Gallery/Mr.%20Raghu%20Nandan%20R.jpg"
    },
    {
      id: 6,
      name: "Ms. Syeda Fathima Aimam",
      designation: "Assistant Professor",
      department: "AI & DS",
      specialization: ["Software Engineering", "business analyst", "Cloud Computing"],
      experience: "5+ years",
      education: "M.Tech in Software Systems",
      image: "https://jpcdn.it/img/small/6876a0a9431ab4fc451f275bf371c89b.webp " 
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Distinguished Faculty</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet our world-class faculty members who bring decades of experience, cutting-edge research, 
            and industry expertise to shape the next generation of AI and Data Science professionals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {facultyMembers.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{faculty.name}</h3>
                      <p className="text-blue-600 font-semibold">{faculty.designation}</p>
                      <p className="text-gray-600">{faculty.department}</p>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <p>{faculty.experience}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <Mail className="h-4 w-4 text-blue-600 mr-2" />
                      <a
                        href={`mailto:${faculty.email}`}
                        className="text-sm text-blue-600 hover:underline"
                      >
                        {faculty.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-blue-600 mr-2" />
                      <span className="text-sm text-gray-600">{faculty.phone}</span>
                    </div>
                  </div>

                  {faculty.education && (
                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <BookOpen className="h-4 w-4 text-teal-600 mr-2" />
                        <span className="font-semibold text-gray-700">Education:</span>
                      </div>
                      <p className="text-sm text-gray-600 ml-6">{faculty.education}</p>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Specialization:</h4>
                    <div className="flex flex-wrap gap-2">
                      {faculty.specialization.map((spec, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {faculty.achievements && faculty.achievements.length > 0 && (
                    <div>
                      <div className="flex items-center mb-2">
                        <Award className="h-4 w-4 text-yellow-600 mr-2" />
                        <span className="font-semibold text-gray-700">Key Achievements:</span>
                      </div>
                      <ul className="text-sm text-gray-600 ml-6 space-y-1">
                        {faculty.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Department Statistics */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Faculty Statistics</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">6</div>
              <div className="text-gray-600">Total Faculty</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700 mb-2">4</div>
              <div className="text-gray-600">Ph.D. Holders</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">120+</div>
              <div className="text-gray-600">Research Papers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-700 mb-2">25+</div>
              <div className="text-gray-600">Industry Projects</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;