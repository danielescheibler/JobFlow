import type { Job } from "../types/jobs";

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


  return (
    <section>

      <h2>Resumo</h2>

      <p>Total de vagas: {total}</p>

      <p>📨 Enviadas: {enviados}</p>

      <p>📞 Entrevistas: {entrevistas}</p>

      <p>💻 Testes técnicos: {testes}</p>

      <p>🤝 Ofertas: {ofertas}</p>

      <p>❌ Rejeitadas: {rejeitados}</p>

    </section>
  );
}


export default Dashboard;