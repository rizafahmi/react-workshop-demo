import { useState, useEffect } from 'react';

import './Form.css';

interface FormProp {
  handleData: (name: string) => void;
}

function Form({ handleData }: FormProp) {

  const [name, setName] = useState("");

  useEffect(function () {
    document.title = `New Player: ${name}`;

    return function () {
      console.log("Form menghilang");
    }

  }, [name]);

  // Did mount
  useEffect(function () {
    console.log("Dijalankan hanya sekali");

    // Unmount
    return function () {
      console.log("Unmounting");

    }

  }, []);

  // re-render
  useEffect(function () {
    console.log('Dijalankan setiap render');
  });

  // didUpdate
  useEffect(function () {
    console.log("Dijalankan ketika variable/state name berubah");
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