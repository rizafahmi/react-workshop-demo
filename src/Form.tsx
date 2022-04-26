import { useState, useEffect } from 'react';

import './Form.css';

interface FormProp {
  handleData: (name: string) => void;
}

function Form({ handleData }: FormProp) {

  const [name, setName] = useState("");

  useEffect(function () {
    console.log("Form Muncul");
    document.title = `New Player: ${name}`;

    return function () {
      console.log("Form menghilang");

    }

  }, [name]);

  function handleChange(event: { target: { value: string } }) {
    setName(event.target.value);
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();
    // console.log("Form submit with name: ", name);
    handleData(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Give me some name..."
        onChange={handleChange}
        value={name}
      />
      <button type="submit">Save</button>
    </form>
  )
}

export default Form;