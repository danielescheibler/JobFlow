import type { Job } from "../types/jobs";
import StatusBadge from "./StatusBadge";

type Props = {
  job: Job;
  editJob: (id: string) => void;
  deleteJob: (id: string) => void;
};

function JobCard({
  job,
  editJob,
  deleteJob,
}: Props) {

  return (

    <article className="card">

      <h3 className="card-title">
        {job.position}
      </h3>

      <p className="card-company">
        {job.company}
      </p>

      <div className="card-status">

        <StatusBadge
          status={job.status}
        />

      </div>

      <div className="card-info">

        <p>
          💼 {job.modality}
        </p>

        <p>
          💰 R$ {job.salary}
        </p>

      </div>

      <div className="card-dates">

        <small>

          📅 Candidatura

          <br />

          {new Date(job.appliedAt).toLocaleDateString()}

        </small>

        <small>

          🔄 Atualizada

          <br />

          {new Date(job.updatedAt).toLocaleDateString()}

        </small>

      </div>

      <div className="card-actions">

       <button
  type="button"
  className="button button-secondary"
  onClick={() => {
    console.log("JOBCARD:", job.id);
    editJob(job.id);
  }}
>
  Editar
</button>

        <button
          className="button button-danger"
          onClick={() => deleteJob(job.id)}
        >
          Excluir
        </button>

      </div>

    </article>

  );

}

export default JobCard;