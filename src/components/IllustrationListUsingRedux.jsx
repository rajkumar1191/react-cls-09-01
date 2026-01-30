import Illustration from "./Illustration";
import "./IllustrationList.css";
import { IllustrationContext } from "../context/IllustrationContext";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const IllustrationListUsingRedux = () => {
  const [illusData, setIllusData] = useState([]);
  const illustrations = useSelector(
    (state) => state.illustrations.illustrations,
  );

  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Dispatch an action to update the Redux store with fetched data
    //     // For example: dispatch({ type: 'SET_ILLUSTRATIONS', payload: data });
    //     setIllusData(data);
    //   }
    //   );
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setIllusData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(illusData);

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
