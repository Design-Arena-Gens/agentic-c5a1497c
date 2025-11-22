'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { StatCard } from '@/components/StatCard';
import { ProjectCard } from '@/components/ProjectCard';
import { TaskList } from '@/components/TaskList';
import { mockProjects, mockTasks, getDashboardStats } from '@/lib/data';

export default function Home() {
  const stats = getDashboardStats();

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navigation />

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ color: '#333', marginBottom: '16px', fontSize: '28px' }}>Dashboard Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <StatCard title="Total Projects" value={stats.totalProjects} icon="📁" color="#667eea" />
            <StatCard title="Active Projects" value={stats.activeProjects} icon="⚡" color="#10b981" />
            <StatCard title="Completed Tasks" value={stats.completedTasks} icon="✅" color="#3b82f6" />
            <StatCard title="Pending Tasks" value={stats.pendingTasks} icon="📋" color="#f59e0b" />
            <StatCard title="Team Members" value={stats.teamMembers} icon="👥" color="#764ba2" />
          </div>
        </section>

        <section style={{ marginBottom: '32px' }}>
          <h2 style={{ color: '#333', marginBottom: '16px', fontSize: '28px' }}>Active Projects</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {mockProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section>
          <TaskList tasks={mockTasks} />
        </section>

        <section style={{ marginTop: '48px', padding: '24px', background: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ color: '#333', marginBottom: '16px', fontSize: '24px' }}>📚 Architecture Guide</h2>
          <div style={{ color: '#666', lineHeight: '1.8' }}>
            <h3 style={{ color: '#667eea', fontSize: '18px' }}>How This App Handles Complexity:</h3>
            <ul style={{ paddingLeft: '24px' }}>
              <li><strong>Modular Structure:</strong> Code is organized into logical folders (components, lib, hooks, utils, types)</li>
              <li><strong>Type Safety:</strong> TypeScript interfaces define data models in a central types/ directory</li>
              <li><strong>Single Responsibility:</strong> Each component/function has one clear purpose</li>
              <li><strong>Reusable Components:</strong> Small, focused components that can be composed together</li>
              <li><strong>Data Layer Separation:</strong> Business logic in lib/, utilities in utils/, UI in components/</li>
              <li><strong>Custom Hooks:</strong> Shared logic extracted into reusable hooks</li>
              <li><strong>Path Aliases:</strong> Clean imports using @/ prefix via TypeScript config</li>
              <li><strong>Code Splitting:</strong> Next.js automatically splits code at page boundaries</li>
            </ul>

            <h3 style={{ color: '#764ba2', fontSize: '18px', marginTop: '24px' }}>Best Practices for Large Files:</h3>
            <ul style={{ paddingLeft: '24px' }}>
              <li>Break large components into smaller sub-components</li>
              <li>Extract shared logic into custom hooks</li>
              <li>Move utility functions to separate files</li>
              <li>Use barrel exports (index.ts) to simplify imports</li>
              <li>Lazy load heavy components with dynamic imports</li>
              <li>Keep files under 300 lines when possible</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
