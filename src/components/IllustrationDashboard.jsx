import { useCallback, useEffect, useMemo, useState } from "react";
import Illustration from "./Illustration";
import "./IllustrationList.css";
import IllustrationList1 from "./IllustrationList1";

const IllustrationDashboard = () => {
  console.log("Parent component rendered");

  const [count, setCount] = useState(0);
  const [yearFilter, setYearFilter] = useState(2024);

  // useMemo(() => {}, []);
  // useCallback(() => {}, []);
  // useEffect(() => {}, []);

  useEffect(() => {
    console.log("Year filter changed in Dashboard:", yearFilter);
  }, [yearFilter]);

  // Memoizing filtered list to prevent unnecessary recalculations
  const filteredList = useMemo(() => {
    const illustrations = [
      { name: "Sunset", year: 2022, date: "05-15" },
      { name: "Mountain", year: 2023, date: "08-22" },
      { name: "Ocean", year: 2024, date: "11-30" },
      { name: "Sky", year: 2026, date: "11-30" },
    ];
    console.log("Filtering illustrations");
    return illustrations.filter((illus) => illus.year >= yearFilter);
  }, [yearFilter]);

  // useCallback to memoize the handleSelect function
  const handleSelect = useCallback((e) => {
    console.log("Year filter changed", e.name);
  }, []);

  return (
    <div>
      <h2>Illustration Dashboard</h2>
      <button onClick={() => setCount(count + 1)}>
        Re render Parent ({count})
      </button>
      <br />
      <br />
      <label>Filter by Year: </label>
      <input
        type="number"
        value={yearFilter}
        onChange={(e) => setYearFilter(Number(e.target.value))}
      />
      <div className="illusContainer">
        <IllustrationList1
          illustrations={filteredList}
          onSelect={handleSelect}
        />
      </div>
    </div>
  );
};
export default IllustrationDashboard;
