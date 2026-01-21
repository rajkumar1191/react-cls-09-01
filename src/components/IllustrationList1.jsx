import React from "react";
import "./IllustrationList.css";

const IllustrationList1 = ({ illustrations, onSelect }) => {
  console.log("IllustrationList1 rendered", illustrations);
  return (
    <div>
      <div className="illusContainer">
        <ul>
          {illustrations.length > 0 && illustrations.map((illus, index) => (
            <li key={index} onClick={() => onSelect(illus)}>
              {illus.name} - {illus.year} - {illus.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default React.memo(IllustrationList1);
