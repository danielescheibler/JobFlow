import type { JobForm as JobFormData } from "../types/jobs";

type Props = {
  job: JobFormData;
  setJob: React.Dispatch<React.SetStateAction<JobFormData>>;
  handleSubmit: () => void;
  editingId: string | null;
};

function JobForm({ job, setJob, handleSubmit, editingId }: Props) {
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <input
        className="input"
        type="text"
        placeholder="Empresa"
        value={job.company}
        onChange={(e) =>
          setJob({
            ...job,
            company: e.target.value,
          })
        }
      />

      <input
        className="input"
        type="text"
        placeholder="Cargo"
        value={job.position}
        onChange={(e) =>
          setJob({
            ...job,
            position: e.target.value,
          })
        }
      />

      <input
        className="input"
        type="text"
        placeholder="Salário"
        value={job.salary}
        onChange={(e) =>
          setJob({
            ...job,
            salary: e.target.value,
          })
        }
      />

      <select
        className="input"
        value={job.modality}
        onChange={(e) =>
          setJob({
            ...job,
            modality: e.target.value,
            location: e.target.value === "Remoto" ? "" : job.location,
          })
        }
      >
        <option value="Remoto">Remoto</option>
        <option value="Híbrido">Híbrido</option>
        <option value="Presencial">Presencial</option>
      </select>

      {job.modality !== "Remoto" && (
        <input
          className="input"
          type="text"
          placeholder="Cidade / Estado"
          value={job.location ?? ""}
          onChange={(e) =>
            setJob({
              ...job,
              location: e.target.value,
            })
          }
        />
      )}

      <select
        className="input full-width"
        value={job.status}
        onChange={(e) =>
          setJob({
            ...job,
            status: e.target.value,
          })
        }
      >
        <option value="Enviado">Enviado</option>
        <option value="Entrevista">Entrevista</option>
        <option value="Teste técnico">Teste técnico</option>
        <option value="Oferta">Oferta</option>
        <option value="Rejeitado">Rejeitado</option>
      </select>

      <button type="submit" className="button button-primary full-width">
        {editingId ? "Salvar alteração" : "Adicionar vaga"}
      </button>
    </form>
  );
}

export default JobForm;
