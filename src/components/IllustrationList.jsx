import Illustration from "./Illustration";
import "./IllustrationList.css";

const IllustrationList = ({ name, illusList, btnClick }) => {
  console.log(illusList);

  const filteredList = illusList.filter((illus) => illus.year >= 2024);

  return (
    <div>
      <h2>{name}</h2>

      <div className="illusContainer">
        {filteredList.map((illus, index) => (
          <Illustration key={index} illusData={illus} btnClick={btnClick} />
        ))}
      </div>
    </div>
  );
};
export default IllustrationList;
