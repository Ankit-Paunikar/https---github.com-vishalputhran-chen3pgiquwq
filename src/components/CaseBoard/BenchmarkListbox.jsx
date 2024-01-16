// import { listItemButtonClasses } from "@mui/material"
import { useEffect } from "react";

function BenchmarkListbox({
  lstOptions,
  id,
  size,
  onOptionDblClickEvent,
  isMultiple = true,
}) {
  useEffect(() => {});
  return (
    <>
      <select
        id={id}
        onDoubleClick={(event) => onOptionDblClickEvent(event)}
        size={size || "10"}
        className="form-select form-select-sm"
        multiple={isMultiple}
        aria-label="multiple select"
      >
        {lstOptions.map((opt, indx) => {
          return (
            <option key={opt[0]} value={opt[0]}>
              {opt[1]}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default BenchmarkListbox;
