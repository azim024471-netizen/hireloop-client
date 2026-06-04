'use client';

import { FiSearch, FiMapPin } from 'react-icons/fi';
import { HiBriefcase } from 'react-icons/hi2';

export default function HeroSection() {
  const trendingJobs = [
    'Product Designer',
    'AI Engineering',
    'DevOps Engineer',
  ];

  return (
    <section className="relative min-h-screen overflow-hidden ">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_40%)]" />

      <div className="absolute left-1/2 top-[80%] h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[180px]" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute left-[20%] top-[70%] h-1 w-1 rounded-full bg-violet-400" />
        <div className="absolute left-[35%] top-[80%] h-1 w-1 rounded-full bg-violet-400" />
        <div className="absolute left-[60%] top-[75%] h-1 w-1 rounded-full bg-violet-400" />
        <div className="absolute left-[80%] top-[65%] h-1 w-1 rounded-full bg-violet-400" />
        <div className="absolute left-[75%] top-[82%] h-1 w-1 rounded-full bg-violet-400" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Badge */}
        <div className="mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl">
          <HiBriefcase className="text-amber-400" />
          <span className="font-semibold text-white">50,000+</span>
          <span className="text-white/60">NEW JOBS THIS MONTH</span>
        </div>

        {/* Heading */}
        <h1 className="max-w-4xl text-center text-5xl font-bold text-white md:text-7xl">
          Find Your Dream Job Today
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-center text-lg leading-relaxed text-white/60">
          HireLoop connects top talent with world-class companies.
          Browse thousands of curated opportunities and land your
          next role — faster.
        </p>

        {/* Search Box */}
        <div className="mt-12 w-full max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              {/* Search Input */}
              <div className="flex flex-1 items-center gap-3 px-3">
                <FiSearch className="text-xl text-white/50" />
                <input
                  type="text"
                  placeholder="Job title, skill or company"
                  className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
                />
              </div>

              <div className="hidden h-8 w-px bg-white/10 md:block" />

              {/* Location Input */}
              <div className="flex flex-1 items-center gap-3 px-3">
                <FiMapPin className="text-xl text-white/50" />
                <input
                  type="text"
                  placeholder="Location or Remote"
                  className="w-full bg-transparent text-white outline-none placeholder:text-white/40"
                />
              </div>

              {/* Search Button */}
              <button className="flex h-14 w-full md:w-14 items-center justify-center rounded-xl bg-violet-600 text-white shadow-lg shadow-violet-500/40 transition hover:bg-violet-500">
                <FiSearch size={22} />
              </button>
            </div>
          </div>
        </div>

        {/* Trending */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="text-white/50">Trending Position</span>

          {trendingJobs.map((job) => (
            <button
              key={job}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
            >
              {job}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}