import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './components/Onboarding';
import Layout from './components/Layout';
import AIAgent from './pages/AIAgent';
import PersonalData from './pages/PersonalData';
import KnowledgeWorkers from './pages/KnowledgeWorkers';
import { UserProfile } from './types';
import './styles/global.css';

function App() {
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);

  useEffect(() => {
    const onboarded = localStorage.getItem('onboardingComplete');
    if (onboarded === 'true') {
      setHasCompletedOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = (profile: UserProfile) => {
    localStorage.setItem('userProfile', JSON.stringify(profile));
    localStorage.setItem('onboardingComplete', 'true');
    setHasCompletedOnboarding(true);
  };

  if (!hasCompletedOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/ai-agent" replace />} />
          <Route path="/ai-agent" element={<AIAgent />} />
          <Route path="/personal-data" element={<PersonalData />} />
          <Route path="/knowledge-workers" element={<KnowledgeWorkers />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
