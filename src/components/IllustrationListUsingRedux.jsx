import Illustration from "./Illustration";
import "./IllustrationList.css";
import { IllustrationContext } from "../context/IllustrationContext";
import { useSelector } from "react-redux";

const IllustrationListUsingRedux = () => {
  const illustrations = useSelector(
    (state) => state.illustrations.illustrations,
  );

  console.log(illustrations);

  const filteredList = illustrations.filter((illus) => illus.year >= 2024);

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
export default IllustrationListUsingRedux;
