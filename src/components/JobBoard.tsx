import type { Job } from "../types/jobs";
import JobCard from "./JobCard";

type Props = {
  jobs: Job[];
  editJob: (id: string) => void;
  deleteJob: (id: string) => void;
  moveJob: (
    id: string,
    status: string
  ) => void;
};

function JobBoard({
  jobs,
  editJob,
  deleteJob,
  moveJob,
}: Props) {

  const columns = [
    "Enviado",
    "Entrevista",
    "Teste técnico",
    "Oferta",
    "Rejeitado",
  ];

  return (

    <section className="section">

      <div className="board">

        {columns.map((status) => {

          const jobsByStatus =
            jobs.filter(
              (job) => job.status === status
            );

          return (

            <div
              className="column"
              key={status}
            >

              <div className="column-header">

                <h3>{status}</h3>

                <span className="column-count">
                  {jobsByStatus.length}
                </span>

              </div>

              {jobsByStatus.length === 0 ? (

                <p className="empty">
                  Nenhuma vaga
                </p>

              ) : (

               <div className="cards-grid">

  {jobsByStatus.map((job) => (

    <JobCard
      key={job.id}
      job={job}
      editJob={editJob}
      deleteJob={deleteJob}
    />

  ))}

</div>

              )}

            </div>

          );

        })}

      </div>

    </section>

  );

}

export default JobBoard;