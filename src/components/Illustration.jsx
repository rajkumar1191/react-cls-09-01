import "./Illustration.css";

const Illustration = ({ illusData, btnClick }) => {
  return (
    <div className="illusData">
      <p>Name: {illusData.name}</p>
      <p>Year: {illusData.year}</p>
      <p>Date: {illusData.date}</p>
      <button onClick={btnClick}>Click Me</button>
    </div>
  );
};
export default Illustration;
