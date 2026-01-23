import "./../App.css";
import style from "./../App1.module.css";
import IllustrationDashboard from "./IllustrationDashboard";

const Home = () => {
  const title = "Illustration details";
  const isCompleted = false;

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
    </>
  );
};

export default Home;
