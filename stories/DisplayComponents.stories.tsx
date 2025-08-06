import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import GlassBadge from '../src/components/GlassBadge';
import GlassTooltip from '../src/components/GlassTooltip';
import GlassStats from '../src/components/GlassStats';
import GlassCard from '../src/components/GlassCard';
import GlassButton from '../src/components/GlassButton';

const meta: Meta = {
  title: 'Components/Display Components',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display components with glass morphism effects including badges, tooltips, stats, and other UI elements.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// GlassBadge Stories
export const BadgeExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <GlassCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Badge Variants</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-white/80 text-sm mb-2">Color Variants</h4>
            <div className="flex flex-wrap gap-2">
              <GlassBadge color="default">Default</GlassBadge>
              <GlassBadge color="success">Success</GlassBadge>
              <GlassBadge color="warning">Warning</GlassBadge>
              <GlassBadge color="error">Error</GlassBadge>
              <GlassBadge color="info">Info</GlassBadge>
            </div>
          </div>
          
          <div>
            <h4 className="text-white/80 text-sm mb-2">Status Badges</h4>
            <div className="flex flex-wrap gap-2">
              <GlassBadge color="success">Online</GlassBadge>
              <GlassBadge color="warning">Pending</GlassBadge>
              <GlassBadge color="error">Offline</GlassBadge>
              <GlassBadge color="info">Maintenance</GlassBadge>
            </div>
          </div>
          
          <div>
            <h4 className="text-white/80 text-sm mb-2">Feature Badges</h4>
            <div className="flex flex-wrap gap-2">
              <GlassBadge color="success">New</GlassBadge>
              <GlassBadge color="warning">Beta</GlassBadge>
              <GlassBadge color="error">Deprecated</GlassBadge>
              <GlassBadge color="info">Pro</GlassBadge>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  ),
};

export const BadgeWithIcons: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <GlassCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Badges with Icons</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-white/80 text-sm mb-2">Status with Icons</h4>
            <div className="flex flex-wrap gap-2">
              <GlassBadge color="success">✅ Active</GlassBadge>
              <GlassBadge color="warning">⏳ Pending</GlassBadge>
              <GlassBadge color="error">❌ Failed</GlassBadge>
              <GlassBadge color="info">ℹ️ Info</GlassBadge>
            </div>
          </div>
          
          <div>
            <h4 className="text-white/80 text-sm mb-2">Feature Flags</h4>
            <div className="flex flex-wrap gap-2">
              <GlassBadge color="success">🚀 New Feature</GlassBadge>
              <GlassBadge color="warning">🔧 Beta</GlassBadge>
              <GlassBadge color="error">⚠️ Deprecated</GlassBadge>
              <GlassBadge color="info">💎 Premium</GlassBadge>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  ),
};

// GlassTooltip Stories
export const TooltipExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <GlassCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Tooltip Examples</h3>
        
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <GlassTooltip content="This is a simple tooltip">
              <GlassButton size="sm">Hover Me</GlassButton>
            </GlassTooltip>
            
            <GlassTooltip content="Tooltip with custom positioning">
              <GlassButton size="sm" variant="subtle">Top Tooltip</GlassButton>
            </GlassTooltip>
            
            <GlassTooltip content="This tooltip has a longer message to demonstrate text wrapping and positioning">
              <GlassButton size="sm" variant="intense">Long Tooltip</GlassButton>
            </GlassTooltip>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <GlassTooltip content="Success action">
              <GlassBadge color="success">✅ Success</GlassBadge>
            </GlassTooltip>
            
            <GlassTooltip content="Warning message">
              <GlassBadge color="warning">⚠️ Warning</GlassBadge>
            </GlassTooltip>
            
            <GlassTooltip content="Error state">
              <GlassBadge color="error">❌ Error</GlassBadge>
            </GlassTooltip>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <GlassTooltip content="Click to learn more">
              <span className="text-white/80 cursor-help underline">Help text</span>
            </GlassTooltip>
            
            <GlassTooltip content="This is a custom styled tooltip">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-help">
                ?
              </div>
            </GlassTooltip>
          </div>
        </div>
      </GlassCard>
    </div>
  ),
};

