import type { Job, JobForm } from "../types/jobs";

import api from "./api";

export async function getJobs(): Promise<Job[]> {
  const response = await api.get("/jobs");

  return response.data;
}

export async function createJob(job: Job) {
  const response = await api.post("/jobs", job);

  return response.data;
}

export async function updateJob(id: string, job: Partial<Job>) {
  const response = await api.patch(`/jobs/${id}`, job);

  return response.data;
}

export async function deleteJobApi(id: string) {
  await api.delete(`/jobs/${id}`);
}
