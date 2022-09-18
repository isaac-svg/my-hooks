import React, { useState } from "react";

const Usestate = () => {
  const [person, setPerson] = useState({ name: "", email: "", password: "" });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({
      ...person,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.name && person.email && person.password) {
      const newPerson = {
        ...person,
        id: new Date().getTime().toString(),
      };
      setPeople([...people, newPerson]);
    }
  };
  return (
    <div>
      <form className="form " onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={person.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            value={person.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={person.password}
            onChange={handleChange}
            name="password"
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      <ul>
        {people.map((person) => {
          return (
            <li key={person.id} className="item">
              <h2>{person.name}</h2>
              <p>{person.email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Usestate;
