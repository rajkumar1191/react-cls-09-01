import { useReducer, useRef } from "react";

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

const AddIllustrationReducerWithRef = ({ addForm }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const nameInputRef = useRef(null);
  const yearInputRef = useRef(null);
  const dateInputRef = useRef(null);

  const submitCountRef = useRef(0);

  const isSubmittingRef = useRef(false);

  const { name, year, date, errors } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit count:", submitCountRef.current);

    if (isSubmittingRef.current) return;
    isSubmittingRef.current = true;

    if (!name) {
      dispatch({
        type: "SET_ERRORS",
        errors: "All fields are required.",
      });
      isSubmittingRef.current = false;
      nameInputRef.current.focus();

      return;
    }
    if (!year) {
      dispatch({
        type: "SET_ERRORS",
        errors: "All fields are required.",
      });
      isSubmittingRef.current = false;
      yearInputRef.current.focus();

      return;
    }
    if (!date) {
      dispatch({
        type: "SET_ERRORS",
        errors: "All fields are required.",
      });
      isSubmittingRef.current = false;
      dateInputRef.current.focus();
      return;
    }

    submitCountRef.current += 1;

    console.log("Submit count:", submitCountRef.current);
    addForm({ name, year, date });
    dispatch({ type: "RESET" });
    nameInputRef.current.focus();
    isSubmittingRef.current = false;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        value={name}
        ref={nameInputRef}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })
        }
      />
      <label>Year</label>
      <input
        type="number"
        value={year}
        ref={yearInputRef}
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
        ref={dateInputRef}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "date", value: e.target.value })
        }
      />

      {errors && <div style={{ color: "red" }}>{errors}</div>}
      <button type="submit">Add Illustration</button>
    </form>
  );
};
export default AddIllustrationReducerWithRef;
