import Spade from "./Spade";
import { useAnimate, stagger } from "motion/react"

export default function Card() {
  const [scope, animate] = useAnimate()

  async function animateCard() {
    const sequence = [
      [scope.current, { rotateZ: 8, scale: 1.2 },],
      [scope.current, { rotateZ: -8 } ],
      [scope.current, { rotateZ: 0, scale: 0.85 }],
      [scope.current, { rotateZ: 0, scale: 1 }, {  type: "spring", damping: 5 }],
    ]

    await animate(sequence, { duration: 0.4})
  }
  
  function callAnimation() {
    animateCard()
  }
  
  return (
    <div>
      <div ref={scope} className="aspect-playing-card bg-white p-4 rounded-lg shadow-xl w-32 mx-auto relative border flex flex-col justify-between">
        <span className="top-2 left-2 absolute text-black font-m6x11 text-2xl">8</span>
        <div className="flex justify-center items-center">
          <Spade />
          <Spade />
        </div>
        <div className="flex justify-center items-center">
          <Spade />
        </div>
        <div className="flex justify-center items-center">
          <Spade />
          <Spade />
        </div>
        <div className="flex justify-center items-center rotate-180">
          <Spade />
        </div>
        <div className="flex justify-center items-center rotate-180">
          <Spade />
          <Spade />
        </div>
        <span className="right-2 bottom-2 absolute text-black font-m6x11 text-2xl">8</span>
      </div>
      <button className="mx-auto rounded-lg shadow-md p-1 border border-white/20 px-2 bg-white/10 text-black dark:text-white cursor-pointer transition-all " onClick={callAnimation}>Get your score</button>
    </div>
  );
}
