import type { Job } from "../types/jobs";
import RecentJobs from "./RecentJobs";

type Props = {
  jobs: Job[];
};

function Dashboard({ jobs }: Props) {

  const total = jobs.length;

  const enviados = jobs.filter(
    (job) => job.status === "Enviado"
  ).length;

  const entrevistas = jobs.filter(
    (job) => job.status === "Entrevista"
  ).length;

  const testes = jobs.filter(
    (job) => job.status === "Teste técnico"
  ).length;

  const ofertas = jobs.filter(
    (job) => job.status === "Oferta"
  ).length;

  const rejeitados = jobs.filter(
    (job) => job.status === "Rejeitado"
  ).length;


  const respostas = entrevistas + testes + ofertas;

  const taxaRetorno = total > 0
    ? Math.round((respostas / total) * 100)
    : 0;


  const metrics = [
    {
      title: "Total de vagas",
      value: total,
      icon: "📋"
    },
    {
      title: "Enviadas",
      value: enviados,
      icon: "📨"
    },
    {
      title: "Entrevistas",
      value: entrevistas,
      icon: "📞"
    },
    {
      title: "Testes técnicos",
      value: testes,
      icon: "💻"
    },
    {
      title: "Ofertas",
      value: ofertas,
      icon: "🤝"
    },
    {
      title: "Rejeitadas",
      value: rejeitados,
      icon: "❌"
    }
  ];


  return (
    <section className="dashboard">

      <div className="dashboard-header">
        <h2>Resumo das candidaturas</h2>

        <div className="response-rate">
          📈 Taxa de retorno:
          <strong>{taxaRetorno}%</strong>
        </div>
      </div>


      <div className="metrics-grid">

        {metrics.map((metric) => (
          <article
            className="metric-card"
            key={metric.title}
          >
            <span>
              {metric.icon}
            </span>

            <div>
              <h3>{metric.title}</h3>
              <strong>{metric.value}</strong>
            </div>

          </article>
        ))}

      </div>
        <RecentJobs jobs={jobs} />

    </section>
  );
}


export default Dashboard;