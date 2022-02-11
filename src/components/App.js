import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [fourSushis, setFourSushis] = useState([])
  const [budget, setBudget] = useState(100)

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((data) => {
        const allSushis = data.map(s => {
          return {...s, eaten: false}
        })
        const four = allSushis.splice(0, 4)
        setSushis(allSushis)
        setFourSushis(four)
      })
  }, [])

  const getSushi = () => {
    const allSushis = sushis
    const four = allSushis.splice(0, 4)
    setSushis(allSushis)
    setFourSushis(four)
  }

  const eatSushi = (e) => {
    const newSushis = fourSushis.map((s) => s.id == e.target.id ? {...s, eaten: true} : s)
    // console.log(newSushis)
    setFourSushis(newSushis)
  }

  return (
    <div className="app">
      <SushiContainer fourSushis={fourSushis} getSushi={getSushi} eatSushi={eatSushi} />
      <Table fourSushis={fourSushis} />
    </div>
  );
}

export default App;
