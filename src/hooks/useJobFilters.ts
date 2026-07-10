import { useState } from "react";
import type { Job } from "../types/jobs";

export function useJobFilters(jobs: Job[]) {

  const [search, setSearch] = useState("");

  const [statusFilter, setStatusFilter] = useState("Todos");


  const filteredJobs = jobs.filter((job) => {

    const searchLower = search.toLowerCase();


    const matchesSearch =
      job.company.toLowerCase().includes(searchLower) ||
      job.position.toLowerCase().includes(searchLower);


    const matchesStatus =
      statusFilter === "Todos" ||
      job.status === statusFilter;


    return matchesSearch && matchesStatus;

  });


  return {

    search,

    setSearch,

    statusFilter,

    setStatusFilter,

    filteredJobs,

  };

}