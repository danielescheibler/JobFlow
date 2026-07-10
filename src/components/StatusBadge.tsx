type Props = {
  status: string;
};


function StatusBadge({ status }: Props) {

  const statusConfig: Record<
    string,
    {
      className: string;
      icon: string;
    }
  > = {

    "Enviado": {
      className: "sent",
      icon: "📨",
    },

    "Entrevista": {
      className: "interview",
      icon: "📞",
    },

    "Teste técnico": {
      className: "test",
      icon: "💻",
    },

    "Oferta": {
      className: "offer",
      icon: "🤝",
    },

    "Rejeitado": {
      className: "rejected",
      icon: "❌",
    },

  };


  const current =
    statusConfig[status] ?? {
      className: "default",
      icon: "📌",
    };


  return (

    <span
      className={`badge ${current.className}`}
    >

      {current.icon} {status}

    </span>

  );

}


export default StatusBadge;