import type { Job } from "../types/jobs";

type Props = {
  jobs: Job[];
};

function RecentJobs({ jobs }: Props) {

  const recentJobs = [...jobs]
    .sort(
      (a, b) =>
        new Date(b.appliedAt).getTime() -
        new Date(a.appliedAt).getTime()
    )
    .slice(0, 5);


  return (
    <section className="recent-jobs">

      <h2>
        Últimas candidaturas
      </h2>


      {recentJobs.length === 0 ? (

        <p>
          Nenhuma candidatura recente.
        </p>

      ) : (

        <ul>

          {recentJobs.map((job) => (

            <li key={job.id}>

              <div>
                <strong>
                  {job.company}
                </strong>

                <span>
                  {job.position}
                </span>
              </div>


              <span className="job-status">
                {job.status}
              </span>

            </li>

          ))}

        </ul>

      )}

    </section>
  );
}


export default RecentJobs;