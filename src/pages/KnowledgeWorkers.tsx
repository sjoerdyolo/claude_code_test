import React, { useState } from 'react';
import { KnowledgeWorker } from '../types';
import '../styles/KnowledgeWorkers.css';

const initialWorkers: KnowledgeWorker[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    title: 'AI Research Scientist',
    expertise: ['Machine Learning', 'Neural Networks', 'AI Ethics'],
    followers: 45000,
    image: '👩‍🔬',
    bio: 'Leading researcher in ethical AI and machine learning systems. Former Google Brain researcher.',
    isFollowing: false,
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    title: 'Product Strategy Expert',
    expertise: ['Product Management', 'Strategy', 'Innovation'],
    followers: 32000,
    image: '👨‍💼',
    bio: 'Helped scale 5 startups to unicorn status. Author of "Product-Led Growth Handbook".',
    isFollowing: false,
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    title: 'Leadership Coach',
    expertise: ['Leadership', 'Team Building', 'Executive Coaching'],
    followers: 28000,
    image: '👩‍💻',
    bio: 'Executive coach for Fortune 500 CEOs. Specializes in transformational leadership.',
    isFollowing: true,
  },
  {
    id: '4',
    name: 'David Kim',
    title: 'Tech Entrepreneur',
    expertise: ['Startups', 'Venture Capital', 'SaaS'],
    followers: 56000,
    image: '👨‍🚀',
    bio: 'Serial entrepreneur with 3 successful exits. Active angel investor in 50+ startups.',
    isFollowing: false,
  },
  {
    id: '5',
    name: 'Dr. Amara Okafor',
    title: 'Data Science Leader',
    expertise: ['Data Science', 'Analytics', 'Big Data'],
    followers: 38000,
    image: '👩‍🎓',
    bio: 'Chief Data Scientist at DataCorp. PhD in Statistics from MIT. Published 50+ papers.',
    isFollowing: true,
  },
  {
    id: '6',
    name: 'James Martinez',
    title: 'Design Thinking Expert',
    expertise: ['UX Design', 'Design Thinking', 'Innovation'],
    followers: 41000,
    image: '👨‍🎨',
    bio: 'Former Head of Design at Apple. Now helping companies build customer-centric products.',
    isFollowing: false,
  },
];

const KnowledgeWorkers: React.FC = () => {
  const [workers, setWorkers] = useState<KnowledgeWorker[]>(initialWorkers);
  const [filter, setFilter] = useState<'all' | 'following'>('all');

  const handleToggleFollow = (id: string) => {
    setWorkers(
      workers.map((worker) =>
        worker.id === id ? { ...worker, isFollowing: !worker.isFollowing } : worker
      )
    );
  };

  const filteredWorkers =
    filter === 'following'
      ? workers.filter((worker) => worker.isFollowing)
      : workers;

  return (
    <div className="knowledge-workers-container">
      <div className="page-header">
        <div>
          <h1>Top Knowledge Workers</h1>
          <p>Discover and follow industry thought leaders</p>
        </div>
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({workers.length})
          </button>
          <button
            className={`filter-btn ${filter === 'following' ? 'active' : ''}`}
            onClick={() => setFilter('following')}
          >
            Following ({workers.filter((w) => w.isFollowing).length})
          </button>
        </div>
      </div>

      <div className="workers-grid">
        {filteredWorkers.map((worker) => (
          <div key={worker.id} className="worker-card">
            <div className="worker-avatar">{worker.image}</div>
            <div className="worker-info">
              <h3>{worker.name}</h3>
              <p className="worker-title">{worker.title}</p>
              <p className="worker-bio">{worker.bio}</p>
              <div className="worker-expertise">
                {worker.expertise.map((skill) => (
                  <span key={skill} className="expertise-tag">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="worker-stats">
                <span className="followers">
                  👥 {(worker.followers / 1000).toFixed(1)}K followers
                </span>
              </div>
            </div>
            <button
              className={`follow-button ${worker.isFollowing ? 'following' : ''}`}
              onClick={() => handleToggleFollow(worker.id)}
            >
              {worker.isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>
        ))}
      </div>

      {filteredWorkers.length === 0 && (
        <div className="empty-state">
          <p>You're not following anyone yet. Start following thought leaders!</p>
        </div>
      )}
    </div>
  );
};

export default KnowledgeWorkers;
