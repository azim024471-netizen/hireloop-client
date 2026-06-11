import ApplicationsTable from '@/components/Applications/ApplicationsTable';
import ApplicationStats from '@/components/Applications/ApplicationStats';
import { getApplicationsByApplicant } from '@/lib/api/application';
import { getsession } from '@/lib/coreFunction/session';

const ApplicationsPage = async () => {
  const user = await getsession();

  const userApplications = await getApplicationsByApplicant(user?.id);

  const stats = {
    totalApplied: userApplications.length,
    shortlisted: userApplications.filter(
      (app) => app.status === 'shortlisted'
    ).length,
    interviews: userApplications.filter(
      (app) => app.status === 'interview'
    ).length,
    successRate: 12,
  };

  return (
    <div className="space-y-6">
      <ApplicationStats stats={stats} />

      <ApplicationsTable applications={userApplications} />
    </div>
  );
};

export default ApplicationsPage;