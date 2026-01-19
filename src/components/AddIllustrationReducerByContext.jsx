import { useReducer, useContext } from "react";
import { IllustrationContext } from "../context/IllustrationContext";

const initialState = {
  name: "",
  year: "",
  date: "",
  errors: null,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
        errors: null,
      };
    case "SET_ERRORS":
      return {
        ...state,
        errors: action.errors || null,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const AddIllustrationReducerByContext = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { dispatch: globalDispatch } = useContext(IllustrationContext);
  const { name, year, date, errors } = state;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !year || !date) {
      dispatch({
        type: "SET_ERRORS",
        errors: "All fields are required.",
      });
      return;
    }

    // addForm({ name, year, date });
    globalDispatch({
      type: "ADD",
      illustration: { name, year, date },
    });
    dispatch({ type: "RESET" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })
        }
      />
      <label>Year</label>
      <input
        type="number"
        value={year}
        onChange={(e) =>
          dispatch({
            type: "SET_FIELD",
            field: "year",
            value: Number(e.target.value),
          })
        }
      />
      <label>Date</label>
      <input
        type="text"
        value={date}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "date", value: e.target.value })
        }
      />

      {errors && <div style={{ color: "red" }}>{errors}</div>}
      <button type="submit">Add Illustration</button>
    </form>
  );
};
export default AddIllustrationReducerByContext;
