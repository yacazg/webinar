import { useRef } from "react"

export default function Hero() {
  const h1Ref = useRef(null)

  function handleButtonClick() {
    h1Ref.current.textContent = "React is fun!"
  }

  return (
    <div className="max-w-screen-xl mx-auto aspect-video flex items-center justify-center text-center p-4">
      <div>
        <h1
          ref={h1Ref}
          className="text-8xl mt-8 font-bold bg-gradient-to-r from-sky-900 to-sky-700 text-transparent bg-clip-text"
        >
          Hello World
        </h1>
        <p className="mt-4 text-xl font-mono text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </p>

        <button
          onClick={handleButtonClick}
          className="my-8 text-2xl border-4 border-sky-700 text-sky-700 hover:bg-sky-700 hover:text-sky-100 rounded-lg px-4 py-2.5 font-semibold"
        >
          Click me 🎉
        </button>
      </div>
    </div>
  )
}
