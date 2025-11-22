import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '16px 24px',
      color: 'white',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>🚀 Project Hub</h1>
        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Dashboard</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Projects</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Tasks</a>
          <a href="#" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Team</a>
        </div>
      </div>
    </nav>
  );
};
