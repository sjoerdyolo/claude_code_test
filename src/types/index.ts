export interface UserProfile {
  name: string;
  email: string;
  role: string;
  companyName: string;
  companySize: string;
  industry: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface KnowledgeWorker {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  followers: number;
  image: string;
  bio: string;
  isFollowing: boolean;
}
