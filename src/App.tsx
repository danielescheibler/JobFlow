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
        <div className="pipeline-bg">
          <span>Enviado</span>
          <i></i>
          <span>Entrevista</span>
          <i></i>
          <span>Teste</span>
          <i></i>
          <span>Oferta</span>
        </div>

        <div className="hero-content">
          <h1 className="title">
            <span className="brand-icon">▸</span> JobFlow
          </h1>

          <h2 className="hero-title">Sua jornada profissional organizada</h2>

          <p className="subtitle">
            Organize candidaturas, acompanhe etapas e visualize seu progresso
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
