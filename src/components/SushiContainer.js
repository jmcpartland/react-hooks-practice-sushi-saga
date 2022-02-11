import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ fourSushis, getSushi, eatSushi }) {
  const sushisList = fourSushis.filter((e) => !e.eaten).map((s) => 
    <Sushi key={s.id} sushi={s} eatSushi={eatSushi} />
  )

  return (
    <div className="belt">
     {sushisList}
      <MoreButton getSushi={getSushi} />
    </div>
  );
}

export default SushiContainer;
