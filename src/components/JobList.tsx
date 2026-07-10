import type { Job } from "../types/jobs";
import JobCard from "./JobCard";

type Props = {
  jobs: Job[];
  editJob: (id:string)=>void;
  deleteJob:(id:string)=>void;
};


function JobList({
  jobs,
  editJob,
  deleteJob,
}: Props){

  return (
    <div>
      {jobs.map((job)=>(
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