import React, { useState } from 'react';
import {
  LiquidNavbar,
  LiquidCard,
  LiquidButton,
  LiquidStats,
  LiquidProgressBar,
  LiquidModal,
  LiquidSidebar
} from '../../src';

const Dashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <LiquidNavbar className="mb-8">
        <div className="text-xl font-bold text-white">Dashboard</div>
        <div className="flex items-center space-x-4">
          <LiquidButton size="sm" onClick={() => setIsModalOpen(true)}>
            Settings
          </LiquidButton>
        </div>
      </LiquidNavbar>

      <div className="flex">
        <LiquidSidebar className="w-64 h-screen">
          <div className="p-4 space-y-4">
            <h3 className="text-white font-bold">Navigation</h3>
            <div className="space-y-2">
              <button className="w-full text-left text-white/80 hover:text-white p-2 rounded">
                Dashboard
              </button>
              <button className="w-full text-left text-white/80 hover:text-white p-2 rounded">
                Analytics
              </button>
              <button className="w-full text-left text-white/80 hover:text-white p-2 rounded">
                Users
              </button>
              <button className="w-full text-left text-white/80 hover:text-white p-2 rounded">
                Settings
              </button>
            </div>
          </div>
        </LiquidSidebar>

        <div className="flex-1 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <LiquidCard>
              <h3 className="text-xl font-bold mb-4 text-white">Revenue</h3>
              <div className="text-3xl font-bold text-white mb-2">$42,000</div>
              <div className="text-green-400 text-sm">+12% from last month</div>
            </LiquidCard>

            <LiquidCard>
              <h3 className="text-xl font-bold mb-4 text-white">Users</h3>
              <div className="text-3xl font-bold text-white mb-2">1,234</div>
              <div className="text-blue-400 text-sm">+5% from last week</div>
            </LiquidCard>

            <LiquidCard>
              <h3 className="text-xl font-bold mb-4 text-white">Orders</h3>
              <div className="text-3xl font-bold text-white mb-2">567</div>
              <div className="text-yellow-400 text-sm">+8% from yesterday</div>
            </LiquidCard>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <LiquidCard>
              <h3 className="text-xl font-bold mb-4 text-white">Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Sales Target</span>
                    <span>75%</span>
                  </div>
                  <LiquidProgressBar progress={75} />
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>User Growth</span>
                    <span>45%</span>
                  </div>
                  <LiquidProgressBar progress={45} />
                </div>
              </div>
            </LiquidCard>

            <LiquidCard>
              <h3 className="text-xl font-bold mb-4 text-white">Quick Actions</h3>
              <div className="space-y-3">
                <LiquidButton className="w-full">Add New User</LiquidButton>
                <LiquidButton variant="subtle" className="w-full">Generate Report</LiquidButton>
                <LiquidButton variant="minimal" className="w-full">View Analytics</LiquidButton>
              </div>
            </LiquidCard>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <LiquidModal size="md">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
            <p className="text-white/80 mb-6">
              Configure your dashboard settings and preferences here.
            </p>
            <div className="flex justify-end space-x-3">
              <LiquidButton variant="subtle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </LiquidButton>
              <LiquidButton onClick={() => setIsModalOpen(false)}>
                Save Changes
              </LiquidButton>
            </div>
          </div>
        </LiquidModal>
      )}
    </div>
  );
};

export default Dashboard;