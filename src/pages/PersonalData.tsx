import React, { useState } from 'react';
import { UserProfile } from '../types';
import '../styles/PersonalData.css';

const PersonalData: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>({
    name: localStorage.getItem('userProfile')
      ? JSON.parse(localStorage.getItem('userProfile')!).name
      : 'John Doe',
    email: localStorage.getItem('userProfile')
      ? JSON.parse(localStorage.getItem('userProfile')!).email
      : 'john.doe@example.com',
    role: localStorage.getItem('userProfile')
      ? JSON.parse(localStorage.getItem('userProfile')!).role
      : 'CEO',
    companyName: localStorage.getItem('userProfile')
      ? JSON.parse(localStorage.getItem('userProfile')!).companyName
      : 'Acme Corp',
    companySize: localStorage.getItem('userProfile')
      ? JSON.parse(localStorage.getItem('userProfile')!).companySize
      : '51-200',
    industry: localStorage.getItem('userProfile')
      ? JSON.parse(localStorage.getItem('userProfile')!).industry
      : 'Technology',
  });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    localStorage.setItem('userProfile', JSON.stringify(profile));
  };

  const handleCancel = () => {
    setIsEditing(false);
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      setProfile(JSON.parse(savedProfile));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="personal-data-container">
      <div className="page-header">
        <h1>Personal Data</h1>
        <p>Manage your personal and company information</p>
      </div>

      <div className="data-sections">
        <div className="data-card">
          <div className="card-header">
            <h2>Personal Information</h2>
            {!isEditing && (
              <button onClick={handleEdit} className="edit-button">
                Edit
              </button>
            )}
          </div>
          <div className="card-content">
            <div className="data-row">
              <label>Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                />
              ) : (
                <span>{profile.name}</span>
              )}
            </div>
            <div className="data-row">
              <label>Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                />
              ) : (
                <span>{profile.email}</span>
              )}
            </div>
            <div className="data-row">
              <label>Role</label>
              {isEditing ? (
                <input
                  type="text"
                  name="role"
                  value={profile.role}
                  onChange={handleChange}
                />
              ) : (
                <span>{profile.name}</span>
              )}
            </div>
          </div>
        </div>

        <div className="data-card">
          <div className="card-header">
            <h2>Company Information</h2>
          </div>
          <div className="card-content">
            <div className="data-row">
              <label>Company Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="companyName"
                  value={profile.companyName}
                  onChange={handleChange}
                />
              ) : (
                <span>{profile.companyName}</span>
              )}
            </div>
            <div className="data-row">
              <label>Company Size</label>
              {isEditing ? (
                <select
                  name="companySize"
                  value={profile.companySize}
                  onChange={handleChange}
                >
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501+">501+ employees</option>
                </select>
              ) : (
                <span>{profile.companySize} employees</span>
              )}
            </div>
            <div className="data-row">
              <label>Industry</label>
              {isEditing ? (
                <select
                  name="industry"
                  value={profile.industry}
                  onChange={handleChange}
                >
                  <option value="Technology">Technology</option>
                  <option value="Finance">Finance</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Retail">Retail</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <span>{profile.industry}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="action-buttons">
          <button onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
          <button onClick={handleSave} className="save-button">
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default PersonalData;
