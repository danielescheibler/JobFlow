type Props = {
  status: string;
};

function StatusBadge({ status }: Props) {

  const statusClass: Record<string, string> = {
    "Enviado": "sent",
    "Entrevista": "interview",
    "Teste técnico": "test",
    "Oferta": "offer",
    "Rejeitado": "rejected",
  };

  const icons: Record<string, string> = {
    "Enviado": "📨",
    "Entrevista": "📞",
    "Teste técnico": "💻",
    "Oferta": "🤝",
    "Rejeitado": "❌",
  };

  return (

    <span
      className={`badge ${statusClass[status]}`}
    >
      {icons[status]} {status}
    </span>

  );

}

export default StatusBadge;