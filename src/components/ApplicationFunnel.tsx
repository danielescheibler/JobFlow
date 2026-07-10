import type { Job } from "../types/jobs";


type Props = {
  jobs: Job[];
};


function ApplicationFunnel({ jobs }: Props) {

  const stages = [
    {
      label: "Enviadas",
      status: "Enviado",
      icon: "📨",
    },
    {
      label: "Entrevistas",
      status: "Entrevista",
      icon: "📞",
    },
    {
      label: "Testes técnicos",
      status: "Teste técnico",
      icon: "💻",
    },
    {
      label: "Ofertas",
      status: "Oferta",
      icon: "🤝",
    },
  ];


  const total = jobs.length;


  return (
    <section className="funnel">

      <h2>
        Funil de candidaturas
      </h2>


      <div className="funnel-list">

        {stages.map((stage) => {

          const amount = jobs.filter(
            (job) => job.status === stage.status
          ).length;


          const percentage =
            total > 0
              ? (amount / total) * 100
              : 0;


          return (

            <div
              className="funnel-item"
              key={stage.status}
            >

              <div className="funnel-header">

                <span>
                  {stage.icon} {stage.label}
                </span>


                <strong>
                  {amount}
                </strong>

              </div>


              <div className="funnel-bar">

                <div
                  className="funnel-progress"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}


export default ApplicationFunnel;