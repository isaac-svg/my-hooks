import React, { useReducer, useState } from "react";
import Modal from "./Modal";

const reducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const newPerson = [...state.people, action.payload];

    return {
      ...state,
      isModalOpen: true,
      modalContent: "item added",
      people: newPerson,
    };
  }
  if (action.type === "REMOVE") {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );

    return {
      ...state,
      people: newPeople,
      modalContent: "Item removed",
      isModalOpen: true,
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return {
      ...state,
      isModalOpen: false,
    };
  }
  if (action.type === "EMPTY") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please enter a value",
    };
  }
  // throw new Error("no matching action");
  return state;
};
const defaultState = {
  isModalOpen: false,
  modalContent: "",
  people: [],
};
const Usereducer = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { id: new Date().getTime().toString(), name };
    if (name) {
      dispatch({ type: "ADD_ITEM", payload: newPerson });
      setName("");
    } else {
      dispatch({ type: "EMPTY" });
    }
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <section className="section">
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="input">Input</label>
          <input
            type="text"
            id="
      input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>

      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h2>{person.name}</h2>
            <button
              className="btn"
              onClick={() => dispatch({ type: "REMOVE", payload: person.id })}
            >
              remove
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Usereducer;
