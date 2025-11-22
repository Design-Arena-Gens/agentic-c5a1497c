import React from 'react';
import { Project } from '@/types';
import { formatDate, capitalize } from '@/utils/formatters';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    active: '#10b981',
    completed: '#3b82f6',
    archived: '#6b7280',
  };

  return (
    <div style={{
      background: 'white',
      borderRadius: '8px',
      padding: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '12px' }}>
        <h3 style={{ margin: 0, color: '#333', fontSize: '18px' }}>{project.title}</h3>
        <span style={{
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 'bold',
          color: 'white',
          background: statusColors[project.status],
        }}>
          {capitalize(project.status)}
        </span>
      </div>
      <p style={{ color: '#666', fontSize: '14px', margin: '0 0 12px 0' }}>{project.description}</p>
      <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#888' }}>
        <span>👤 {project.members.length} members</span>
        <span>✓ {project.tasks.filter(t => t.status === 'done').length}/{project.tasks.length} tasks</span>
        <span>📅 {formatDate(project.updatedAt)}</span>
      </div>
    </div>
  );
};
