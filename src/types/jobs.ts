export type Job = {
  id: string;
  company: string;
  position: string;
  salary: string;
  modality: string; // "Remoto", "Híbrido", ou "Presencial"
  location?: string; // Adicionamos essa propriedade opcional
  status: string;
  appliedAt: string;
  updatedAt: string;
};