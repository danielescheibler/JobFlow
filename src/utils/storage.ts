import type { Job } from "../types/jobs";

const STORAGE_KEY = "jobs";

export function loadJobs(): Job[] {
  const savedJobs = localStorage.getItem(STORAGE_KEY);

  if (!savedJobs) {
    return [];
  }

  const parsedJobs: Job[] = JSON.parse(savedJobs);

  return parsedJobs.map((job) => ({
    ...job,

    id: job.id ?? crypto.randomUUID(),

    appliedAt: job.appliedAt ?? new Date().toISOString(),

    updatedAt: job.updatedAt ?? new Date().toISOString(),
  }));
}

export function saveJobs(jobs: Job[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jobs));
}
