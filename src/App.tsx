import { useJobs } from "./hooks/useJobs";
import { useJobFilters } from "./hooks/useJobFilters";

import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import JobBoard from "./components/JobBoard";
import JobFilters from "./components/JobFilters";
import JobForm from "./components/JobForm";

function App() {
  const {
    jobs,
    job,
    setJob,
    editingId,
    handleSubmit,
    editJob,
    deleteJob,
    moveJob,
  } = useJobs();

  const { search, setSearch, statusFilter, setStatusFilter, filteredJobs } =
    useJobFilters(jobs);

  return (
    <main>
     <header className="header">

  <div>

    <h1 className="title">
      JobFlow
    </h1>

    <p className="subtitle">
      Organize suas candidaturas de forma simples.
    </p>

  </div>

</header>

      <section className="section">
        <Dashboard jobs={jobs} />
      </section>

      <section>
        <h2>{editingId ? "Editar vaga" : "Nova vaga"}</h2>

        <JobForm
          job={job}

          setJob={setJob}

          handleSubmit={handleSubmit}

          editingId={editingId}
        />
      </section>

      <JobFilters
        search={search}

        setSearch={setSearch}

        statusFilter={statusFilter}

        setStatusFilter={setStatusFilter}
      />

      <section>
        <h2>Suas vagas</h2>

        {filteredJobs.length === 0 ? (
          <p>Nenhuma vaga encontrada.</p>
        ) : (
          <JobBoard
            jobs={filteredJobs}

            editJob={editJob}

            deleteJob={deleteJob}

            moveJob={moveJob}
          />
        )}
      </section>

      <Footer />
    </main>
  );
}

export default App;
