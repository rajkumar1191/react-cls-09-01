import IllustrationList from "./components/IllustrationList";
import "./App.css";
import style from "./App1.module.css";
import AddIllustration from "./components/AddIllustration";
import { useState } from "react";
import AddIllustrationReducer from "./components/AddIllustrationReducer";
import AddIllustrationReducerWithRef from "./components/AddIllustrationReducerWithRef";

const App = () => {
  const title = "Illustration details";
  const isCompleted = false;

  let illustrations = [
    { name: "Sunset", year: 2022, date: "05-15" },
    { name: "Mountain", year: 2023, date: "08-22" },
    { name: "Ocean", year: 2024, date: "11-30" },
    { name: "Sky", year: 2026, date: "11-30" },
  ];

  const [illustrationList, setIllustrationList] = useState(illustrations);

  const handleBtnClick = () => {
    alert("Button clicked!");
  };

  const handleFormSubmit = (data) => {
    console.log("Form submitted", data);
    setIllustrationList([...illustrationList, data]);
    console.log("Updated illustrations", illustrations);
  };

  return (
    <>
      <h1 className="title">Welcome to the React App</h1>
      <p className={style.title}>React Basic Application</p>
      <p className={isCompleted ? "success" : "error"}>
        {isCompleted ? "Successfully completed" : "Not completed yet"}
      </p>
      <h2 style={{ fontSize: "1.5rem", color: isCompleted ? "#ccc" : "red" }}>
        {title}
      </h2>
      <AddIllustrationReducer addForm={handleFormSubmit} />
      <AddIllustrationReducerWithRef addForm={handleFormSubmit} />
      <IllustrationList
        name={title}
        year={"2026"}
        date={"12-01"}
        illusList={illustrationList}
        btnClick={handleBtnClick}
      />
    </>
  );
};

export default App;
