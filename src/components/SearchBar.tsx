type Props = {
  value: string;
  onChange: (value: string) => void;
};

function SearchBar({
  value,
  onChange,
}: Props) {

  return (

    <input
      className="input"
      type="text"
      placeholder="🔍 Buscar empresa ou cargo..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    />

  );

}

export default SearchBar;