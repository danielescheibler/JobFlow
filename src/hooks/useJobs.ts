import { useEffect, useState } from "react";

import type { Job, JobForm } from "../types/jobs";

import {
  getJobs,
  createJob,
  updateJob,
  deleteJobApi,
} from "../services/jobService";

export function useJobs() {
  const initialJob: JobForm = {
    company: "",
    position: "",
    salary: "",
    modality: "Remoto",
    location: "",
    status: "Enviado",
  };

  const [job, setJob] = useState<JobForm>(initialJob);

  const [jobs, setJobs] = useState<Job[]>([]);

  const [editingId, setEditingId] = useState<string | null>(null);

  async function fetchJobs() {
    try {
      const data = await getJobs();
      setJobs(data);
    } catch (error) {
      console.error("Erro ao carregar vagas:", error);
    }
  }

  useEffect(() => {
    fetchJobs();
  }, []);

  async function handleSubmit() {
    if (!job.company || !job.position) {
      alert("Preencha empresa e cargo.");
      return;
    }

    const now = new Date().toISOString();

    try {
      if (editingId) {
        await updateJob(editingId, {
          ...job,
          updatedAt: now,
        });

        setEditingId(null);
      } else {
        const newJob: Job = {
          id: crypto.randomUUID(),
          ...job,
          appliedAt: now,
          updatedAt: now,
        };

        await createJob(newJob);
      }

      await fetchJobs();
      setJob(initialJob);
    } catch (error) {
      console.error("Erro ao salvar vaga:", error);
      alert("Erro ao salvar vaga.");
    }
  }

  function editJob(id: string) {
    const jobToEdit = jobs.find((job) => job.id === id);

    if (!jobToEdit) return;

    setJob({
      company: jobToEdit.company,
      position: jobToEdit.position,
      salary: jobToEdit.salary,
      modality: jobToEdit.modality,
      location: jobToEdit.location ?? "",
      status: jobToEdit.status,
    });

    setEditingId(id);
  }

  async function moveJob(id: string, newStatus: string) {
    try {
      await updateJob(id, {
        status: newStatus,
      });

      await fetchJobs();
    } catch (error) {
      console.error("Erro ao mover vaga:", error);
    }
  }

  async function deleteJob(id: string) {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esta vaga?"
    );

    if (!confirmDelete) return;

    try {
      await deleteJobApi(id);
      await fetchJobs();
    } catch (error) {
      console.error("Erro ao excluir vaga:", error);
    }
  }

  return {
    jobs,
    job,
    setJob,
    editingId,
    handleSubmit,
    editJob,
    deleteJob,
    moveJob,
  };
}
