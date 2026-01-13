import { useState } from "react";

const AddIllustration = ({ addForm }) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ name, year, date });

    addForm({ name, year, date });
    setName("");
    setYear("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Year</label>
      <input
        type="number"
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
      />
      <label>Date</label>
      <input
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add Illustration</button>
    </form>
  );
};
export default AddIllustration;
