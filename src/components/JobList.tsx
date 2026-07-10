import type { Job } from "../types/jobs";
import JobCard from "./JobCard";

type Props = {
  jobs: Job[];
  editJob: (id: string) => void;
  deleteJob: (id: string) => void;
};


function JobList({
  jobs,
  editJob,
  deleteJob,
}: Props) {

  if (jobs.length === 0) {
    return (
      <div className="empty-state">

        <span className="empty-icon">
          📂
        </span>

        <h3>
          Nenhuma candidatura cadastrada
        </h3>

        <p>
          Comece adicionando sua primeira oportunidade
          e organize seus processos seletivos.
        </p>

      </div>
    );
  }


  return (
    <div className="cards-grid">

      {jobs.map((job) => (

        <JobCard
          key={job.id}
          job={job}
          editJob={editJob}
          deleteJob={deleteJob}
        />

      ))}

    </div>
  );
}


export default JobList;