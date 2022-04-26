import { useEffect, useState } from 'react';

import Players from './Players';
import Form from './Form';
import Header from './Header';
import ToggleButton from './ToggleButton';
import { PlayerT } from './types';

import './App.css';

function App() {
  let [players, setPlayers] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  async function getData() {
    try {
      const result = await fetch(`https://prod-qore-app.qorebase.io/nuMHyithxxHTIVF/allTopScore/rows?limit=50&offset=0&$order=asc`);
      const data = await result.json();
      setPlayers(data.nodes);
      console.log(data.nodes);

      setDataLoaded(true);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(function () {
    console.log("Get data...");

    getData();

    return function () {
      setDataLoaded(false);
    }
  }, []);



  let title: string = 'Feedloop';

  function handleData(name: string) {
    console.log("Form submit with name: ", name);
    // Insert data player
    setPlayers([...players, { id: players.length + 1, name, score: 10 }])
  }

  async function handleIncrement(id: number, score: number) {
    console.log(`Incrementing ${id}: ${score}`);
    try {
      await fetch(`https://prod-qore-app.qorebase.io/nuMHyithxxHTIVF/allTopScore/rows/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ score: score + 10 })
      });
      getData();

    } catch (error) {
      console.error(error);
    }


  }
  function handleDecrement(id) {
    console.log("Decrement:", id);
  }


  return (
    <div className="container">
      <Header>
        <h1><i>📈</i> {title} Leaderboard</h1>
      </Header>
      <ToggleButton />
      <div style={{ backgroundColor: 'blue' }}></div>
      {dataLoaded === true ? (
        <Players
          players={players}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      ) : <h3>Loading data...</h3>}

      <Form handleData={handleData} />

    </div>
  );
}

export default App;
