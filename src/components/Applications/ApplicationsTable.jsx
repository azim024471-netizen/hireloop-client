import Link from 'next/link';

const statusStyles = {
  pending:
    'border border-yellow-500 text-yellow-400',
  review:
    'border border-yellow-500 text-yellow-400',
  shortlisted:
    'border border-green-500 text-green-400',
  rejected:
    'border border-red-500 text-red-400',
  applied:
    'border border-white text-white',
  offered:
    'border border-sky-500 text-sky-400',
};

const ApplicationsTable = ({ applications }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-zinc-800">
            <tr className="text-left text-zinc-400">
              <th className="p-5">Job Title</th>
              <th className="p-5">Company</th>
              <th className="p-5">Applied</th>
              <th className="p-5">Status</th>
              <th className="p-5">Action</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((application) => (
              <tr
                key={application._id}
                className="border-b border-zinc-900"
              >
                <td className="p-5">
                  <div>
                    <h3 className="font-medium text-white">
                      {application.jobTitle}
                    </h3>

                    <p className="text-sm text-zinc-500">
                      Job Application
                    </p>
                  </div>
                </td>

                <td className="p-5 text-zinc-300">
                  {application.companyName}
                </td>

                <td className="p-5 text-zinc-400">
                  Recently
                </td>

                <td className="p-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      statusStyles[
                        application.status?.toLowerCase()
                      ] ||
                      'border border-zinc-600 text-zinc-400'
                    }`}
                  >
                    {application.status || 'Applied'}
                  </span>
                </td>

                <td className="p-5">
                  <Link
                    href={`/jobs/${application.jobId}`}
                    className="text-white hover:text-violet-400"
                  >
                    Details
                  </Link>
                </td>
              </tr>
            ))}

            {applications.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="py-12 text-center text-zinc-500"
                >
                  No applications found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsTable;  