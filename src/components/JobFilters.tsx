type Props = {
  search: string;
  setSearch: (value: string) => void;

  statusFilter: string;
  setStatusFilter: (value: string) => void;
};

function JobFilters({
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
}: Props) {

  return (

    <section className="section">

      <div className="filters">

        <input
          className="input"
          type="text"
          placeholder="Buscar empresa ou cargo..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          className="input"
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(e.target.value)
          }
        >

          <option value="Todos">
            Todos
          </option>

          <option value="Enviado">
            Enviado
          </option>

          <option value="Entrevista">
            Entrevista
          </option>

          <option value="Teste técnico">
            Teste técnico
          </option>

          <option value="Oferta">
            Oferta
          </option>

          <option value="Rejeitado">
            Rejeitado
          </option>

        </select>

      </div>

    </section>

  );

}

export default JobFilters;