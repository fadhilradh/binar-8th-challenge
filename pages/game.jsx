import { useState, useRef } from 'react'
import { NavBar, SuitImage } from '../components'

const Game = () => {
  // const [playerChoice, setPlayerChoice] = useState('')
  const [computerChoice, setComputerChoice] = useState('')
  const playerChoice = useRef('')

  return (
    <section className="bg-[#9c835f] max-w-screen-2xl mx-auto bg-center bg-cover flex col h-screen">
      <NavBar onlyLogo />
      <div className="flex justify-between w-[70%] h-[70vh] px-20 mt-44 mx-auto">
        <div className="flex col items-start justify-center">
          <h4 className="text-2xl mb-10 font-bold text-center">PLAYER 1</h4>
          <div className="flex col gap-y-10">
            <SuitImage cname="batu" src="/assets/game/batu.png" ref={}/>
            <SuitImage cname="gunting" src="/assets/game/gunting.png" />
            <SuitImage cname="kertas" src="/assets/game/kertas.png" />
          </div>
        </div>

        <div className="flex col justify-center">
          <h3 className="invisible">VS</h3>

          <div className="">
            <p className=" text-3xl font-bold text-center">GAME RESULT</p>
          </div>
        </div>

        <div className="flex col justify-center items-center">
          <h4 className="text-2xl mb-10 font-bold">COM</h4>
          <SuitImage src="/assets/game/kertas.png" />
        </div>
      </div>
    </section>
  )
}

export default Game
