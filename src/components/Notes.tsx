import React, { useState } from 'react';
import { Upload, Download, FileText, Search, Filter, Eye, Calendar, User } from 'lucide-react';

interface Note {
  id: number;
  title: string;
  subject: string;
  semester: string;
  uploadedBy: string;
  uploadDate: string;
  fileType: string;
  fileSize: string;
  downloads: number;
  description: string;
  tags: string[];
}

const Notes: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const notes: Note[] = [
    {
      id: 1,
      title: "Machine Learnings ",
      subject: "Machine Learning",
      semester: "6",
      uploadedBy: "Mrs Mitha D",
      uploadDate: "2025-07-15",
      fileType: "PDF",
      fileSize: "2.5 MB",
      downloads: 245,
      description: "Comprehensive notes covering supervised and unsupervised learning algorithms, including decision trees, SVM, and clustering techniques.",
      tags: ["ML", "Algorithms", "Supervised Learning", "Unsupervised Learning"],
    },
    {
      id: 2,
      title: "Deep Learning Neural Networks",
      subject: "Deep Learning",
      semester: "7",
      uploadedBy: "Mrs. Varshitha M",
      uploadDate: "2025-07-20",
      fileType: "PDF",
      fileSize: "3.8 MB",
      downloads: 189,
      description: "Detailed study material on neural networks, backpropagation, CNNs, and RNNs with practical examples and implementations.",
      tags: ["Deep Learning", "Neural Networks", "CNN", "RNN", "Backpropagation"]
    },
    {
      id: 3,
      title: "Data Structures and Algorithms",
      subject: "Data Structures",
      semester: "3",
      uploadedBy: "Mrs Bindhushree",
      uploadDate: "2025-01-18",
      fileType: "PDF",
      fileSize: "4.2 MB",
      downloads: 356,
      description: "Complete guide to data structures including arrays, linked lists, trees, graphs, and sorting algorithms with complexity analysis.",
      tags: ["DSA", "Arrays", "Trees", "Graphs", "Sorting", "Complexity"]
    },
    {
      id: 4,
      title: "Python Programming ",
      subject: "Python Programming",
      semester: "1",
      uploadedBy: "Mrs Spandana",
      uploadDate: "2025-01-22",
      fileType: "PDF",
      fileSize: "1.8 MB",
      downloads: 412,
      description: "Practical lab exercises and programs covering Python basics, object-oriented programming, and libraries like NumPy and Pandas.",
      tags: ["Python", "Programming", "OOP", "NumPy", "Pandas", "Lab"]
    },
    {
      id: 5,
      title: "Database Management Systems",
      subject: "DBMS",
      semester: "4",
      uploadedBy: "Mrs Bindhushree",
      uploadDate: "2024-01-25",
      fileType: "PDF",
      fileSize: "3.1 MB",
      downloads: 298,
      description: "Comprehensive notes on database design, normalization, SQL queries, transactions, and database security concepts.",
      tags: ["DBMS", "SQL", "Normalization", "Transactions", "Database Design"]
    },
    {
      id: 6,
      title: "Computer Networks",
      subject: "Computer Networks",
      semester: "4",
      uploadedBy: "Ms Usha D",
      uploadDate: "2024-01-28",
      fileType: "PDF",
      fileSize: "2.9 MB",
      downloads: 223,
      description: "Network protocols, OSI model, TCP/IP, routing algorithms, and network security fundamentals with practical examples.",
      tags: ["Networks", "OSI Model", "TCP/IP", "Routing", "Security"]
    },
    {
      id: 7,
      title: "Statistics for Data Science",
      subject: "Statistics",
      semester: "3",
      uploadedBy: "Mr. Raghu Nandan R",
      uploadDate: "2025-01-30",
      fileType: "PDF",
      fileSize: "2.2 MB",
      downloads: 167,
      description: "Statistical concepts essential for data science including hypothesis testing, regression analysis, and probability distributions.",
      tags: ["Statistics", "Hypothesis Testing", "Regression", "Probability"]
    },
    {
      id: 8,
      title: "Web Development Complete Guide",
      subject: "Web Technologies",
      semester: "6",
      uploadedBy: "Mr. Raghu Nandan R",
      uploadDate: "2025-02-02",
      fileType: "PDF",
      fileSize: "5.1 MB",
      downloads: 134,
      description: "Full-stack web development covering HTML, CSS, JavaScript, React, Node.js, and database integration with practical projects.",
      tags: ["Web Development", "HTML", "CSS", "JavaScript", "React", "Node.js"]
    }
  ];

  const subjects = [...new Set(notes.map(note => note.subject))];
  const semesters = [...new Set(notes.map(note => note.semester))].sort();

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSemester = selectedSemester === 'all' || note.semester === selectedSemester;
    const matchesSubject = selectedSubject === 'all' || note.subject === selectedSubject;
    
    return matchesSearch && matchesSemester && matchesSubject;
  });

  const handleUpload = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle file upload logic here
    setShowUploadModal(false);
    // Show success message
    alert('File uploaded successfully!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Study Notes & Resources</h2>
          <p className="text-lg text-gray-600">
            Access and share study materials, lecture notes, and resources with your fellow students
          </p>
        </div>

        {/* Upload Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowUploadModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto"
          >
            <Upload className="h-5 w-5 mr-2" />
            Upload Notes
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search notes, subjects, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Semesters</option>
                {semesters.map(sem => (
                  <option key={sem} value={sem}>Semester {sem}</option>
                ))}
              </select>
            </div>
            
            <div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Subjects</option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <div key={note.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{note.title}</h3>
                    <p className="text-blue-600 font-semibold">{note.subject}</p>
                  </div>
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                  Sem {note.semester}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{note.description}</p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {note.tags.slice(0, 4).map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
                {note.tags.length > 4 && (
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                    +{note.tags.length - 4} more
                  </span>
                )}
              </div>
              
              <div className="space-y-2 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {note.uploadedBy}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(note.uploadDate).toLocaleDateString()}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    {note.fileType} • {note.fileSize}
                  </div>
                  <div className="flex items-center">
                    <Download className="h-4 w-4 mr-1" />
                    {note.downloads}
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No notes found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or upload new notes</p>
          </div>
        )}

        {/* Upload Modal */}
        {showUploadModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-md w-full p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">Upload Notes</h3>
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
              
              <form onSubmit={handleUpload} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                  <input
                    type="text"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter note title"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select subject</option>
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>{subject}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
                  <select
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select semester</option>
                    {semesters.map(sem => (
                      <option key={sem} value={sem}>Semester {sem}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of the notes"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">File</label>
                  <input
                    type="file"
                    required
                    accept=".pdf,.doc,.docx,.ppt,.pptx"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowUploadModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;