// GlassStats Stories
export const StatsExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <GlassCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Statistics Dashboard</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-white/80 text-sm mb-4">Basic Stats</h4>
            <GlassStats 
              stats={[
                { value: "42K", label: "Active Users" },
                { value: "1.2K", label: "Projects" },
                { value: "99.9%", label: "Uptime" },
                { value: "$2.4M", label: "Revenue" }
              ]} 
            />
          </div>
          
          <div>
            <h4 className="text-white/80 text-sm mb-4">Performance Metrics</h4>
            <GlassStats 
              stats={[
                { value: "1.2s", label: "Load Time" },
                { value: "95%", label: "Performance" },
                { value: "2.1K", label: "Requests/min" },
                { value: "99.5%", label: "Success Rate" }
              ]} 
            />
          </div>
          
          <div>
            <h4 className="text-white/80 text-sm mb-4">User Analytics</h4>
            <GlassStats 
              stats={[
                { value: "15.2K", label: "Monthly Users" },
                { value: "3.4K", label: "Daily Active" },
                { value: "2.1K", label: "New Users" },
                { value: "87%", label: "Retention" }
              ]} 
            />
          </div>
        </div>
      </GlassCard>
    </div>
  ),
};

export const StatsWithBadges: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <GlassCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Stats with Status Badges</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-white/80 text-sm mb-4">System Status</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <GlassStats 
                  stats={[
                    { value: "Online", label: "API Status" },
                    { value: "Healthy", label: "Database" },
                    { value: "Active", label: "CDN" },
                    { value: "Running", label: "Services" }
                  ]} 
                />
                <div className="flex gap-2 mt-4">
                  <GlassBadge color="success">✅ All Systems</GlassBadge>
                  <GlassBadge color="info">ℹ️ Monitoring</GlassBadge>
                </div>
              </div>
              
              <div>
                <GlassStats 
                  stats={[
                    { value: "Warning", label: "Load Average" },
                    { value: "Error", label: "Disk Space" },
                    { value: "Online", label: "Network" },
                    { value: "Healthy", label: "Memory" }
                  ]} 
                />
                <div className="flex gap-2 mt-4">
                  <GlassBadge color="warning">⚠️ Issues Detected</GlassBadge>
                  <GlassBadge color="error">❌ Critical</GlassBadge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  ),
};

// Combined Display Example
export const DashboardExample: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <GlassCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Dashboard Overview</h3>
          <div className="flex gap-2">
            <GlassBadge color="success">Live</GlassBadge>
            <GlassBadge color="info">v2.1.0</GlassBadge>
          </div>
        </div>
        
        <div className="space-y-6">
          <GlassStats 
            stats={[
              { value: "42K", label: "Active Users" },
              { value: "1.2K", label: "Projects" },
              { value: "99.9%", label: "Uptime" },
              { value: "$2.4M", label: "Revenue" }
            ]} 
          />
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="text-white/80 text-sm">Recent Activity</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <GlassBadge color="success">✅</GlassBadge>
                  <span className="text-white/80 text-sm">User registration completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlassBadge color="warning">⚠️</GlassBadge>
                  <span className="text-white/80 text-sm">System maintenance scheduled</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlassBadge color="info">ℹ️</GlassBadge>
                  <span className="text-white/80 text-sm">New feature deployed</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-white/80 text-sm">Quick Actions</h4>
              <div className="space-y-2">
                <GlassTooltip content="View detailed analytics">
                  <GlassButton size="sm" variant="subtle">Analytics</GlassButton>
                </GlassTooltip>
                <GlassTooltip content="Manage user settings">
                  <GlassButton size="sm" variant="subtle">Settings</GlassButton>
                </GlassTooltip>
                <GlassTooltip content="Export data report">
                  <GlassButton size="sm" variant="subtle">Export</GlassButton>
                </GlassTooltip>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  ),
}; 