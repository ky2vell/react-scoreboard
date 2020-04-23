import React, { useState } from "react";
import "./App.css";
import TopRow from "./components/TopRow";
import BottomRow from "./components/BottomRow";
import Button from "./components/Button";

function App() {

  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} />
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <Button
            className={'homeButtons__touchdown'}
            text={'Home Touchdown'}
            score={() => { setHomeScore(homeScore + 7); }}
          />
          <Button
            className={'homeButtons__fieldGoal'}
            text={'Home Field Goal'}
            score={() => { setHomeScore(homeScore + 3); }}
          />
        </div>
        <div className="awayButtons">
          <Button
            className={'awayButtons__touchdown'}
            text={'Away Touchdown'}
            score={() => { setAwayScore(awayScore + 7); }}
          />
          <Button
            className={'awayButtons__fieldGoal'}
            text={'Away Field Goal'}
            score={() => { setAwayScore(awayScore + 3); }}
          />
        </div>
      </section>
    </div>
  );
}

export default App;
