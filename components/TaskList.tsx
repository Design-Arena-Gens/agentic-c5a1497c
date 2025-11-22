import React from 'react';
import { Task } from '@/types';
import { formatDate, capitalize } from '@/utils/formatters';

interface TaskListProps {
  tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const priorityColors = {
    low: '#6b7280',
    medium: '#f59e0b',
    high: '#ef4444',
    critical: '#dc2626',
  };

  const statusIcons = {
    todo: '⭕',
    'in-progress': '🔄',
    review: '👀',
    done: '✅',
  };

  return (
    <div style={{ background: 'white', borderRadius: '8px', padding: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ margin: '0 0 16px 0', color: '#333' }}>Recent Tasks</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {tasks.map(task => (
          <div
            key={task.id}
            style={{
              padding: '12px',
              border: '1px solid #e5e7eb',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ fontSize: '20px' }}>{statusIcons[task.status]}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <h4 style={{ margin: 0, fontSize: '14px', color: '#333' }}>{task.title}</h4>
                <span
                  style={{
                    padding: '2px 8px',
                    borderRadius: '8px',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    color: 'white',
                    background: priorityColors[task.priority],
                  }}
                >
                  {capitalize(task.priority)}
                </span>
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: '#666' }}>{task.description}</p>
              <div style={{ marginTop: '4px', fontSize: '11px', color: '#888' }}>
                {task.assignee && `Assigned to: ${task.assignee.name}`}
                {task.dueDate && ` • Due: ${formatDate(task.dueDate)}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
