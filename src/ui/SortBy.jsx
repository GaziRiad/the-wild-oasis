import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchPrams, setSearchParams] = useSearchParams();

  // Empty string automatically select the first element
  const sortBy = searchPrams.get("sortBy") || "";

  function handleChange(e) {
    searchPrams.set("sortBy", e.target.value);
    setSearchParams(searchPrams);
  }

  return (
    <Select
      value={sortBy}
      options={options}
      type="white"
      onChange={handleChange}
    />
  );
}

export default SortBy;
