import React, { useState } from 'react';
import {
  GlassNavbar,
  GlassCard,
  GlassButton,
  GlassStats,
  GlassProgressBar,
  GlassBadge,
  GlassModal,
  GlassInput,
  GlassSidebar
} from '../../src';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  
  const stats = [
    { value: "12.4K", label: "Total Users" },
    { value: "2.8K", label: "Active Sessions" },
    { value: "98.5%", label: "Uptime" },
    { value: "$45.2K", label: "Revenue" }
  ];

  const projects = [
    { name: "Project Alpha", progress: 85, status: "success", team: 4 },
    { name: "Beta Launch", progress: 60, status: "warning", team: 6 },
    { name: "Gamma Research", progress: 30, status: "info", team: 3 },
    { name: "Delta Testing", progress: 95, status: "success", team: 5 }
  ];

  const recentActivities = [
    { user: "Sarah Johnson", action: "completed task", time: "2 min ago" },
    { user: "Mike Chen", action: "uploaded files", time: "5 min ago" },
    { user: "Lisa Wang", action: "updated project", time: "12 min ago" },
    { user: "Tom Wilson", action: "joined meeting", time: "18 min ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Sidebar */}
      {sidebarOpen && (
        <GlassSidebar variant="default" position="left">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Menu</h2>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white py-2">Dashboard</a>
              <a href="#" className="block text-white/80 hover:text-white py-2">Projects</a>
              <a href="#" className="block text-white/80 hover:text-white py-2">Analytics</a>
              <a href="#" className="block text-white/80 hover:text-white py-2">Team</a>
              <a href="#" className="block text-white/80 hover:text-white py-2">Settings</a>
            </nav>
          </div>
        </GlassSidebar>
      )}

      {/* Main Content */}
      <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-64' : ''}`}>
        
        {/* Header */}
        <GlassNavbar
          variant="minimal"
          logo={
            <div className="flex items-center space-x-3">
              <GlassButton 
                size="sm" 
                variant="subtle"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                ☰
              </GlassButton>
              <span>Admin Dashboard</span>
            </div>
          }
          actions={
            <div className="flex items-center space-x-3">
              <GlassBadge color="success">Online</GlassBadge>
              <GlassButton size="sm" onClick={() => setModalOpen(true)}>
                Profile
              </GlassButton>
            </div>
          }
        />

        <div className="p-8 space-y-8">
          
          {/* Welcome Section */}
          <GlassCard>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">
                  Welcome back, Admin!
                </h1>
                <p className="text-white/70">
                  Here's what's happening with your projects today.
                </p>
              </div>
              <GlassButton variant="intense">
                New Project
              </GlassButton>
            </div>
          </GlassCard>

          {/* Stats Overview */}
          <GlassStats stats={stats} variant="subtle" />

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Projects Overview */}
            <div className="lg:col-span-2 space-y-6">
              <GlassCard>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-white">Active Projects</h2>
                  <GlassBadge color="info">{projects.length} Projects</GlassBadge>
                </div>
                
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <div key={index} className="p-4 rounded-lg bg-white/5">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {project.name}
                          </h3>
                          <p className="text-white/60 text-sm">
                            Team: {project.team} members
                          </p>
                        </div>
                        <GlassBadge color={project.status as any}>
                          {project.progress}%
                        </GlassBadge>
                      </div>
                      <GlassProgressBar 
                        value={project.progress}
                        variant="minimal"
                        showLabel={false}
                      />
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* Analytics Chart Placeholder */}
              <GlassCard>
                <h2 className="text-2xl font-bold text-white mb-6">Analytics</h2>
                <div className="h-64 flex items-center justify-center bg-white/5 rounded-lg">
                  <div className="text-center text-white/60">
                    <div className="text-4xl mb-4">📊</div>
                    <p>Chart visualization would go here</p>
                    <p className="text-sm">(Integration with your favorite chart library)</p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              
              {/* Quick Actions */}
              <GlassCard variant="subtle">
                <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <GlassButton className="w-full" variant="default">
                    Create Task
                  </GlassButton>
                  <GlassButton className="w-full" variant="subtle">
                    Upload Files
                  </GlassButton>
                  <GlassButton className="w-full" variant="minimal">
                    Schedule Meeting
                  </GlassButton>
                </div>
              </GlassCard>

              {/* Recent Activity */}
              <GlassCard variant="subtle">
                <h3 className="text-xl font-bold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="text-white text-sm">
                          <strong>{activity.user}</strong> {activity.action}
                        </p>
                        <p className="text-white/50 text-xs">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>

              {/* System Status */}
              <GlassCard variant="subtle">
                <h3 className="text-xl font-bold text-white mb-4">System Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Server</span>
                    <GlassBadge color="success">Online</GlassBadge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Database</span>
                    <GlassBadge color="success">Connected</GlassBadge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">CDN</span>
                    <GlassBadge color="warning">Slow</GlassBadge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">API</span>
                    <GlassBadge color="success">Healthy</GlassBadge>
                  </div>
                </div>
              </GlassCard>

            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <GlassCard>
              <h3 className="text-xl font-bold text-white mb-4">Resource Usage</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-white mb-1">
                    <span>CPU Usage</span>
                    <span>45%</span>
                  </div>
                  <GlassProgressBar value={45} showLabel={false} variant="minimal" />
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white mb-1">
                    <span>Memory</span>
                    <span>78%</span>
                  </div>
                  <GlassProgressBar value={78} showLabel={false} variant="minimal" />
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white mb-1">
                    <span>Storage</span>
                    <span>32%</span>
                  </div>
                  <GlassProgressBar value={32} showLabel={false} variant="minimal" />
                </div>
              </div>
            </GlassCard>

            <GlassCard>
              <h3 className="text-xl font-bold text-white mb-4">Quick Search</h3>
              <div className="space-y-3">
                <GlassInput placeholder="Search projects, users, files..." />
                <div className="flex space-x-2">
                  <GlassButton size="sm" variant="subtle">Projects</GlassButton>
                  <GlassButton size="sm" variant="subtle">Users</GlassButton>
                  <GlassButton size="sm" variant="subtle">Files</GlassButton>
                </div>
              </div>
            </GlassCard>

          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <GlassModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        variant="default"
      >
        <h2 className="text-2xl font-bold text-white mb-4">User Profile</h2>
        
        <div className="space-y-4">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-white">Admin User</h3>
            <p className="text-white/60">admin@company.com</p>
          </div>

          <GlassInput placeholder="Full Name" value="Admin User" />
          <GlassInput placeholder="Email" value="admin@company.com" />
          <GlassInput placeholder="Department" value="Engineering" />
          
          <div className="flex justify-end space-x-3 pt-4">
            <GlassButton 
              variant="subtle" 
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </GlassButton>
            <GlassButton onClick={() => setModalOpen(false)}>
              Save Changes
            </GlassButton>
          </div>
        </div>
      </GlassModal>
    </div>
  );
};

export default Dashboard;