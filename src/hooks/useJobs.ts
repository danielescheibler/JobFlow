import { useEffect, useState } from "react";

import type { Job, JobForm } from "../types/jobs";

import { loadJobs, saveJobs } from "../utils/storage";

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

  const [jobs, setJobs] = useState<Job[]>(loadJobs);

  const [editingId, setEditingId] = useState<string | null>(null);

  useEffect(() => {
    saveJobs(jobs);
  }, [jobs]);

  function handleSubmit() {
    if (!job.company || !job.position) {
      alert("Preencha empresa e cargo.");

      return;
    }

    const now = new Date().toISOString();

    if (editingId) {
      setJobs((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,

                ...job,

                updatedAt: now,
              }
            : item
        )
      );

      setEditingId(null);
    } else {
      const newJob: Job = {
        id: crypto.randomUUID(),

        ...job,

        appliedAt: now,

        updatedAt: now,
      };

      setJobs((prev) => [...prev, newJob]);
    }

    setJob(initialJob);
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

  function moveJob(
    id: string,

    newStatus: string
  ) {
    setJobs((prev) =>
      prev.map((job) =>
        job.id === id
          ? {
              ...job,

              status: newStatus,

              updatedAt: new Date().toISOString(),
            }
          : job
      )
    );
  }

  function deleteJob(id: string) {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esta vaga?"
    );

    if (!confirmDelete) return;

    setJobs((prev) => prev.filter((job) => job.id !== id));
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
