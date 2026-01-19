import { useContext } from "react";
import Illustration from "./Illustration";
import "./IllustrationList.css";
import { IllustrationContext } from "../context/IllustrationContext";

const IllustrationList = () => {
  const { state } = useContext(IllustrationContext);

  console.log(state.illustrations);

  const filteredList = state.illustrations.filter(
    (illus) => illus.year >= 2024,
  );

  return (
    <div>
      <div className="illusContainer">
        {filteredList.map((illus, index) => (
          <Illustration key={index} illusData={illus} />
        ))}
      </div>
    </div>
  );
};
export default IllustrationList;
