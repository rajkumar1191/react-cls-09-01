import Illustration from "./Illustration";

const IllustrationList = ({ name, illusList, btnClick }) => {
  console.log(illusList);
  
  const filteredList = illusList.filter(illus => illus.year >= 2024);

  return (
    <div>
      <h2>{name}</h2>
      {filteredList.map((illus, index) => (
        <Illustration key={index} illusData={illus} btnClick={btnClick} />
      ))}
    </div>
  );
};
export default IllustrationList;

