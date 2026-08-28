import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Faculty from './components/Faculty';
import Timetable from './components/Timetable';
import Events from './components/Events';
import Tribute from './components/Tribute';
import Placements from './components/Placements';
import Infrastructure from './components/Infrastructure';
import Notes from './components/Notes';
import Calendar from './components/Calendar';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />;
      case 'faculty':
        return <Faculty />;
      case 'timetable':
        return <Timetable />;
      case 'events':
        return <Events />;
      case 'tribute':
        return <Tribute />;
      case 'placements':
        return <Placements />;
      case 'infrastructure':
        return <Infrastructure />;
      case 'notes':
        return <Notes />;
      case 'calendar':
        return <Calendar />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderActiveSection()}
      </main>
    </div>
  );
}

export default App;