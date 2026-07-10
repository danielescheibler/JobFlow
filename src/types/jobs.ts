export type Job = {
  id: string;
  company: string;
  position: string;
  salary: string;
  modality: string;
  status: string;
  appliedAt: string;
  updatedAt: string;
};

export type JobForm = Omit<Job, "id" | "appliedAt" | "updatedAt">;