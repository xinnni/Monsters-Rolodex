import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const filterdMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const handleChange = useCallback((e) => {
    setSearchField(e.target.value);
  }, []);

  const monstersGroup = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const DATA = res.data;
        setMonsters(DATA);
      });
  };

  useEffect(() => {
    monstersGroup();
  }, []);

  return (
    <div className="App">
      <h1 className="monsters-neon">Monsters Rolodex</h1>
      <SearchBox handleChange={handleChange} />
      <CardList monsters={filterdMonsters} />
    </div>
  );
}

export default App;
