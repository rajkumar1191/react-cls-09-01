import IllustrationList from "./components/IllustrationList";

const App = () => {
  const title = "Illustration details";

  const illustrations = [
    { name: "Sunset", year: 2022, date: "05-15" },
    { name: "Mountain", year: 2023, date: "08-22" },
    { name: "Ocean", year: 2024, date: "11-30" },
    { name: "Sky", year: 2026, date: "11-30" },
  ];

  const handleBtnClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <h1>Welcome to the React App</h1>
      <h2>{title}</h2>
      <IllustrationList name={title} year={"2026"} date={"12-01"} illusList={illustrations} btnClick={handleBtnClick} />
    </>
  );
};

export default App;
