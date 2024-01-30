import React, { useState } from "react";
import useRangeContext from "../contexts/RangeContext";

function Range() {
  const [rangeValue, setRangeValue] = useState(0);
  const { darkMode, lightMode } = useRangeContext();
  function handleRange({ target }) {
    setRangeValue(target.value);
    if (target.value % 2 == 0) lightMode();
    else darkMode();
  }
  return (
    <>
      <div className="text-center my-5">
        <p>Value = {rangeValue}</p>
        <input type="range" value={rangeValue} onChange={handleRange} />
      </div>
    </>
  );
}
export default Range;
