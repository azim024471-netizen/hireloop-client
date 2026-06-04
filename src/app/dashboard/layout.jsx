import { DashboardSideBar } from '@/components/dashboard/DashboardSideBar';
import React from 'react';

const DashboardLayout = ({ children }) => {
    return (
        <div className='flex flex-1 min-h-screen'>
            <DashboardSideBar></DashboardSideBar>
            <div className="w-full p-6">
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;