import React from 'react';

const DashboardStats = ({ stats }) => {
  return (
    <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="w-full rounded-xl border border-zinc-800 bg-[#1B1B1C] p-6 transition-all duration-300 hover:border-zinc-700"
          >
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800">
              <Icon className="h-5 w-5 text-zinc-300" />
            </div>

            <p className="text-sm text-zinc-400">
              {item.title}
            </p>

            <h3 className="mt-3 text-3xl font-semibold text-white">
              {item.value}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;