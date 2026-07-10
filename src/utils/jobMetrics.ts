import type { Job } from "../types/jobs";


export function getJobMetrics(jobs: Job[]) {

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


  const respostas =
    entrevistas +
    testes +
    ofertas +
    rejeitados;


  const taxaRetorno =
    total > 0
      ? Math.round((respostas / total) * 100)
      : 0;


  const taxaEntrevista =
    total > 0
      ? Math.round((entrevistas / total) * 100)
      : 0;


  const taxaOferta =
    total > 0
      ? Math.round((ofertas / total) * 100)
      : 0;


  return {
    total,
    enviados,
    entrevistas,
    testes,
    ofertas,
    rejeitados,
    taxaRetorno,
    taxaEntrevista,
    taxaOferta,
  };

}