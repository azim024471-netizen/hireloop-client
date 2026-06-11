const ApplicationStats = ({ stats }) => {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      <StatCard
        title="Total Applied"
        value={stats.totalApplied}
      />

      <StatCard
        title="Shortlisted"
        value={stats.shortlisted}
      />

      <StatCard
        title="Interviews"
        value={stats.interviews}
        valueClass="text-amber-400"
      />

      <StatCard
        title="Success Rate"
        value={`${stats.successRate}%`}
        valueClass="text-green-500"
      />
    </div>
  );
};

function StatCard({
  title,
  value,
  valueClass = 'text-white',
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
      <p className="text-sm text-zinc-400">{title}</p>

      <h3 className={`mt-2 text-4xl font-bold ${valueClass}`}>
        {value}
      </h3>
    </div>
  );
}

export default ApplicationStats;