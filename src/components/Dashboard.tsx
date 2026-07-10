import type { Job } from "../types/jobs";
import RecentJobs from "./RecentJobs";
import ApplicationFunnel from "./ApplicationFunnel";
import { getJobMetrics } from "../utils/jobMetrics";


type Props = {
  jobs: Job[];
};


function Dashboard({ jobs }: Props) {


  const {
    total,
    enviados,
    entrevistas,
    testes,
    ofertas,
    rejeitados,
    taxaRetorno,
  } = getJobMetrics(jobs);



  const metrics = [

    {
      title: "Total de vagas",
      value: total,
      icon: "📋",
    },

    {
  title: "Taxa de retorno",
  value: `${taxaRetorno}%`,
  icon: "📈",
},

    {
      title: "Enviadas",
      value: enviados,
      icon: "📨",
    },

   
    {
      title: "Entrevistas",
      value: entrevistas,
      icon: "📞",
    },

    {
      title: "Testes técnicos",
      value: testes,
      icon: "💻",
    },

    {
      title: "Ofertas",
      value: ofertas,
      icon: "🤝",
    },

    {
      title: "Rejeitadas",
      value: rejeitados,
      icon: "❌",
    },

  ];



  return (

    <section className="dashboard">


      <div className="dashboard-header">

        <h2>
          Resumo das candidaturas
        </h2>


   

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

              <h3>
                {metric.title}
              </h3>


              <strong>
                {metric.value}
              </strong>

            </div>


          </article>

        ))}


      </div>



      <ApplicationFunnel
        jobs={jobs}
      />


      <RecentJobs
        jobs={jobs}
      />


    </section>

  );

}


export default Dashboard;