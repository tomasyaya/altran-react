import React from "react";

export function Form({ inputValue, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input value={inputValue} placeholder={"tarea"} onChange={handleChange} />
      <input type="submit" />
    </form>
  );
}
