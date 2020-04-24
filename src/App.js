import React, { useState } from 'react'
import './App.css'
import TopRow from './components/TopRow'
import BottomRow from './components/BottomRow'
import Button from './components/Button'

function App() {
  const [homeScore, setHomeScore] = useState(0)
  const [awayScore, setAwayScore] = useState(0)

  const homeTouchDown = () => {
    setHomeScore(homeScore + 7)
  }
  const homeFieldGoal = () => {
    setHomeScore(homeScore + 3)
  }
  const awayTouchDown = () => {
    setAwayScore(awayScore + 7)
  }
  const awayFieldGoal = () => {
    setAwayScore(awayScore + 3)
  }

  return (
    <div className='container'>
      <section className='scoreboard'>
        <TopRow homeScore={homeScore} awayScore={awayScore} />
        <BottomRow />
      </section>
      <section className='buttons'>
        <div className='homeButtons'>
          <Button
            className={'homeButtons__touchdown'}
            text={'Home Touchdown'}
            score={homeTouchDown}
          />
          <Button
            className={'homeButtons__fieldGoal'}
            text={'Home Field Goal'}
            score={homeFieldGoal}
          />
        </div>
        <div className='awayButtons'>
          <Button
            className={'awayButtons__touchdown'}
            text={'Away Touchdown'}
            score={awayTouchDown}
          />
          <Button
            className={'awayButtons__fieldGoal'}
            text={'Away Field Goal'}
            score={awayFieldGoal}
          />
        </div>
      </section>
    </div>
  )
}

export default App
