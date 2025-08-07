import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import LiquidBadge from '../src/components/LiquidBadge';
import LiquidTooltip from '../src/components/LiquidTooltip';
import LiquidStats from '../src/components/LiquidStats';
import LiquidCard from '../src/components/LiquidCard';
import LiquidButton from '../src/components/LiquidButton';

const meta: Meta = {
  title: 'Components/Display Components',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Display components with Liquid morphism effects including badges, tooltips, stats, and other UI elements.',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// LiquidBadge Stories
export const BadgeExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <LiquidCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Badge Variants</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-white/80 text-sm mb-2">Color Variants</h4>
            <div className="flex flex-wrap gap-2">
              <LiquidBadge color="default">Default</LiquidBadge>
              <LiquidBadge color="success">Success</LiquidBadge>
              <LiquidBadge color="warning">Warning</LiquidBadge>
              <LiquidBadge color="error">Error</LiquidBadge>
              <LiquidBadge color="info">Info</LiquidBadge>
            </div>
          </div>
          
          <div>
            <h4 className="text-white/80 text-sm mb-2">Status Badges</h4>
            <div className="flex flex-wrap gap-2">
              <LiquidBadge color="success">Online</LiquidBadge>
              <LiquidBadge color="warning">Pending</LiquidBadge>
              <LiquidBadge color="error">Offline</LiquidBadge>
              <LiquidBadge color="info">Maintenance</LiquidBadge>
            </div>
          </div>
          
          <div>
            <h4 className="text-white/80 text-sm mb-2">Feature Badges</h4>
            <div className="flex flex-wrap gap-2">
              <LiquidBadge color="success">New</LiquidBadge>
              <LiquidBadge color="warning">Beta</LiquidBadge>
              <LiquidBadge color="error">Deprecated</LiquidBadge>
              <LiquidBadge color="info">Pro</LiquidBadge>
            </div>
          </div>
        </div>
      </LiquidCard>
    </div>
  ),
};

export const BadgeWithIcons: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <LiquidCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Badges with Icons</h3>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-white/80 text-sm mb-2">Status with Icons</h4>
            <div className="flex flex-wrap gap-2">
              <LiquidBadge color="success">✅ Active</LiquidBadge>
              <LiquidBadge color="warning">⏳ Pending</LiquidBadge>
              <LiquidBadge color="error">❌ Failed</LiquidBadge>
              <LiquidBadge color="info">ℹ️ Info</LiquidBadge>
            </div>
          </div>
          
          <div>
            <h4 className="text-white/80 text-sm mb-2">Feature Flags</h4>
            <div className="flex flex-wrap gap-2">
              <LiquidBadge color="success">🚀 New Feature</LiquidBadge>
              <LiquidBadge color="warning">🔧 Beta</LiquidBadge>
              <LiquidBadge color="error">⚠️ Deprecated</LiquidBadge>
              <LiquidBadge color="info">💎 Premium</LiquidBadge>
            </div>
          </div>
        </div>
      </LiquidCard>
    </div>
  ),
};

// LiquidTooltip Stories
export const TooltipExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <LiquidCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Tooltip Examples</h3>
        
        <div className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <LiquidTooltip content="This is a simple tooltip">
              <LiquidButton size="sm">Hover Me</LiquidButton>
            </LiquidTooltip>
            
            <LiquidTooltip content="Tooltip with custom positioning">
              <LiquidButton size="sm" variant="subtle">Top Tooltip</LiquidButton>
            </LiquidTooltip>
            
            <LiquidTooltip content="This tooltip has a longer message to demonstrate text wrapping and positioning">
              <LiquidButton size="sm" variant="intense">Long Tooltip</LiquidButton>
            </LiquidTooltip>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <LiquidTooltip content="Success action">
              <LiquidBadge color="success">✅ Success</LiquidBadge>
            </LiquidTooltip>
            
            <LiquidTooltip content="Warning message">
              <LiquidBadge color="warning">⚠️ Warning</LiquidBadge>
            </LiquidTooltip>
            
            <LiquidTooltip content="Error state">
              <LiquidBadge color="error">❌ Error</LiquidBadge>
            </LiquidTooltip>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <LiquidTooltip content="Click to learn more">
              <span className="text-white/80 cursor-help underline">Help text</span>
            </LiquidTooltip>
            
            <LiquidTooltip content="This is a custom styled tooltip">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center cursor-help">
                ?
              </div>
            </LiquidTooltip>
          </div>
        </div>
      </LiquidCard>
    </div>
  ),
};

