import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users } from 'lucide-react';

const RecruitmentPage = () => {
  const navigate = useNavigate();

  return (
    <div className="recruit-root">
      <div className="portal-bg" />
      <div className="portal-overlay" />

      <main className="recruit-card">
        <div className="recruit-icon">
          <Users size={48} />
        </div>
        <h1 className="recruit-title">Recruitment</h1>
        <p className="recruit-sub">
          This section is currently under development.<br />
          Career opportunities will be listed here soon.
        </p>
        <button
          className="portal-btn portal-btn-ghost recruit-back"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={18} />
          <span>Back to Portal</span>
        </button>
      </main>
    </div>
  );
};

export default RecruitmentPage;