// LiquidStats Stories
export const StatsExamples: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <LiquidCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Statistics Dashboard</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-white/80 text-sm mb-4">Basic Stats</h4>
            <LiquidStats 
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
            <LiquidStats 
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
            <LiquidStats 
              stats={[
                { value: "15.2K", label: "Monthly Users" },
                { value: "3.4K", label: "Daily Active" },
                { value: "2.1K", label: "New Users" },
                { value: "87%", label: "Retention" }
              ]} 
            />
          </div>
        </div>
      </LiquidCard>
    </div>
  ),
};

export const StatsWithBadges: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <LiquidCard className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Stats with Status Badges</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-white/80 text-sm mb-4">System Status</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <LiquidStats 
                  stats={[
                    { value: "Online", label: "API Status" },
                    { value: "Healthy", label: "Database" },
                    { value: "Active", label: "CDN" },
                    { value: "Running", label: "Services" }
                  ]} 
                />
                <div className="flex gap-2 mt-4">
                  <LiquidBadge color="success">✅ All Systems</LiquidBadge>
                  <LiquidBadge color="info">ℹ️ Monitoring</LiquidBadge>
                </div>
              </div>
              
              <div>
                <LiquidStats 
                  stats={[
                    { value: "Warning", label: "Load Average" },
                    { value: "Error", label: "Disk Space" },
                    { value: "Online", label: "Network" },
                    { value: "Healthy", label: "Memory" }
                  ]} 
                />
                <div className="flex gap-2 mt-4">
                  <LiquidBadge color="warning">⚠️ Issues Detected</LiquidBadge>
                  <LiquidBadge color="error">❌ Critical</LiquidBadge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LiquidCard>
    </div>
  ),
};

// Combined Display Example
export const DashboardExample: Story = {
  render: () => (
    <div className="space-y-6 max-w-4xl">
      <LiquidCard className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Dashboard Overview</h3>
          <div className="flex gap-2">
            <LiquidBadge color="success">Live</LiquidBadge>
            <LiquidBadge color="info">v2.1.0</LiquidBadge>
          </div>
        </div>
        
        <div className="space-y-6">
          <LiquidStats 
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
                  <LiquidBadge color="success">✅</LiquidBadge>
                  <span className="text-white/80 text-sm">User registration completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <LiquidBadge color="warning">⚠️</LiquidBadge>
                  <span className="text-white/80 text-sm">System maintenance scheduled</span>
                </div>
                <div className="flex items-center gap-2">
                  <LiquidBadge color="info">ℹ️</LiquidBadge>
                  <span className="text-white/80 text-sm">New feature deployed</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="text-white/80 text-sm">Quick Actions</h4>
              <div className="space-y-2">
                <LiquidTooltip content="View detailed analytics">
                  <LiquidButton size="sm" variant="subtle">Analytics</LiquidButton>
                </LiquidTooltip>
                <LiquidTooltip content="Manage user settings">
                  <LiquidButton size="sm" variant="subtle">Settings</LiquidButton>
                </LiquidTooltip>
                <LiquidTooltip content="Export data report">
                  <LiquidButton size="sm" variant="subtle">Export</LiquidButton>
                </LiquidTooltip>
              </div>
            </div>
          </div>
        </div>
      </LiquidCard>
    </div>
  ),
}; 
